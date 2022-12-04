import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { prisma } from "../../../server/db/client";

export const authOptions: NextAuthOptions = {
  session:{
    strategy:"jwt",

  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return user
    },
    async redirect({ url, baseUrl }) {
      return baseUrl+url
    },
    async session({ session, user, token }) {
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if(user?.id)token.id=user.id
      return token
    }
  },
  pages: {
    signIn: "/authenication/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "text", placeholder: "jsmith" },
        password: { label: "uassword", type: "password" },
      },
      async authorize(credentials) {
        
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.username,
          },
        });
        if (user && user.password == credentials?.password) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
