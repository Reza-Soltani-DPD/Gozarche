// import { z } from "zod";
import { router, adminProcedure } from "../../../trpc";

export const tagsRouter = router({
	gettags:adminProcedure.query(({ctx})=>{return false})
})