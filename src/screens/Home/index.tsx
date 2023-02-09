import React, { useState } from "react";
import { Box, Button, Grid, Input, Typography } from "@mui/material";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";

import "./styles.css";

import { Card } from "../components/Card";
import { styles } from "./stylesInputsAndBtns";
import { Header } from "../components/Header";

interface HomeProps {
  id: string;
  image: any;
  name: string;
  message: string;
}

export const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [itemsList, setItemsList] = useState<HomeProps[]>([]);

  const handleChangeInputName = (event: any) => {
    const valueInput = event?.target.value;

    setName(valueInput);
  };

  const handleChangeInputMessage = (event: any) => {
    const valueInput = event?.target.value;

    setMessage(valueInput);
  };

  const handleAddItemList = () => {
    const data = {
      id: String(new Date().getTime()),
      image: selectedImage,
      name: name,
      message: message,
    };

    if (!selectedImage && !name && !message) return;

    setItemsList((oldState) => [...oldState, data]);
    setSelectedImage(null);
    setName("");
    setMessage("");
  };

  const handleToDiscard = () => {
    setSelectedImage(null);
    setName("");
    setMessage("");
  };

  const handleRemoveItemList = (id: string) => {
    setItemsList((oldState) => oldState.filter((item) => item.id !== id));
  };

  return (
    <Grid
      display="flex"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Header />
      <Grid
        item
        xs={12}
        width={{ xs: 400, sm: 450, md: 516 }}
        bgcolor="#313131"
        borderRadius={3}
        border={"1px solid #3b3b3b"}
        mt={10}
      >
        <Grid display="flex" alignItems="center" justifyContent="center" py={4}>
          {!selectedImage ? (
            <>
              <label
                //@ts-ignore
                for="arquivo"
                className="divInputFile"
              >
                <InsertPhotoOutlinedIcon
                  fontSize="medium"
                  sx={{ color: "#4b4b4b" }}
                />
              </label>

              <input
                id="arquivo"
                type="file"
                name="arquivo"
                onChange={(event: any) => {
                  //@ts-ignore
                  console.log(event.target.files[0]);
                  //@ts-ignore
                  setSelectedImage(event.target.files[0]);
                }}
              />
            </>
          ) : (
            <Box
              display="flex"
              width={88}
              height={88}
              borderRadius={36}
              alignItems="center"
              justifyContent="center"
              sx={{ backgroundSize: "cover" }}
            >
              <img
                src={URL.createObjectURL(selectedImage)}
                width="100%"
                height="100%"
                alt="Logo"
                className="img"
              />
            </Box>
          )}
        </Grid>

        <Grid
          item
          alignItems="center"
          justifyContent="center"
          mx={{ xs: 2, sm: 4, md: 5 }}
        >
          <Input
            placeholder="Digite seu nome"
            value={name}
            onChange={handleChangeInputName}
            disableUnderline
            className="inputName"
            style={styles.inputName}
          />

          <Input
            placeholder="Mensagem"
            value={message}
            onChange={handleChangeInputMessage}
            multiline
            minRows={3}
            disableUnderline
            style={styles.inputMessage}
          />
        </Grid>

        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          pr={{ xs: 2, sm: 4, md: 5 }}
          mt={4}
          mb={2}
        >
          <Button
            //@ts-ignore
            style={styles.btnToDiscards}
            onClick={handleToDiscard}
          >
            Descartar
          </Button>
          <Button
            style={
              styles.btnPublic && {
                backgroundColor: name && message ? "#71bb00" : "#5f5f5f",
                color: name && message ? "#fff" : "#313131",
                textTransform: "capitalize",
              }
            }
            onClick={handleAddItemList}
          >
            <Typography>Publicar</Typography>
          </Button>
        </Grid>
      </Grid>

      <Grid alignItems="center" justifyContent="center" pt={10}>
        <Grid width="100%" alignItems="flex-start" justifyContent="flex-start">
          <Typography color="#7a7a7a" fontSize={14} textAlign="left">
            Feed
          </Typography>
        </Grid>

        {itemsList.map((item) => (
          <Card
            key={item.id}
            message={item.message}
            name={item.name}
            avatarIcon={item.image}
            handleRemoveItemList={() => handleRemoveItemList(item.id)}
          />
        ))}
      </Grid>
    </Grid>
  );
};
