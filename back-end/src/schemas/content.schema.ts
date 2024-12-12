import { object, string, TypeOf } from "zod";

const payload = {
  body: object({
    author: string({
      required_error: "author username is required",
    }),
    message: string({
      required_error: "message is required",
    }),
    imageName: string({
      required_error: "image is required",
    }),
  }),
};

export const createContentSchema = object({
  ...payload,
});

export const listContentSchema = object({});

export type CreateContentInput = TypeOf<typeof createContentSchema>;
export type ListContentInput = TypeOf<typeof listContentSchema>;
