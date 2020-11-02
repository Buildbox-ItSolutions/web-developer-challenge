/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";

export class HomeController {
  upButtonEnabled: boolean;
  setUpButtonEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  constructor() {
    [this.upButtonEnabled, this.setUpButtonEnabled] = useState<boolean>(false);

    /**
     * Observer function that checks the position of scrolling the screen
     */
    useEffect(() => {
      window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 0) {
          this.setUpButtonEnabled(true);
        } else {
          this.setUpButtonEnabled(false);
        }
      });
    }, []);
  }
}
