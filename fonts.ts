import { Poppins, Anonymous_Pro } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const anonymous_Pro = Anonymous_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
