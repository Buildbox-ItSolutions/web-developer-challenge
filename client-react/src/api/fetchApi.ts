import { PostInterface } from "./postInterface";

export const getPosts = async () => {
  const response = await fetch("http://localhost:3000/v1/api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  //   console.log(await response.json());

  return await response.json();
};

export const createPost = async (post: PostInterface) => {
  const response = await fetch("http://localhost:3000/v1/api/posts/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  return response;
};

export const remotePost = async (id: number) => {
  const response = await fetch(`http://localhost:3000/v1/api/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
};

export const listItems = [
  {
    id: 1,
    nome: "Wictor",
    mensagem: "Teste",
    imagem:
      "https://www.riobeauty.co.uk/is/image/RGCBlogProd/wp-content/uploads/2020/05/3-ways-to-keep-your-hair-healthy.jpg",
  },
  {
    id: 2,
    nome: "Wictor",
    mensagem: "Teste",
    imagem:
      "https://www.riobeauty.co.uk/is/image/RGCBlogProd/wp-content/uploads/2020/05/3-ways-to-keep-your-hair-healthy.jpg",
  },
  {
    id: 3,
    nome: "Wictor",
    mensagem: "Teste",
    imagem:
      "https://www.riobeauty.co.uk/is/image/RGCBlogProd/wp-content/uploads/2020/05/3-ways-to-keep-your-hair-healthy.jpg",
  },
];
