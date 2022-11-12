import { MakePostsListItem } from "@/app/main/factories/components";
import { MakePostsList } from "@/app/main/factories/pages";
import { Header } from "@/app/presentation/common/components/Header";
import Layout from "@/app/presentation/common/components/Layout/Layout";
import React from "react";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <>
      <Header />;
      <Layout>
        <>
          <MakePostsList />

          <MakePostsListItem />
        </>
      </Layout>
    </>
  );
};

export default Home;
