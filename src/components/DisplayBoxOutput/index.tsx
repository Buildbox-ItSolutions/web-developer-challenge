import { ReactNode } from "react";
import { DisplayBoxContainer, Imagem, TextSmall } from "../../styles/style";

export function DisplayBoxOutput() {
  return (
    <DisplayBoxContainer>
      <div className="flexComent">
        <div className="ContainerImg">
          <Imagem src="https://sme.goiania.go.gov.br/conexaoescola/wp-content/uploads/2020/09/Rio-araguaia-e1600879107526.jpg" />
        </div>
        <div className="boxComent">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            mattis ligula vel velit scelerisque iaculis. Nam mattis justo id
            orci commodo, eu tempus purus cursus.
          </p>
          <div className="sentTo">
            <TextSmall small>Enviado por</TextSmall>
            <h3>Manuela Oliveira</h3>
          </div>
        </div>
      </div>
    </DisplayBoxContainer>
  );
}
