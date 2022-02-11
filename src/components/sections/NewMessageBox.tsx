import styled from 'styled-components';
import BoxImage from '../../images/image.png'


const StyledNewMessageSection = styled.section`
    max-width: 900px;

    .inner{
        display: flex;
        justify-content: center;
    }
    
`

const StyledBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-evenly;
    width: 516px;
    background-color: var(--box);
    border: var(--border);
    padding: 24px;

    & > * {
        margin-bottom: 10px;
    }

    input, textarea{
        width: 100%;
        padding: 12px 1.5rem;
        color: var(--input-text);
        font-size: var(--fz-sm);
        font-family: var(--font-sans);
        font-weight: 400;
        
        
        border-radius: 8px;

        border: 0;
        background-color: var(--textarea);
    }
`
const  StyledImgUpload = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 auto;

    width: 88px;
    height: 88px;
    border-radius: 36px;
    border: solid 1px #4b4b4b;
    background-color: rgba(75, 75, 75, 0);

    margin-bottom: 20px;

    img{
        width: 24px;
        height: 24px;
    }
`

const StyledButtonContainer = styled.div`
    display: flex;
    margin-top: 20px;

    button{
        ${({ theme }) => theme.mixins.btnDiscard};

        border-bottom: 1px solid var(--button);
    }


    button[type="submit"]{
        ${({ theme }) => theme.mixins.btnPublish};
    }
`

const NewMessageBox = () => {
    return(
        <StyledNewMessageSection>
            <div className="inner">
                <StyledBox>
                    <StyledImgUpload href="/">
                        <img alt="BoxImage" src={BoxImage} />
                    </StyledImgUpload>
                    

                    <input 
                        placeholder='Digite o seu nome'
                    />

                    <textarea 
                        placeholder='Mensagem'
                    />
                    

                    <StyledButtonContainer>
                        <button>
                            Descartar
                        </button>

                        <button type="submit">
                            Publicar
                        </button>
                    </StyledButtonContainer>
                </StyledBox>
            </div>         
        </StyledNewMessageSection>
    )
}

export default NewMessageBox;