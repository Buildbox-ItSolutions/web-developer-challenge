export const getContainerStyle = () => ({
  background: "#FFFFF7",
  display: "flex",
  padding: "1% 3% 1% 3%",
  justifyContent: "space-between",
  boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.5)",
});

export const getLogoStyle = () => ({
  height: "100%",
  display: "flex",
  width: "20%",
  alignItems: "center",
  position: "relative",
  paddingLeft: "5%",
  "> div:first-of-type": {
    display: "flex",
    position: "absolute",
    alignItems: "center",
    left: 0,
    "> svg": {
      width: "22%",
    },
  },
  ">p": {
    fontWeight: "600",
    fontFamily: "Kanit",
    background: "linear-gradient(to right, #cccccc, #999999)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "32px",
    backgroundSize: "200% auto",
    animation: "floaterLetters 2s linear infinite",
  },
  "@keyframes floaterLetters": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
  },
});

export const getMenuStyle = () => ({
  display: "flex",
  gap: 4,
  alignItems: "center",
});
