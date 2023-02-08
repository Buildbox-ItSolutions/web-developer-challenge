export type ElementType = {
    width: string;
    height: string;
    radius?: string;
    fit?: string;
    choosed?: boolean;
    cursor?: string;
    margin?:string;
  };
  
  export type AvatarType = {
    src: string;
    srcSet?: string;
    handle: (event: React.ChangeEvent<HTMLInputElement>) => void;
    choose: boolean;
  };
  
  export type ElementPostedType = {
    choose?: boolean;
    srcImage?: string;
    srcSetImage?: string;
    srcDelete?: string;
    srcSetDelete?: string;
    message?: string;
    delPost?: () => void;
    assigned?: string;
  };

  export type ButtonPublish={
    choosed:boolean
  }