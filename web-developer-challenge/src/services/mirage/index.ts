import { createServer, Factory, Model, ActiveModelSerializer } from "miragejs";
import { faker } from "@faker-js/faker";

type Feed = {
  id: string;
  name: string;
  comment: string;
  image: File;
};

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      feed: Model.extend<Partial<Feed>>({}),
    },

    factories: {
      feed: Factory.extend({
        id(i: number) {
          return `Feed ${i + 1}`;
        },
        name() {
          return faker.name.fullName();
        },
        comment() {
          return faker.lorem.sentence();
        },
        image() {
          return faker.image.image();
        },
      }),
    },

    seeds(server) {
      server.createList("feed", 2);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;
      this.get("/feeds");
      this.post("/feeds");
      this.delete("/feeds/:id");
      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
