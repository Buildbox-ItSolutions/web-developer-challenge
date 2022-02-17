import * as P from "./style";

import { Post } from "../../types/Post";

type Props = {
    Data: Post,
    HandleDelete: (documentId: string, imageName: string) => void
};

export default function FeedPost({ Data, HandleDelete }: Props) {
    let documentId: any = Data.documentId;
    return (
        <P.PostArea>
            <P.PostContent>
                <P.PostUserImage src={Data.image !== "no-image" ? Data.image : "/photo-base.png"} />
                <div>
                    <P.PostMessage>
                        {Data.comment}
                    </P.PostMessage>
                    <P.PostMeta>
                        Enviado por
                        <br />
                        <span>
                            {Data.name}
                        </span>
                    </P.PostMeta>
                </div>
            </P.PostContent>
            <P.DeletePost src="/delete.svg" onClick={() => HandleDelete(documentId, Data.imageName)} />
        </P.PostArea>
    );
};

