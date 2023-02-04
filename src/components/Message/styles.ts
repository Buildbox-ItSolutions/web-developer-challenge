import styled from 'styled-components'

export const MessageContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme['gray-700']};

  border-radius: 3px;
  border: 1px solid ${(props) => props.theme['gray-600']};

  padding-top: 0.75rem;
  padding-bottom: 2rem;
  padding-left: 1.5rem;
  padding-right: 0.75rem;

  gap: 1.5rem;

  margin: 0.5rem auto;
`

export const DeleteMessageButton = styled.button`
  display: flex;
  align-self: flex-end;

  background: none;

  border-radius: 50%;
  border: none;
`

export const MessageData = styled.div`
  display: flex;
  align-self: flex-start;

  gap: 2rem;

  div.content {
    display: flex;
    flex-direction: column;
    margin-right: 0.75rem;

    p {
      font-size: 1rem;
      line-height: 1.25;
      text-align: left;
    }

    strong {
      color: ${(props) => props.theme['gray-400']};

      font-size: 0.75rem;
      font-weight: 500;

      line-height: 1.33;
      letter-spacing: 0.29px;

      margin-top: 1.5rem;
    }

    span {
      color: ${(props) => props.theme['gray-350']};
      line-height: 1.29;
    }
  }
`