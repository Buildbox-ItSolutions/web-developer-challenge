import { Post } from "@/types/post";
import { faker } from "@faker-js/faker";

function createRandomPost(): Post {
  return {
    id: faker.string.uuid(),
    name: faker.internet.userName(),
    description: faker.lorem.paragraph(),
    image: faker.image.avatarLegacy(),
  };
}

export const posts: Post[] = faker.helpers.multiple(createRandomPost, {
  count: 4,
});
