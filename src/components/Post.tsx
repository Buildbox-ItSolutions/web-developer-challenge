import React from "react";
import type { PostType } from "../types/post";
import UserImage from "./UserImage";
import Image from "next/image";
import deleteIcon from "../../public/assets/images/delete-icon.png";

interface Props {
  key: number;
  value: PostType;
  removePost?: () => void;
}

export default function Post({ key, value, removePost }: Props) {
  return (
    <div
      className="container relative flex max-w-lg items-start gap-8 rounded-sm border border-primary-70 bg-primary-80 p-6"
      key={key}
    >
      <UserImage photo={value.photo ?? new File([], "file.png")} />
      <div className="flex flex-col gap-8">
        <p className="break-normal text-base leading-5 text-primary-30">
          {value.message}
        </p>
        <div>
          <p className="text-xs leading-3 text-primary-50">Enviado por</p>
          <p className="text-sm leading-5 text-primary-40">{value.name}</p>
        </div>
      </div>
      <Image
        className="absolute right-3 top-3 cursor-pointer"
        onClick={removePost}
        width={20}
        height={20}
        src={deleteIcon}
        alt="Delete"
      />
    </div>
  );
}
