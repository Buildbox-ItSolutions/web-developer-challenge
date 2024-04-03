import Box from "../Box/Box.component";
import Card from "./feed-components/Card/Card.component";
import * as S from "./Feed.styled";
import { DataProps } from "../Content/Content";

const Feed = ({
  data,
  setData,
}: {
  data: DataProps[];
  setData: React.Dispatch<React.SetStateAction<DataProps[]>>;
}) => {
  const filterLocal = (id: string) => {
    const card = localStorage.getItem("card");

    if (card) {
      const cardArr: DataProps[] = JSON.parse(card);
      const filterCard = cardArr.filter((c) => c.id !== id);
      localStorage.setItem("card", JSON.stringify(filterCard));

      setData(filterCard);
    }
  };
  const handleClick: React.MouseEventHandler<HTMLDivElement> | undefined = ({
    currentTarget,
  }) => {
    const li = currentTarget.closest("li");
    if (li) {
      li.style.animation = `end .4s forwards`;

      setTimeout(() => filterLocal(currentTarget.id), 400);
    }
  };

  return (
    <S.FeedStyle>
      <S.Title>Feed</S.Title>

      {data.length > 0 && (
        <S.CardBox>
          {data
            .map((d) => (
              <S.Show key={d.id}>
                <Box>
                  <Card onDelete={handleClick} props={d} />
                </Box>
              </S.Show>
            ))
            .reverse()}
        </S.CardBox>
      )}
    </S.FeedStyle>
  );
};

export default Feed;
