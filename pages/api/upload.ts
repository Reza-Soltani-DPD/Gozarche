import type { NextApiRequest, NextApiResponse } from "next";

import nextConnect from "next-connect";
import multer, { diskStorage } from "multer";
import {prisma }from "../../server/db/client"
type SuccessfulResponse<T> = { data: T; error?: never; statusCode?: number };
type UnsuccessfulResponse<E> = { data?: never; error: E; statusCode?: number };

type ApiResponse<T, E = unknown> =
  | SuccessfulResponse<T>
  | UnsuccessfulResponse<E>;
type ResponseData = ApiResponse<string, string>;

interface NextConnectApiRequest extends NextApiRequest {
  file: Express.Multer.File;
}

const upload = multer({
  storage: diskStorage({
    destination: process.env.MEDIAFILES_DIR,
    filename: (req, file, cb) => {
      const fileExt =
        file.originalname.split(".")[file.originalname.split(".").length - 1];

      cb(null, Date.now().toString() + "." + fileExt);
      
    },
  }),
});

const apiRoute = nextConnect({
  onError(
    error,
    req: NextConnectApiRequest,
    res: NextApiResponse<ResponseData>
  ) {
    res.status(501).json({
      error: `Sorry something Happened! ${error.message}`,
    });
  },
  onNoMatch(req: NextConnectApiRequest, res: NextApiResponse<ResponseData>) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
}).use(upload.single("file"));

apiRoute.post(
  async (req: NextConnectApiRequest, res: NextApiResponse<ResponseData>) => {
    const fileExt=req.file.filename.split(".")[1]||""
    
    const mediatype = ["png","jpg","jpeg"].includes(fileExt)?"IMG":"VID"
    const media = await prisma.media.create({data:{
      url:"/media/"+req.file.filename,
      title:req.file.originalname,
      mediatype,
      ariaLabel:"media file"


    }})
    res.status(200).json({ data:media?  media.url:"/media/"+req.file.filename});
  }
);

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
