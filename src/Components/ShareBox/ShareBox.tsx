import React from "react";
import { Box, TextField, IconButton, Typography } from "@mui/material";
import { FaUser, FaPhotoVideo } from "react-icons/fa";

const ShareBox = () => {
  return (
    <Box
      sx={{
        background: "#FFFFF7",
        padding: "2%",
        borderRadius: "20px",
        boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.5)",
        marginBottom: "5%",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
        <IconButton
          component="label"
          sx={{
            background: "lightBlue",
            padding: "5%",
            "> svg": { height: "64px", width: "64px" },
          }}
        >
          <FaUser />
          <input type="file" hidden />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            "> div > div": { borderRadius: "64px", width: "350px" },
          }}
        >
          <TextField placeholder="Digite seu nome" />
          <TextField placeholder="Começar publicação" />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "1%",
          width: "100%",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton>
            <FaPhotoVideo color="#007aff" />
          </IconButton>
          <Typography
            sx={{
              fontWeight: "600",
              fontFamily: "Kanit",
              color: "#747474",
            }}
          >
            Midia
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton>
            <FaPhotoVideo color="#007aff" />
          </IconButton>
          <Typography
            sx={{
              fontWeight: "600",
              fontFamily: "Kanit",
              color: "#747474",
            }}
          >
            Links
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ShareBox;
