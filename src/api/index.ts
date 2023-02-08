import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { toast } from "react-toastify";
import { PostModel } from "../Interfaces/PostInterfaces";
import { storage } from "./firebase";


export async function savePostImageToFirebase(post: PostModel, image?: File) {

  if (!!image) {
    await uploadBytes(ref(storage, `postImages/${post.id}`), image)
      .then(async (data) => {
        post.imageUrl = await getDownloadURL(ref(storage, data.metadata.fullPath))
      }).catch(() => {
        toast('Falha ao fazer upload de imagem', { type: 'error', position: 'top-center' })
      })
  }

  return post;

}


export async function removePostImageFromFirebase(post: PostModel) {
  let result = false;
  await deleteObject(ref(storage, `postImages/${post.id}`))
    .catch(() => {
      toast('Não voi possível deletar imagem!', {type: 'error', position: 'top-center'});
      result = true;
    })

  return result;
}