"use client";

import { useAppDispatch, useAppSelector } from "@lib/hooks";
import { Post, init, post, remove } from "@lib/features/posts/postsSlice";
import Text from "@components/Text";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useTheme } from "styled-components";
import Avatar from "@components/Avatar";
import Input from "@components/Input";
import Textarea from "@components/Textarea";
import Button from "@components/Button";
import Card from "@components/Card";
import List from "@components/List";
import { Body, Feed, Form, FormGroup, Header, Main } from "./styles";

export default function Home() {
  const [posting, setPosting] = useState<boolean>(false);
  const [indexToRemove, setIndexToRemove] = useState<number>(-1);
  const [data, setData] = useState<Post>({ name: "", photo: "", message: "" });

  const theme = useTheme();

  const posts = useAppSelector((state) => state.posts.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  const disableSubmit = useMemo(() => {
    return (
      posting ||
      !!Object.keys(data).filter((key) => !data[key as keyof Post]).length
    );
  }, [data, posting]);

  const disabledDiscard = useMemo(() => {
    return (
      posting ||
      !Object.keys(data).filter((key) => !!data[key as keyof Post]).length
    );
  }, [data, posting]);

  function onChange(key: keyof Post, value: string) {
    setData((prevData) => ({ ...prevData, [key]: value }));
  }

  function onDiscard() {
    setPosting(false);
    setData((prevData) =>
      Object.keys(prevData)
        .map((key) => ({ [key]: "" }))
        .reduce((a, b) => Object.assign(a, b), {} as Post)
    );
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!disableSubmit) {
      setPosting(true);
      dispatch(post(data));

      setTimeout(() => onDiscard(), 1000);
    }
  }

  function onRemove(index: number) {
    setIndexToRemove(index);
    setTimeout(() => {
      dispatch(remove({ index }));
      setIndexToRemove(-1);
    }, 1000);
  }

  return (
    <Main>
      <Header>
        <Image priority alt="logo" width={103} height={45} src="/bx-logo.png" />
      </Header>
      <Body>
        <Form onSubmit={onSubmit}>
          <div>
            <Avatar
              size={88}
              radius={36}
              allowSelection
              src={data.photo}
              onSelectFile={(value) => onChange("photo", value)}
            />
            <FormGroup>
              <Input
                value={data.name}
                disabled={posting}
                placeholder="Digite seu nome"
                onChange={(value) => onChange("name", value)}
              />
              <Textarea
                rows={4}
                disabled={posting}
                value={data.message}
                placeholder="Mensagem"
                onChange={(value) => onChange("message", value)}
              />
            </FormGroup>
          </div>
          <div>
            <Button
              variant="ghost"
              onClick={onDiscard}
              disabled={disabledDiscard}
            >
              Descartar
            </Button>
            <Button type="submit" disabled={disableSubmit}>
              Publicar
            </Button>
          </div>
        </Form>
        <Feed>
          <Text size="sm" weight="medium" color="warm_grey">
            Feed
          </Text>
          <List empty={!posts.length} label=" O seu feed está vazio :(">
            {posting && <Card {...data} posting />}
            {posts
              .filter((_, index) => !posting || !!index)
              .map((item, index) => (
                <Card
                  key={index}
                  {...item}
                  removing={index === indexToRemove}
                  onRemove={() => onRemove(index)}
                />
              ))}
          </List>
        </Feed>
      </Body>
    </Main>
  );
}
