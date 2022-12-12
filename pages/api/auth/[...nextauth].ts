import NextAuth from "next-auth";
import type{CallbacksOptions, NextAuthOptions} from 'next-auth'
import type{JWTDecodeParams,JWTEncodeParams} from 'next-auth/jwt'
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import Cookies from"cookies"
import { prisma } from "../../../server/db/client";
import type { NextApiRequest, NextApiResponse } from "next"
import { randomUUID } from 'crypto'
import cuid from 'cuid'
import { encode, decode } from 'next-auth/jwt'



const generateSessionToken = () => {
	// Use `randomUUID` if available. (Node 15.6++)
	return randomUUID?.() ??cuid()
  }

  const fromDate = (time:number, date = Date.now()) => {
	return new Date(date + time * 1000)
  }	

export const authOptions:NextAuthOptions ={
  providers: [
    CredentialsProvider({
      name:'credentialprovider',
      credentials:{
        username:{label:"Username",type:"text"},
        password:{label:'Password',type:'password'}
      },
      async authorize() {
        return null
    }})
  ],
  secret:process.env.NEXTAUTH_SECRET
}
export default async function auth(req: NextApiRequest, res: NextApiResponse) {

  // Do whatever you want here, before the request is passed down to `NextAuth` 
  const adapter=PrismaAdapter(prisma)


  const session={
    strategy:'database',
    maxAge:60*60*24*7,
  }



  const providers= [
    CredentialsProvider({
      name:'credentialprovider',
      credentials:{
        username:{label:"Username",type:"text"},
        password:{label:'Password',type:'password'}
      },
      async authorize(credentials) {
        const user = credentials?prisma.user.findFirst({
          where:{
            name: credentials.username,
            password : credentials.password

          
        }}):null
        if(user) {
          return user
        }
        return null
      }
    })
  ]

  
  const pages={
    signIn:'/authentication/login'
  }


  const secret=process.env.NEXTAUTH_SECRET


  const jwt={
    encode:async ({token, secret, maxAge}:JWTEncodeParams)=>{
      if (req.query.nextauth?.includes('callback') && req.query.nextauth?.includes('credentials') && req.method === 'POST') {
        const cookies = new Cookies(req,res)

        const cookie = cookies.get('next-auth.session-token')

        if(cookie) return cookie; else return '';

    }
    // Revert to default behaviour when not in the credentials provider callback flow
    return encode({token, secret, maxAge})
    },
    decode:async ({token, secret}:JWTDecodeParams)=> {
      if (req.query.nextauth?.includes('callback') && req.query.nextauth?.includes('credentials') && req.method === 'POST') {
          return null
      }

      // Revert to default behaviour when not in the credentials provider callback flow
      return decode({token, secret})
  }

  }



  const callbacks:Partial<CallbacksOptions>= {
    async session({ session,user}) {
      if (session.user&&user.id) {
        session.user = {...session.user,...user};
      }
      return session;
    },
    async signIn({user}){
      if (req.query.nextauth?.includes('callback') && req.query.nextauth.includes('credentials') && req.method === 'POST') {
        if (user) {
            const sessionToken = generateSessionToken()
            const sessionExpiry = fromDate(session.maxAge)
            
            await adapter.createSession({
                sessionToken: sessionToken,
                userId: user.id,
                expires: sessionExpiry
            })

            const cookies = new Cookies(req,res)

            cookies.set('next-auth.session-token', sessionToken, {
                expires: sessionExpiry
            })
        }
      }
      return true
    }
  }


  return await NextAuth(req, res, {
    adapter,
    providers,
    callbacks,
    jwt,
    pages,
    secret
    }
    
  )
}