import { Post } from "@prisma/client";
import { prisma } from "../../../server/db/client";

// Create a new post
export default async function addPost(
  req: {
    body: {
      name: string;
      message: string;
      photo: string;
    };
  },
  res: any
) {
  try {
    const result = await prisma.post.create({
      data: {
        name: req.body.name,
        message: req.body.message,
        photo: req.body.photo,
      },
    });
    res.status(200).json(result);
  } catch {
    res.status(403).json({ err: "Error occured." });
  }
}
