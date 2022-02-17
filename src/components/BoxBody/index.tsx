import { BaseSyntheticEvent, FormEvent, useEffect, useState } from "react";
import Container from "./style";
import { useRouter } from "next/router";
import * as Firebase from "../../services/api";

import CreatePost from "../CreatePost";
import Feed from "../Feed";

import { Post } from "../../types/Post";

export default function BoxBody() {
    const router = useRouter();

    const [posts, setPosts] = useState<Post[]>([]);
    const [name, setName] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [uploading, setUploading] = useState<boolean>(false);
    const [warning, setWarning] = useState<boolean>(false);
    const [buttonColor, setButtonColor] = useState<boolean>(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setWarning(false);
        setUploading(true);

        let newPost: Post = {
            imageName: "",
            image: "",
            name: name || "Anônimo",
            comment: message,
            id: posts.length + 1
        }

        if (message) {
            const getImage = new FormData(event.currentTarget);
            const image = getImage.get("image") as File;

            if (image && image.size < 1000000) {
                let upload = await Firebase.insertImage(image);
                newPost.image = upload.photoUrl;
                newPost.imageName = upload.randomName;
            } else {
                alert("O tamanho da imagem é muito grande para prosseguir! Limite de 1Mb.");
                setUploading(false);
                return null;
            };

            await Firebase.sendPost(newPost);
            router.reload();
        } else {
            setUploading(false);
            setWarning(true);
            return null;
        };
    };

    function handleDelete(documentId: string, imageName: string): void {
        Firebase.deletePost(documentId);
        Firebase.deleteImage(imageName);
        let updatedPostList = posts.filter((post) => post.documentId !== documentId);
        setPosts(updatedPostList);
    };

    useEffect(() => {
        if (message) setButtonColor(true);
        else setButtonColor(false);
    }, [message]);

    useEffect(() => {
        const getPosts = async () => {
            let data = await Firebase.getAll();
            setPosts(data.docs.map((doc: any) => ({ ...doc.data(), documentId: doc.id })));
        }
        getPosts();
    }, []);

    return (
        <>
            <Container>
                <CreatePost
                    HandleName={(event: BaseSyntheticEvent) => {
                        if (event.target.value.length < 36) setName(event.target.value);
                    }}
                    HandleMessage={(event: BaseSyntheticEvent) => {
                        if (event.target.value.length < 171) setMessage(event.target.value);
                    }}
                    HandleDiscart={() => {
                        setMessage("");
                        setName("");
                    }}
                    HandleSubmit={handleSubmit}
                    Upload={uploading}
                    Name={name}
                    Message={message}
                    Warning={warning}
                    ButtonColor={buttonColor}
                />
                <Feed Posts={posts} HandleDelete={handleDelete} />
            </Container>
        </>
    );
};