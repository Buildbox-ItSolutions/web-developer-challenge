export type NavbarLogo = {
  src: string;
  alt: string;
};

export type NavbarStyledProps = {};

export type NavbarProps = NavbarStyledProps & {
  logo: NavbarLogo;
  onRedirect: (path?: string) => void;
};
