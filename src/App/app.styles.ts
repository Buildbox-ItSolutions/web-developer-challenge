import styled from "styled-components";

export const Navbar = styled("div")(() => ({
  backgroundColor: "#2b2b2b",
  padding: "1.5rem 0",
  borderBottom: "1px solid #232323",
  position: "fixed",
  width: "100%",
  zIndex: 1,
  top: 0,
}));

export const Title = styled("h2")(() => ({
  color: "#71bb00",
  textAlign: "center",
  fontWeight: "bolder",
}));

export const Subtitle = styled("h6")(() => ({
  color: "#5f5f5f",
  textAlign: "center",
  fontWeight: "light",
  textTransform: "uppercase",
}));

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  // extra-small
  @media (min-width: 0) {
    max-width: 280px;
  }

  // small
  @media (min-width: 600px) {
    max-width: 520px;
  }
`;
