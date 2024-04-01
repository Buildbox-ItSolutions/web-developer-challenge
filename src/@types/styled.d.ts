import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;

      header: {
        background: string;
        border: string;
      };

      danger: string;

      text: {
        50: string;
        500: string;
        600: string;
        700: string;
        800: string;
      };

      button: {
        default: {
          background: string;
          text: string;
        };
        disabled: {
          background: string;
          text: string;
        };
      };

      field: {
        default: {
          border: string;
          background: string;
          text: string;
          placeholder: string;
        };
      };

      card: {
        background: string;
        border: string;
        content: string;
        senderText: string;
        senderName: string;
      };

      uploadButton: {
        border: string;
      };
    };
  }
}
