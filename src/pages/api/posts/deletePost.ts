import { prisma } from "../../../server/db/client";

// Delete a post by the id
export default async function deletePost(req: any, res: any) {
  try {
    const result = await prisma.post.delete({
      where: {
        id: req.body.id,
      },
    });
    res.status(200).json(result);
  } catch {
    res.status(403).json({ err: "Error occured." });
  }
}
