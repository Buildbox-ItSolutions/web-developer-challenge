import React from 'react';
import * as Icons from 'react-icons/fa';
import theme, { ThemeColors } from 'styles/theme';

export interface IconProps {
  name: keyof typeof Icons;
  color?: ThemeColors;
  onClick?: () => void;
}

function Icon({ name, color, onClick }: IconProps) {
  const IconTmp = Icons[name];
  if (!IconTmp) return null;

  return (
    <IconTmp
      fill={theme.colors[color]}
      style={{ cursor: onClick != null ? 'pointer' : 'auto' }}
      onClick={onClick}
    />
  );
}

Icon.defaultProps = {
  color: 'primary',
  onClick: undefined
};

export default Icon;
