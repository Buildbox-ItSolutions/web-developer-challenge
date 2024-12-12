import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import { HighlightOff } from "@mui/icons-material";

interface CardProps {
  key: string;
  handleRemoveItemList?: () => void;
  avatarIcon: Blob | MediaSource;
  message: string;
  name: string;
}

export const Card = ({
  key,
  message,
  name,
  avatarIcon,
  handleRemoveItemList,
}: CardProps) => {
  return (
    <Grid
      key={key}
      item
      xs={12}
      width={{ xs: 400, sm: 450, md: 516 }}
      bgcolor="#313131"
      borderRadius={3}
      border={"1px solid #3b3b3b"}
      my={2}
    >
      <Grid>
        <Grid container alignItems="flex-end" justifyContent="flex-end" pb={2}>
          <IconButton onClick={handleRemoveItemList}>
            <HighlightOff fontSize="medium" color="warning" />
          </IconButton>
        </Grid>

        <Grid container item xs={12} sm={12} md={12}>
          <Grid item xs={3} md={3} pl={{ xs: 2, sm: 1.5, md: 3 }}>
            <img
              src={URL.createObjectURL(avatarIcon)}
              width={88}
              height={88}
              alt="Logo"
              style={{
                borderRadius: 36,
              }}
            />
          </Grid>

          <Grid item xs={8} md={7.5} ml={{ xs: 2, sm: 1, md: 3 }}>
            <Typography fontSize={16} textAlign="justify" color="#9f9f9f">
              {message}
            </Typography>

            <Grid container item pt={2} pb={4}>
              <Grid item md={4}>
                <Typography fontSize={12} color="#5f5f5f" textAlign="left">
                  Enviado por
                </Typography>
                <Typography fontSize={14} color="#7a7a7a" textAlign="left">
                  {name}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
