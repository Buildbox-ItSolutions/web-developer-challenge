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
        hovered: {
          background: string;
        };
        disabled: {
          background: string;
          text: string;
        };
      };

      field: {
        default: {
          background: string;
          border: string;
          text: string;
          placeholder: string;
        };
        hovered: {
          background: string;
          border: string;
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

    borderRadius: {
      card: string;
      field: string;
      button: string;
      uploadButton: string;
    };
  }
}
