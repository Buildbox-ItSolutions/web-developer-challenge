import { 
    StyledMessageSection, 
    StyledMessage,
    StyledPic,
    StyledText,
    StyledDelete
} from './styles';

import { useMessages } from '../../../hooks/useMessages';

import Delete from '../../../images/delete.svg'

import { TransitionGroup, CSSTransition } from 'react-transition-group';


const Messages = () => {
    const {messages, deleteMessage} = useMessages()
    
    function handleRemoveMessage(messageId: number) {
        deleteMessage(messageId)
      }

    return (
        <StyledMessageSection>
            <div className="inner">
                
                <h2>Feed</h2>

                    <TransitionGroup>
                    {messages.map((message) => {
                        return(
                            <CSSTransition
                                key={message.id}
                                timeout={500}
                                classNames="fade"
                                
                                // onEnter={() => setShowButton(false)}
                                // onExited={() => setShowButton(true)}
                            >
                            <StyledMessage key={message.id}>
                    
                                <StyledDelete
                                    onClick={() => handleRemoveMessage(message.id)}
                                >
                                    <img alt="Close" src={Delete}/>
                                </StyledDelete>
                    
                                <StyledPic>                             
                                        <img alt="ProfileS" src={message.image}/>
                                </StyledPic>
                                   
                                <StyledText>
                                    <p>{message.text}</p>
                                
                                    <h3>Enviado por</h3>

                                    <h2>{message.name}</h2>
                                </StyledText>
                            </StyledMessage>
                            </CSSTransition>
                        
                        )
                    })}
                    </TransitionGroup>
            </div> 
        </StyledMessageSection>
    )
}

export default Messages