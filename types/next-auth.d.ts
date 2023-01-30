import { type DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      username:string
      isStaff:boolean
      isSuperUser:boolean
      id: string;
    } & DefaultSession["user"];
  }
  interface User{
    username:string
    isStaff:boolean
    isSuperUser:boolean
    id:string
    name:string|null
    email:string|null
    imageurl:string|null
    phonenumber:string|null
  }

}
