export type NavbarLogo = {
  src: string;
  alt: string;
};

export type NavbarProps = {
  logo: NavbarLogo;
  onRedirect: (path?: string) => void;
};
