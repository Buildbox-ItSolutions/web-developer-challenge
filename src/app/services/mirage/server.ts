import { Model, Response, belongsTo, hasMany } from "miragejs";
import user from "./routes/user";
import * as post from "./routes/post";
import { createServer } from "miragejs";

export const handleErrors = (error: any, message = "An error ocurred") => {
  return new Response(400, undefined, {
    data: {
      message,
      isError: true,
    },
  });
};

createServer({
  models: {
    post: Model.extend({
      user: belongsTo(),
    }),
    user: Model.extend({
      post: hasMany(),
    }),
  },

  routes(): void {
    this.namespace = "api.buildbox.itsolutions.test";

    this.get("/posts");

    this.post("/auth/login", user.login);
    this.post("/auth/signup", user.signup);

    this.post("/posts/create", post.create);
    this.del("/posts/:id");
  },
});
