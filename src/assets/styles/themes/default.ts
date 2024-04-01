import { DefaultTheme } from 'styled-components';

export default {
  colors: {
    background: '#343434',

    header: {
      background: '#2b2b2b',
      border: '#232323',
    },

    danger: '#d65923',

    text: {
      '50': '#fff',
      '500': '#9f9f9f',
      '600': '#7a7a7a',
      '700': '#5f5f5f',
      '800': '#313131',
    },

    button: {
      default: {
        background: '#71bb00',
        text: '#fff',
      },
      hovered: {
        background: '#88c52d',
      },
      disabled: {
        background: '#5f5f5f',
        text: '#313131',
      },
    },

    field: {
      default: {
        background: '#494949',
        border: 'transparent',
        placeholder: '#9f9f9f',
        text: '#fff',
      },
      hovered: {
        background: '#535353',
        border: '#828282',
      },
    },

    card: {
      background: '#313131',
      border: '#3b3b3b',
      content: '#9f9f9f',
      senderText: '#5f5f5f',
      senderName: '#7a7a7a',
    },

    uploadButton: {
      border: '#4b4b4b',
    },
  },

  borderRadius: {
    card: '0.3rem',
    field: '0.8rem',
    button: '0.8rem',
    uploadButton: '3.6rem',
  },
} satisfies DefaultTheme;
