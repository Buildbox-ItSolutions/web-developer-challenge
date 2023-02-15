import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 550px;
  margin-top: 56px;
  align-items: center;
  width: 80vw;
  max-width: 550px;
  margin: 40px auto 0;
  border-radius: 3px;
`;

export const FeedItemsList = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const FeedItemWrapper = styled.div`
  width: 80vw;
  display: flex;
  align-items: center;
  flex: 0 0 100%;
  color: white;
  max-width: 550px;
  background-color: #313131;
  padding: 56px 24px 32px;
  gap: 40px;
  margin: 0 auto 16px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  position: sticky;
  :last-of-type {
    margin-bottom: 170px;
  }
`;

export const ImageWrapper = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 36px;
`;

export const PostImage = styled.img`
  width: 88px;
  height: 88px;
  object-fit: cover;
  border-radius: 36px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MessageText = styled.span`
  color: #9f9f9f;
  font-family: "Roboto";
  text-align: left;
  font-size: 16px;
  margin-bottom: 24px;
  max-height: 120px;
  overflow-y: scroll;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  ::-webkit-scrollbar {
    width: 12px; /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: 7a7a7a; /* color of the tracking area */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #71bb00; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 3px solid 7a7a7a; /* creates padding around scroll thumb */
  }
`;

export const SentByText = styled.span`
  font-family: "Roboto";
  color: #5f5f5f;
  font-size: 12px;
  text-align: left;
`;

export const AuthorText = styled.span`
  color: #7a7a7a;
  font-family: "Roboto";
  font-size: 14px;
`;

export const DeleteIcon = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px;
  cursor: pointer;
`;

export const FeedText = styled.span`
  width: 100%;
  margin-bottom: 8px;
  color: #7a7a7a;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 500;
  text-align: left;
`;

export const NoItemsText = styled.span`
  margin: 20px 0 20px;
  color: #7a7a7a;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 500;
`;
