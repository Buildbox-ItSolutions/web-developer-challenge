import avatar1x from "../../assets/photo-base.png";
import delete1x from "../../assets/delete.png";
import delete2x from "../../assets/delete@2x.png";
import delete3x from "../../assets/delete@3x.png";
import { ElementPosted } from "./modules/ElementPosted";
import { PostedBox } from "./partials/HomePartials";
import { publishElementType } from "../../../@types/home/data/homeDataTypes";

//Elemento de saída de dados. Organizado de forma a se obter o box com conteúdo postado.
//Data output element. Organized in order to obtain the box with posted content.

export const PublishedPost = (publishitem: publishElementType) => {
  const deleteSrcSet: string = `${delete1x} 1x, ${delete2x} 2x, ${delete3x} 3x`;
  return (
    <PostedBox>
      {publishitem.posts.map((item, index) =>
        item.image !== avatar1x ? (
          <ElementPosted
            key={index}
            message={item.message}
            assigned={item.assigned}
            srcImage={item.image}
            choose={false}
            srcDelete={delete1x}
            srcSetDelete={deleteSrcSet}
            delPost={() => publishitem.deletePost(item.id)}
          />
        ) : (
          <ElementPosted
            key={index}
            message={item.message}
            assigned={item.assigned}
            srcImage={item.image}
            choose={true}
            srcSetImage={avatar1x}
            srcDelete={delete1x}
            srcSetDelete={deleteSrcSet}
            delPost={() => publishitem.deletePost(item.id)}
          />
        )
      )}
    </PostedBox>
  );
};
