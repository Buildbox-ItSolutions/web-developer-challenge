import { useTheme } from 'styled-components';

import DeleteIcon from '@/assets/delete.svg?component';

import {
  Avatar,
  Body,
  Container,
  Content,
  Header,
  PostText,
} from './styled';
import Text from '@/components/Text';
import Button from '@/components/Button';

import { Post as PostType } from '@/types';

type Props = {
  post: PostType;
  handleRemovePost: (id: string) => void;
};

export default function Post({ post, handleRemovePost }: Props) {
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <Button
          onClick={() => handleRemovePost(post.id)}
          variant="icon"
        >
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
            {post.message}
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
            {post.name}
          </Text>
        </Content>
      </Body>
    </Container>
  );
}
