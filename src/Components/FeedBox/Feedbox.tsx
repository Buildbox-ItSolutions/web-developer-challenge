import React from "react";
import { Box, IconButton, Typography, Divider } from "@mui/material";
import {
  FaUser,
  FaRegComment,
  FaRegShareSquare,
  FaRegBookmark,
} from "react-icons/fa";
import { RiMoreLine } from "react-icons/ri";
import { GrLike } from "react-icons/gr";

const Feedbox = () => {
  return (
    <Box>
      <Box
        sx={{
          background: "#FFFFF7",
          padding: "3%",
          borderRadius: "20px",
          boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.5)",
          position: "relative",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <IconButton
            sx={{
              background: "lightBlue",
              padding: "3%",
              alignSelf: "start",
              "> svg": { height: "32px", width: "32px" },
            }}
          >
            <FaUser />
          </IconButton>
          <Typography
            sx={{
              fontWeight: "600",
              fontFamily: "Kanit",
              color: "#747474",
            }}
          >
            Felipe Alves de Oliveira
          </Typography>
          <IconButton sx={{ position: "absolute", top: 10, right: 10 }}>
            <RiMoreLine />
          </IconButton>
        </Box>
        <Box
          sx={{
            marginTop: "3%",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Typography
            sx={{
              fontWeight: "600",
              fontFamily: "Kanit",
              color: "#747474",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Box
            component="img"
            sx={{
              width: "100%",
            }}
            alt="The house from the offer."
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
          />
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: "400",
              fontFamily: "Kanit",
              color: "#747474",
              fontSize: "14px",
              textAlign: "right",
              margin: "1% 0% 1% 0%",
            }}
          >
            Tantos tantos comentarios, tantos tantos linkes e tantos tantos
            compartilhamentos
          </Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            padding: "3% 0% 1% 0%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconButton
            sx={{
              display: "flex",
              gap: 1,
              "> p": {
                fontWeight: "600",
                fontFamily: "Kanit",
                color: "#747474",
              },
            }}
          >
            <GrLike />
            <Typography>Gostei</Typography>
          </IconButton>
          <IconButton
            sx={{
              display: "flex",
              gap: 1,
              "> p": {
                fontWeight: "600",
                fontFamily: "Kanit",
                color: "#747474",
              },
            }}
          >
            <FaRegComment />
            <Typography>Comentar</Typography>
          </IconButton>
          <IconButton
            sx={{
              display: "flex",
              gap: 1,
              "> p": {
                fontWeight: "600",
                fontFamily: "Kanit",
                color: "#747474",
              },
            }}
          >
            <FaRegBookmark />
            <Typography>Salvar</Typography>
          </IconButton>
          <IconButton
            sx={{
              display: "flex",
              gap: 1,
              "> p": {
                fontWeight: "600",
                fontFamily: "Kanit",
                color: "#747474",
              },
            }}
          >
            <FaRegShareSquare />
            <Typography>Compartilhar</Typography>
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Feedbox;
