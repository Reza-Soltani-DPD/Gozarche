import {prisma as cl} from './db'

// cl.$use(async (params,next)=>{
//   try{
//     if(params.model=="dbchanges" && !["create","createMany","updata","updataMany","delete","deleteMany","upsert"].includes(params.action)){
//       return await next(params)
//     }else{
//        await cl.dbchanges.create({data:{
//         argdata: JSON.stringify(params.args),
//         actionName:params.action,
//         modelName:params.model,
        
//       }})
//       const result =await next(params)
//       return result

//     }
//   }
//   catch(err){
//   }
// })

export const prisma =cl