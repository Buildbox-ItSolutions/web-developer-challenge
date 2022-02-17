import { firestore, storage } from "../libs/firebase";
import { collection, getDocs, addDoc, deleteDoc, doc, query, orderBy } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes, deleteObject } from "firebase/storage";
import { v4 as createId } from "uuid";

import { Post } from "../types/Post";

const postsCollectionRef = collection(firestore, "Posts");

export const getAll = async () => {
    const data = await getDocs(query(postsCollectionRef, orderBy("id", "desc")));
    return data;
}

export const sendPost = async (post: Post) => {
    await addDoc(postsCollectionRef, post);
}

export const deletePost = async (documentId: string) => {
    const postDoc = doc(firestore, "Posts", documentId);
    await deleteDoc(postDoc);
}

export const deleteImage = async (image: string) => {
    if (image !== "") {
        const imageRef = ref(storage, `images/${image}`);
        await deleteObject(imageRef);
    } else return null;
}

export const insertImage = async (image: File) => {
    if (["image/jpeg", "image/jpg", "image/png"].includes(image.type)) {
        let randomName = createId();
        let newFile = ref(storage, `images/${randomName}`);

        let upload = await uploadBytes(newFile, image);
        let photoUrl = await getDownloadURL(upload.ref);
        return { photoUrl: photoUrl, randomName: randomName };
    } else {
        return { photoUrl: "no-image", randomName: "" };
    }
}