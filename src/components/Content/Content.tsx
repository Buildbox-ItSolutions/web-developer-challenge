import { useEffect, useState } from "react";
import Box from "../Box/Box.component";
import Form from "../Form/Form.component";
import Feed from "../Feed/Feed.component";

export declare type DataProps = {
  picture: string | null;
  name: string;
  description: string;
  id: string;
};

const Content = () => {
  const [data, setData] = useState<DataProps[]>([]);

  useEffect(() => {
    const card = localStorage.getItem("card");
    if (card) {
      const getData = [...JSON.parse(card)];

      setData((prevData) => [...prevData, ...getData]);
    }
  }, []);

  return (
    <>
      <Box>
        <Form setData={setData} />
      </Box>
      <Feed setData={setData} data={data} />
    </>
  );
};

export default Content;
