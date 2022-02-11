import styled from 'styled-components';
import DeleteIcon from '@/assets/delete.svg?component';

import Text from '@/components/Text';
import Button from '@/components/Button';

const PostContainer = styled.article`
  display: flex;
  flex-direction: column;
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.black['500']};
  border: 1px solid ${({ theme }) => theme.black['300']};
  transition: border-color 200ms ease-out;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const PostHeader = styled.div`
  align-self: flex-end;
`;

const PostBody = styled.div`
  display: flex;
  gap: 32px;
`;

const PostAvatar = styled.img`
  width: 88px;
  height: 88px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: black;
`;

export default function Post() {
  return (
    <PostContainer>
      <PostHeader>
        <Button variant="icon">
          <DeleteIcon />
        </Button>
      </PostHeader>
      <PostBody>
        <PostAvatar src="https://s2.glbimg.com/115DQucrWsNOUxf_ncmMUisprZI=/0x0:1080x819/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/w/a/cB6VP5QoOByFKEuCleIQ/jonreceitas-109758346-416338779271002-5424220606850697813-n.jpg" />
        <div>
          <Text style={{ fontSize: '16px', marginBottom: '24px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla mattis ligula vel velit scelerisque iaculis. Nam
            mattis justo id orci commodo, eu tempus purus cursus.
          </Text>
          <p>Enviado por</p>
          <p>Igor Wessel</p>
        </div>
      </PostBody>
    </PostContainer>
  );
}
