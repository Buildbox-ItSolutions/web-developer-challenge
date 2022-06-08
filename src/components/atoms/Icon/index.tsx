import React from 'react';
import * as Icons from 'react-icons/fa';
import theme, { ThemeColors } from 'styles/theme';

export interface IconProps {
  name: string;
  color?: ThemeColors;
}

function Icon({ name, color }: IconProps) {
  const IconTmp = Icons[name];
  if (!IconTmp) return null;

  return <IconTmp fill={theme.colors[color]} />;
}

Icon.defaultProps = {
  color: 'primary'
};

export default Icon;
