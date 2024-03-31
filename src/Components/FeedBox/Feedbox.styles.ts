export const getContainerStyle = () => ({
  background: "#FFFFF7",
  padding: "3%",
  borderRadius: "20px",
  boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.5)",
  position: "relative",
  "> div:first-of-type": {
    display: "flex",
    alignItems: "center",
    gap: 3,
  },
  "> div:nth-of-type(2n)": {
    marginTop: "3%",
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  "> div:nth-of-type(4n)": {
    padding: "3% 0% 1% 0%",
    display: "flex",
    justifyContent: "center",
    background: "coral",
  },
});
