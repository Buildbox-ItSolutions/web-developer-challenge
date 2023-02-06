import { prisma } from "../../../server/db/client";

// Get all posts
export default async function getPosts(req: any, res: any) {
  try {
    prisma.post
      .findMany({
        orderBy: [
          {
            createdAt: "desc",
          },
        ],
      })
      .then((result) => {
        res.status(200).json(result);
      });
  } catch (error) {
    console.log(error);
    res.status(403).json({ err: "Error occured." });
  }
}
