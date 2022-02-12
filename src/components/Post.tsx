import styled, { useTheme } from 'styled-components';
import DeleteIcon from '@/assets/delete.svg?component';

import Text from '@/components/Text';
import Button from '@/components/Button';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  padding: 12px 24px 32px 24px;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.black['500']};
  border: 1px solid ${({ theme }) => theme.black['300']};
  transition: border-color 200ms ease-out;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const Header = styled.div`
  align-self: flex-end;
`;

const Body = styled.div`
  display: flex;
  gap: 32px;
`;

const Avatar = styled.img`
  width: 88px;
  height: 88px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: black;
`;

const Content = styled.div``;

const PostText = styled(Text)`
  margin-bottom: 24px;
`;

export default function Post() {
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <Button variant="icon">
          <DeleteIcon />
        </Button>
      </Header>
      <Body>
        <Avatar src="https://s2.glbimg.com/115DQucrWsNOUxf_ncmMUisprZI=/0x0:1080x819/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/w/a/cB6VP5QoOByFKEuCleIQ/jonreceitas-109758346-416338779271002-5424220606850697813-n.jpg" />
        <Content>
          <PostText
            fontSize="16px"
            lineHeight="20px"
            color={theme.text.primary}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla mattis ligula vel velit scelerisque iaculis. Nam
            mattis justo id orci commodo, eu tempus purus cursus.
          </PostText>
          <Text
            fontSize="12px"
            fontWeight="500"
            lineHeight="16px"
            letterSpacing="0.29px"
            color={theme.black[100]}
          >
            Enviado por
          </Text>
          <Text fontSize="14px" lineHeight="18px">
            Igor Wessel
          </Text>
        </Content>
      </Body>
    </Container>
  );
}
