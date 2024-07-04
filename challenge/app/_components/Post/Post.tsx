"use client";
import { IPost } from "./IPost";
import { PostStyled } from "./PostStyled";
import { FiDelete } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useTemporaryStorageContext } from "@/app/_context/TemporaryStorageContext";
import Image from "next/image";

export default function Post({ post }: { post: IPost }) {
	const { DeletePost } = useTemporaryStorageContext();
	const [imagePreviewUrl, setImagePreviewUrl] = useState("");
	useEffect(() => {
		if (post.image && post.image.type.startsWith("image/")) {
			const reader = new FileReader();
			reader.onloadend = () => {
				if (reader.result && typeof reader.result == "string") {
					setImagePreviewUrl(reader.result);
				}
			};
			reader.readAsDataURL(post.image);
		}
	}, [post.image]);

	return (
		<PostStyled>
			<div className="absolute top-[5px] right-[10px]">
				<button type="button" onClick={() => DeletePost(post.id)}>
					<FiDelete />
				</button>
			</div>
			<div className="image">
				<Image fill={true} src={imagePreviewUrl} alt="image" />
			</div>
			<div className="message">
				<div>
					<p className="text-[0.8rem]">{post.mensagem}</p>
				</div>
				<div>
					<span className="block text-[0.8rem]">Enviado por</span>
					<span className="block text-[0.8rem]">{post.nome}</span>
				</div>
			</div>
		</PostStyled>
	);
}
