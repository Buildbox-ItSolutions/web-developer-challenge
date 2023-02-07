import { useState } from "react";
import { Container } from "../components/generic/container";
import {
  HomeBody,
  HomeLayout,
  HomeTopBar,
  InputLayout,
  ImageContainer,
  Avatar,
  InputName,
  InputPost,
  BottomBar,
  ClearOption,
  InputPostButton,
  FeedTitle,
} from "../components/home/HomeLayout";
import logo1x from "../assets/bx-logo.png";
import logo2x from "../assets/bx-logo@2x.png";
import logo3x from "../assets/bx-logo@3x.png";
import avatar1x from "../assets/photo-base.png";
import avatar2x from "../assets/photo-base@2x.png";
import avatar3x from "../assets/photo-base@3x.png";
import trash1x from "../assets/trash.png";
import trash2x from "../assets/trash@2x.png";
import trash3x from "../assets/trash@3x.png";
import { ColorTheme } from "../styles/themes";

export const HomePage = () => {
  const logoSrcSet: string = `${logo1x} 1x, ${logo2x} 2x, ${logo3x} 3x`;
  const avatarSrcSet: string = `${avatar1x} 1x, ${avatar2x} 2x, ${avatar3x} 3x`;
  const trashSrcSet: string = `${trash1x} 1x, ${trash2x} 2x, ${trash3x} 3x`;

  const [avatar, setAvatar] = useState<string>(avatar1x);
  const [messageName, setNameMessage] = useState<string>("");
  const [messagePost, setPostMessage] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setAvatar(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleTrash = () => {
    setAvatar(avatar1x);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameMessage(event.target.value);
  };

  const handlePostChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostMessage(event.target.value);
  };

  const handleDiscart = () => {
    setNameMessage("");
    setPostMessage("");
  };

  return (
    <HomeLayout>
      <HomeTopBar>
        <Container width="103px" height="45px" vAlign="center" hAlign="center">
          <ImageContainer
            width="103px"
            height="45px"
            src={logo1x}
            srcSet={logoSrcSet}
          />
        </Container>
      </HomeTopBar>
      <HomeBody>
        <Container
          width="516px"
          height="353px"
          margin="40px 0 0 0"
          hAlign="center"
          padding="0"
          background={ColorTheme.HomeInputBox}
          border={ColorTheme.HomeInputBorder}
        >
          <InputLayout>
            {avatar !== avatar1x ? (
              <>
                <Avatar src={avatar} handle={handleChange} choose={true} />
                <Container
                  width="24px"
                  height="24px"
                  position="absolute"
                  left="318px"
                  top="56px"
                >
                  <ImageContainer
                    width="100%"
                    height="100%"
                    src={trash1x}
                    srcSet={trashSrcSet}
                    choosed={false}
                    onClick={handleTrash}
                  />
                </Container>
              </>
            ) : (
              <Avatar
                src={avatar1x}
                srcSet={avatarSrcSet}
                handle={handleChange}
                choose={false}
              />
            )}
            <Container
              width="100%"
              height="100%"
              hAlign="center"
              vAlign="center"
            >
              <InputName
                width="468px"
                height="40px"
                radius="8px"
                value={messageName}
                onChange={handleNameChange}
              />
            </Container>
            <Container
              width="100%"
              height="100%"
              hAlign="center"
              vAlign="center"
            >
              <InputPost
                width="468px"
                height="80px"
                radius="8px"
                value={messagePost}
                onChange={handlePostChange}
              />
            </Container>
            <Container
              width="100%"
              margin="32px 0 24px 0"
              height="max-content"
              hAlign="center"
              vAlign="center"
            >
              <BottomBar>
                <Container
                  width="100%"
                  height="100%"
                  vAlign="center"
                  hAlign="end"
                >
                  <ClearOption onClick={handleDiscart}>Descartar</ClearOption>
                </Container>
                <Container
                  width="100%"
                  height="100%"
                  vAlign="center"
                  hAlign="end"
                >
                  <InputPostButton>Publicar</InputPostButton>
                </Container>
              </BottomBar>
            </Container>
          </InputLayout>
        </Container>
        <Container width="30px" height="100%" vAlign="flex-end" padding="0 0 8px 0" hAlign="center" >
         <FeedTitle>Feed</FeedTitle>
        </Container>
        <Container width="100%" height="100%" border="red">

        </Container>
      </HomeBody>
    </HomeLayout>
  );
};
