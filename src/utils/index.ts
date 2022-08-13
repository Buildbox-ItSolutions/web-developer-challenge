import { usersTb } from "../db";
import { Post } from "../types";
const lerolero = require('lerolero');

function jsonPost(id:string):Post{
  return { "userId":id, "sent": usersTb[parseInt(id)], "text": lerolero() }
}

function randomUser(){
  return String(Math.floor(Math.random() * 10));
}

const initList:Array<Post> = [
  jsonPost(randomUser()),
  jsonPost(randomUser()),
  jsonPost(randomUser()),
  jsonPost(randomUser()),
];

export { randomUser, jsonPost, initList }