import styled from 'styled-components';

export interface AvatarProps {
  cursor?: string;
}

const Avatar = styled.img<AvatarProps>`
  border-radius: 36px;
  cursor: ${props => props.cursor};
`;

Avatar.defaultProps = {
  cursor: 'none'
};

export default Avatar;
