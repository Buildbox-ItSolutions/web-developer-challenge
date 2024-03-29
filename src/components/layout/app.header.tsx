import AppHeaderUi from "../../ui/layout/app.header.ui.tsx";
import LogoImgUi from "../../ui/img/logo.img.ui.tsx";


export default function AppHeader() {
  return (
    <AppHeaderUi>
      <LogoImgUi
        src="img/bx-logo.png"
        srcSet="img/bx-logo@2x.png 2x,img/bx-logo@3x.png 3x"
        alt="BX Logo"
      />
    </AppHeaderUi>
  )
}