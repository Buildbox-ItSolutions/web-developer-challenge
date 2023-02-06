import { FC } from 'react';

import { CardProps } from './model';
import { CardStyled } from './styles';

export const BixCard: FC<CardProps> = props => <CardStyled {...props}></CardStyled>;
