import React from "react";
import Image from "next/image";
import trashIcon from "../../public/assets/images/trash-icon.png";

interface Props {
  photo: File;
  addPhoto?: () => void;
  removePhoto?: () => void;
  trash?: boolean;
}

export default function UserImage({
  photo,
  addPhoto,
  removePhoto,
  trash,
}: Props) {
  return (
    <div className="flex min-w-[90px]">
      <Image
        width={88}
        height={88}
        src={URL.createObjectURL(photo)}
        className="mb-4 flex h-[88px] w-[88px] resize rounded-[35px] border border-primary-50 object-cover"
        alt="Post Photo"
        onClick={addPhoto}
      />
      <Image
        width={25}
        height={25}
        src={trashIcon}
        alt={"Photo Icon"}
        className={`absolute top-8 left-[105px] ${trash ? "block" : "hidden"}`}
        onClick={removePhoto}
      />
    </div>
  );
}
