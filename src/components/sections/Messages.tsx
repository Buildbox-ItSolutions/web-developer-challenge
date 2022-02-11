import styled from 'styled-components';
import ProfilePic from '../../images/photo-base.png'
import Close from '../../images/delete.png'

const StyledMessageSection = styled.section`
    max-width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    .inner{
        max-width: 560px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        position: relative;


        h2{
            color: var(--sub-text);
            font-size: var(--fz-sm);
        }

    }
`

const StyledMessage = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 3fr;
    grid-gap: 25px;
    grid-template-areas: 
        "a a a"
        "b c c"
        "b c c";


    margin-bottom: 30px;

    max-width: 516px;
    padding: 15px 24px 30px 24px;

    
    background-color: var(--box);
    border: var(--border);

    @media(max-width: 480px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

const StyledPic = styled.div`

    grid-area: b;

`

const StyledText = styled.div`

    grid-area: c;

    max-width: 360px;

    p{
        color: var(--text);
        font-size: var(--fz-md);
        margin: 0 0 25px 0;
    }

    h3{
        color: var(--button);
        font-size: var(--fz-xxs);
    }

    h2{
        color: var(--sub-text);
        font-size: var(--fz-sm);
    }

    @media(max-width: 480px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

const StyledClose = styled.div`
    grid-area: a;

    display: flex;
    justify-content: flex-end;

    img{
        width: 20px;
        height: 20px;
    }

    @media(max-width: 480px){
        align-self: flex-end;
    }
`

const Messages = () => {
    return (
        <StyledMessageSection>
            <div className="inner">

                
                <h2>Feed</h2>
                

                <StyledMessage>

                    <StyledClose>
                        <img alt="Close" src={Close}/>
                    </StyledClose>
                    

                    <StyledPic>
                        <img alt="Profile" src={ProfilePic}/>
                    </StyledPic>

                    <StyledText>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.
                        </p>

                        <h3>Enviado por</h3>

                        <h2>Manuela Oliveira</h2>

                    </StyledText>

                </StyledMessage>

                <StyledMessage>

                    <StyledClose>
                        <img alt="Close" src={Close}/>
                    </StyledClose>

                    <StyledPic>
                        <img alt="Profile" src={ProfilePic}/>
                    </StyledPic>

                    <StyledText>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.
                        </p>

                        <h3>Enviado por</h3>

                        <h2>Manuela Oliveira</h2>

                    </StyledText>
                </StyledMessage>
            </div> 
        </StyledMessageSection>
    )
}

export default Messages