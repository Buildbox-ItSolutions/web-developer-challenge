import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`

export const ContentContainer = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 40rem;
  height: 100%;
  padding: 3rem 1rem;
`

export const PostsForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;

    > input {
      width: 100%;
      height: 2.5rem;
    }

    > textarea {
      width: 100%;
      height: 5rem;
    }
  }
`

export const ButtonsContainer = styled.footer`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: end;

  margin-top: 1rem;
`

export const PostsContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > h2 {
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-100']};
  }
`
