import { useContext } from "react";
import { ContextManager } from "../../contex";
import { DisplayBoxOutput } from "../DisplayBoxOutput";

export function Feed() {
  const { comments } = useContext(ContextManager);
  return (
    <div className="containerFeed">
      {comments?.length > 0 && <h5>Feed</h5>}
      {comments.map((coment: any) => (
        <DisplayBoxOutput data={coment} key={coment.id} />
      ))}
    </div>
  );
}
