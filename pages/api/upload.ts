import type { NextApiRequest, NextApiResponse } from 'next'
import multer from "multer";
import nc from "next-connect";
import path from 'path'
import { prisma } from '../../server/db/db';
export const config = {
    api: {
        bodyParser: false,
    }
};

let storage =multer.diskStorage({destination:(req,file,cb)=>{
    cb(null,"/public/uploads")
}},
)
let upload = multer({
    storage:storage
})

export default async function handler(req: NextApiRequest, res: NextApiResponse){
res.status(200) 
   
}

