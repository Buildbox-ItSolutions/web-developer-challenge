import React from "react";

// Components
import { Header } from "@/components/Header";
import { Form } from "@/components/Form";
import { List } from "@/components/List";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Form />
      <List />
    </React.Fragment>
  );
}
