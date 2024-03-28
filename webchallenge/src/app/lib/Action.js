"use server";

import { redirect } from "next/navigation";
import { connectToDb } from "./Connect";
import { WebChallenge } from "./Models";

///////////Validar,Criar e enviar Post//////////////////////
const ValidarPost = (formData) => {
  const { desc, slug, autor, src } = Object.fromEntries(formData);
  return { desc, slug, autor, src };
};

const CriarNovoPost = async (PostInfo) => {
  const newPost = new WebChallenge({
    desc: PostInfo.desc,
    slug: PostInfo.slug,
    autor: PostInfo.autor,
    src: PostInfo.src,
  });
  await newPost.save();
};

export const EnviarPost = async (formData) => {
  const post = ValidarPost(formData);
  connectToDb();
  CriarNovoPost(post);
  redirect("/");
};

/////////////DeletarPost////////////////

const PostParaDeletar = (formData) => {
  const { slug } = Object.fromEntries(formData);
  return { slug };
};

export const DeletarPost = async (formData) => {
  const slug = PostParaDeletar(formData);
  await WebChallenge.findOneAndDelete({ slug: slug.slug });
  redirect("/");
};
