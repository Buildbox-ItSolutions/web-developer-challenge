import styled from 'styled-components'

export const CreatePostContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  padding: 0 1rem;
  width: 100%;
  min-height: 353px;

  .card{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
    width: 100%;
    max-width: 516px;
    height: 100%;
    background-color: var(--black-50);
    border: 1px solid var(--border);
    border-radius: 3px;

    form{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;

      .selectImage{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 16px;
        width: 88px;
        height: 88px;
        border: 1px solid var(--border);
        border-radius: 36px;
        cursor: pointer;

        transition: .4s;

        :hover{
          border: 1px solid var(--white);

        }
  
        input{
          display: none;
        }
      }
  
      .inputName{
        width: 100%;
        padding: 12px;
        margin-bottom: 8px;
        background-color: var(--gray-300);
        border:none;
        border-radius: 8px;
        color: var(--white);
        font-size: 14px;

        transition: .4s;

        :focus{
          background-color: var(--gray-200);

        }


        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: var(--gray-50);
          opacity: 1; /* Firefox */
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: var(--gray-50);
        }

        ::-ms-input-placeholder { /* Microsoft Edge */
        color: var(--gray-50);
        }

      }

      textarea{
        max-width: 100%;
        min-width: 100%;
        min-height: 80px;
        padding: 12px;
        background-color: var(--gray-300);
        border:none;
        border-radius: 8px;
        color: var(--white);
        font-size: 14px;

        transition: .4s;

        :focus{
          background-color: var(--gray-200);

        }

        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: var(--gray-50);
          opacity: 1; /* Firefox */
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: var(--gray-50);
        }

        ::-ms-input-placeholder { /* Microsoft Edge */
        color: var(--gray-50);
        }
      }

      .buttonsArea{
        display: flex;
        justify-content: flex-end;
        width: 100%;
        margin-top: 32px;

        .descartar{
          padding: 12px 24px;
          background-color: transparent;
          color: var(--gray-200);
          text-decoration: underline;

          transition: .4s;

          :hover{
            color: var(--white);

          }
        }

        .publicar{
          padding: 12px 24px;
          background-color: var(--gray-200);
          color: var(--background);
          border-radius: 8px;

          transition: .4s;

          :hover{
            background-color: var(--green);
            color: var(--white);

          }

        }
      }
    }
  }
`
