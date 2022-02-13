import { ButtonDeleted, ContainerFeed, ContainerImage, ContainerInfoFeed } from '../styles/styles';
import {FeedDataPublication} from '../pages/App';

interface Props {
    dataPublication: FeedDataPublication,
    deletedPublication: Function,
};

const Feed = ({dataPublication, deletedPublication}: Props) => {
    return ( 
        <ContainerFeed>
        <ButtonDeleted onClick={()=> deletedPublication(dataPublication.id)}/>
        <ContainerImage background={dataPublication.image}/>
        <ContainerInfoFeed>
            <p>{dataPublication.text}</p>
    
            <span>
                <p>Enviado por</p>
                <h4>{dataPublication.name}</h4>
            </span>
        </ContainerInfoFeed>
        </ContainerFeed>
     );
};
 
export default Feed;