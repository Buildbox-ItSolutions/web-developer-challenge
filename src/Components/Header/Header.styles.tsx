export const getContainerStyle = () => ({
  background: "#FFFFF7",
  display: "flex",
  padding: "1% 3% 1% 3%",
  justifyContent: "space-between",
  boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.5)",
});

export const getLogoStyle = () => ({
  display: "flex",
  gap: 4,
  alignItems: "center",
  height: "100%",
  "> svg": {
    width: "15%",
  },
});

export const getMenuStyle = () => ({
  display: "flex",
  gap: 4,
  alignItems: "center",
});
