import localFonts from "next/font/local";

const roboto = localFonts({
  src: [
    {
      path: "Roboto-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});
const sf_pro_display = localFonts({ src: "./SF-Pro-Display-Black.otf" });
const sf_pro_display_light = localFonts({ src: "./SF-Pro-Display-Light.otf" });

export { roboto, sf_pro_display, sf_pro_display_light };
