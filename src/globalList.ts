import { Publication } from "./global.ts";

const feed: Publication[] = [];

const inserir = (value: Publication) => {
    feed.unshift(new Publication(value.Foto, value.Nome, value.Mensagem));
}

const getFeed = () => {
    return feed;
}

const dell = (index: number) => {
    feed.splice(index, 1);
    return feed;
}

export { inserir, getFeed, dell }