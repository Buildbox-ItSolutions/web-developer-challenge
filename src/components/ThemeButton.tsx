import { WbSunnyOutlined, DarkModeOutlined } from '@mui/icons-material';

type ThemeButtonProps = {
  state: boolean;
  event: () => void;
};

function ThemeButton({ state, event }: ThemeButtonProps) {
  return (
    <button
      type="button"
      onClick={ event }
    >
      {state ? <WbSunnyOutlined /> : <DarkModeOutlined />}
    </button>
  );
}

export default ThemeButton;
