import styled from "styled-components";

export const Card = styled("div")(() => ({
  position: "relative",
  padding: "1.5rem",
  marginBottom: "1rem",
  border: "1px solid #3b3b3b",
  borderRadius: "4px",
  backgroundColor: "#313131",
}));

export const CardContent = styled("div")(() => ({
  marginTop: "1.8rem",
  display: "flex",
  gap: "1.5rem",
}));

export const Text = styled("p")(() => ({
  color: "#7a7a7a",
}));

export const TextLabel = styled.p`
  color: #595959;

  // extra-small
  @media (min-width: 0) {
    fontsize: 8pt;
  }

  // small
  @media (min-width: 600px) {
    fontsize: 10pt;
  }
`;

export const ImageContainer = styled.div`
  border-radius: 40%;

  // extra-small
  @media (min-width: 0) {
    width: 50px;
    height: 50px;
  }

  // small
  @media (min-width: 600px) {
    width: 90px;
    height: 90px;
  }
`;

export const Image = styled.img`
  border-radius: 40%;

  // extra-small
  @media (min-width: 0) {
    width: 50px;
    height: 50px;
  }

  // small
  @media (min-width: 600px) {
    width: 90px;
    height: 90px;
  }
`;
