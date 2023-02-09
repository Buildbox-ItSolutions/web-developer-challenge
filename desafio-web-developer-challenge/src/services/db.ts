import {v4 as uuidv4} from "uuid";
import { IPosts } from "../interface/IPosts";
import avatar from '../assets/photo-base.png'

export const dbPosts: IPosts[] = [
  {
    id: uuidv4(),
    avatar: avatar,
    name: 'Lucas Gabriel',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fuga et, velit quod ad itaque necessitatibus hic,temporibus omnis pariatur quia vel, ex provident voluptas animi tenetur nisi cum nobis!'
  },

  {
    id: uuidv4(),
    avatar: avatar,
    name: 'João Guilherme',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fuga et, velit quod ad itaque necessitatibus hic,temporibus omnis pariatur quia vel, ex provident voluptas animi tenetur nisi cum nobis!'
  }
]