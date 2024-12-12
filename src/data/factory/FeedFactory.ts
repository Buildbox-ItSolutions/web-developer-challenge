import Feed from "../../model/Feed";
import FeedItem from "../../model/FeedItem";
import { faker } from '@faker-js/faker';

const createFeedItem = () : FeedItem => ({
    name: faker.name.fullName(),
    comment: faker.lorem.paragraph(),
    image: faker.image.cats(88, 88, true)
});

export default function FeedFactory() : Feed {
    return {
        items: [
            createFeedItem(),
            createFeedItem(),
            createFeedItem(),
        ]
    }
}