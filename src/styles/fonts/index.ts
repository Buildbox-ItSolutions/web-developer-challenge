import localFonts from "next/font/local";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });
const sf_pro_display = localFonts({ src: "./SF-Pro-Display-Black.otf" });
const sf_pro_display_light = localFonts({ src: "./SF-Pro-Display-Light.otf" });

export { roboto, sf_pro_display, sf_pro_display_light };
