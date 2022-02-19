import { useNavigate } from "react-router-dom";
import { UseAuth } from "../hooks/UseAuth";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import { IllustrationIMG, PageAuth, TextStrong, TextP, MainContent, LogoIMG, 
  LoginWithGoogleButton, GoogleIconIMG } from "../styles/home";

export function Home() {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = UseAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    navigate("./build-box/posts");
  }

  return (
    <PageAuth>
      <aside>
        <IllustrationIMG
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <TextStrong>Crie e Veja Posts a Qualquer Momento!</TextStrong>
        <TextP>
          Observe o que está rolando de mais interessante nesta rede.
        </TextP>
      </aside>
      <main>
        <MainContent>
          <LogoIMG src={logoImg} alt="Logotipo" className="main-content-logo" />
          <LoginWithGoogleButton onClick={handleCreateRoom} className="create-room">
            <GoogleIconIMG src={googleIconImg} alt="Logo do Google" />
            Entre com a sua conta Google
          </LoginWithGoogleButton>
        </MainContent>
      </main>
    </PageAuth>
  );
}
