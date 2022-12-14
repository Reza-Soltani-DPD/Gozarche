import { z } from 'zod';
import { router, publicProcedure, protectedProcedure } from "../trpc";
import {prisma}from "../../db/client"
export const authRouter = router({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
  signUp:publicProcedure.input(z.object({
    username:z.optional(z.string()),
    name:z.string(),
    lastname:z.string(),
    email:z.string(),
    phonenumber:z.optional(z.string()),
    password:z.optional(z.string()),
    pasconfirm:z.optional(z.string()),
  }))
  .mutation(async({input})=>{
    console.log("mutation",input);
    try{
      const user= await prisma.user.create({
      data:{
        username:input.username,
        name:input.name,
        lastname:input.lastname,
        email:input.email,
        password:input.password,
        phonenumber:input.phonenumber

      }
    })
    console.log("user is :",user)

  }catch(err){
    console.log(err);
    
  }

    
  })
});
