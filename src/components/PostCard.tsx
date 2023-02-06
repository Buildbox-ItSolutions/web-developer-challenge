import React, { useEffect, useState } from "react";
import UserImage from "./UserImage";
import Image from "next/image";
import deleteIcon from "../../public/assets/images/delete-icon.png";
import type { Post } from "@prisma/client";
import { usePosts } from "../contexts/posts";

interface Props {
  value: Post;
  setLoading: (value: boolean) => void;
}

export default function PostCard({ value, setLoading }: Props) {
  const [photo, setPhoto] = useState<File | void>(undefined);

  const { removePost } = usePosts();

  useEffect(() => {
    setLoading(true);
    async function setFromBase64(photo: string) {
      fetch(photo)
        .then((res) => res.blob())
        .then((blob) => {
          setPhoto(new File([blob], "File name", { type: "image/png" }));
        });
    }

    setFromBase64(value.photo).catch((error) => console.log(error));
    setLoading(false);
  }, [value.photo, setLoading]);

  return (
    <div className="container relative flex max-w-lg items-start gap-8 rounded-sm border border-primary-70 bg-primary-80 p-6">
      <UserImage photo={photo ?? new File([], "file.png")} />
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
        onClick={() => removePost(value.id)}
        width={20}
        height={20}
        src={deleteIcon}
        alt="Delete"
      />
    </div>
  );
}
