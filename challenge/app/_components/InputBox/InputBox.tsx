"use client";
import { CiImageOn } from "react-icons/ci";
import { BiTrashAlt } from "react-icons/bi";
import { ChangeEvent, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTemporaryStorageContext } from "@/app/_context/TemporaryStorageContext";

import crypto from "crypto";
import { InputBoxStyled } from "./InputBoxStyled";
import Image from "next/image";

type Form = {
	nome: string;
	mensagem: string;
};

export default function InputBox() {
	const { PublishPost } = useTemporaryStorageContext();
	const [image, setImage] = useState<File | null>(null);
	const {
		register,
		handleSubmit,
		reset,
		formState: { isValid, isSubmitSuccessful },
	} = useForm<Form>({
		defaultValues: {
			mensagem: "",
			nome: "",
		},
	});
	const [imagePreviewUrl, setImagePreviewUrl] = useState("");

	const onSubmit: SubmitHandler<Form> = (data) => {
		const id = crypto.randomBytes(20).toString("hex");
		if (image != null) {
			const dat = {
				id,
				...data,
				image: image,
			};
			PublishPost(dat);
		} else {
			alert("Imagem invalida.");
		}
	};

	function clearImage() {
		setImage(null);
		setImagePreviewUrl("");
	}

	const handleImageChange = (event: ChangeEvent<HTMLInputElement>): void => {
		if (event.target.files) {
			const file = event.target.files[0];
			if (file && file.type.startsWith("image/")) {
				const reader = new FileReader();
				reader.onloadend = () => {
					if (reader.result && typeof reader.result == "string") {
						setImagePreviewUrl(reader.result);
						console.log(reader.result);
					}
				};
				reader.readAsDataURL(file);
				setImage(file);
			} else {
				alert("Imagem invalida.");
			}
		}
	};

	useEffect(() => {
		clearImage();
		reset();
	}, [isSubmitSuccessful]);

	return (
		<InputBoxStyled>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="image-container">
					<div className="image">
						{imagePreviewUrl ? <Image fill={true} src={imagePreviewUrl} className="selected-image" alt="selected image" /> : null}
						<label htmlFor="image-input" className="image-label">
							{imagePreviewUrl == "" ? <CiImageOn size={20} /> : null}
						</label>
						<input type="file" onChange={handleImageChange} name="myImage" id="image-input" className="file-input" accept="image/*" />
						{!imagePreviewUrl ? null : (
							<button onClick={clearImage} type="button">
								<BiTrashAlt fill="#ff2525" size={20} />
							</button>
						)}
					</div>
				</div>
				<div className="input-container">
					<div>
						<input {...register("nome", { required: true })} type="text" className="input w-full" placeholder="Digite seu nome" />
					</div>
					<div>
						<textarea
							{...register("mensagem", { required: true })}
							placeholder="Mensagem"
							name="mensagem"
							id="mesagem"
							className="input w-full"></textarea>
					</div>
				</div>
				<div className="button-container">
					<button
						type="button"
						className="descartar"
						onClick={() => {
							clearImage();
							reset();
						}}>
						Descartar
					</button>
					<button
						disabled={!isValid && imagePreviewUrl == ""}
						className={`${isValid && imagePreviewUrl != "" ? "publicar" : "publicar-disabled"}`}
						type="submit">
						Publicar
					</button>
				</div>
			</form>
		</InputBoxStyled>
	);
}
