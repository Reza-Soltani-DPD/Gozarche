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
    idname:z.optional(z.string()),
    name:z.optional(z.string()),
    lastname:z.optional(z.string()),
    email:z.optional(z.string()),
    phonenumber:z.optional(z.string()),
    password:z.optional(z.string()),
    pasconfirm:z.optional(z.string()),
  })).mutation(async({input})=>{
    console.log("mutation",input);
    try{const user= await prisma.user.create({
      data:{
        aname:"asdfsf",
        name:"skjdfh",
        email:"sdf",
        password:"skdjf",
        phonenumber:"sdf"

      }
    })
    console.log(user)

  }catch(err){
    console.log(err);
    
  }

    
  })
});
