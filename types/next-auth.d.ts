import { type DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      username:string
      isStaff:boolean
      isSuperUser: boolean
      phonenumber:string
      id: string;
      imageurl:string|null
    } & DefaultSession["user"];
  }
  interface User{
    username:string
    isStaff:boolean
    isSuperUser:boolean
    id:string
    name:string|null
    email: string | null
    image?:null|undefined
    imageurl:string|null
    phonenumber:string
  }

}
