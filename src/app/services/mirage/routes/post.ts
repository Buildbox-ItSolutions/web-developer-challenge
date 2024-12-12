import { Response, Request } from "miragejs";
import { handleErrors } from "../server";
import { Post } from "../../../interfaces/post.interface";
import { User } from "../../../interfaces/user.interface";
export const create = (
  schema: any,
  req: Request
): { user: User; post: Post } | Response => {
  try {
    console.log(
      "req.requestBody",
      Object.fromEntries(req.requestBody as unknown as FormData)
    );
    const { name, message, urlx } = Object.fromEntries(
      req.requestBody as unknown as FormData
    ) as Partial<Post>;

    console.log("Uploaded file contents:", { name, message, urlx });

    const exUser = schema.users.findBy({ id: 1 });
    if (!exUser) {
      return handleErrors(null, "No such user exists.");
    }

    const post = exUser.createPost({
      name,
      message,
      urlx,
    });
    return {
      user: {
        ...exUser.attrs,
      },
      post: post.attrs,
    };
  } catch (error) {
    return handleErrors(error, "Failed to create Post.");
  }
};
