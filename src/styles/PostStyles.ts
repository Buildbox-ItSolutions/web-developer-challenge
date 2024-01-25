import styled from 'styled-components';
import tw from 'twin.macro';

const PostSt = styled.div`
  button {
    ${tw`
      absolute
      top-0
      right-0
      m-2
      p-1
      bg-red-600
      text-white
      rounded-full
      hover:bg-red-500
      focus:outline-none
      focus-visible:ring
      focus-visible:ring-red-300
      focus-visible:ring-opacity-50
      transition duration-300`
    }
  }
`;

export default PostSt;
