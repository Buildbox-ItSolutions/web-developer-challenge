import {CardFormComponent} from "../../components/Card/cardForm";
import {Home} from "./Home.styles.ts";
import {HeaderComponent} from "../../components/Header";
import {useContext} from "react";
import {FeedContext} from "../../Contexts/FeedContext.tsx";
import {randomId} from "../../Utils";
import {toast} from "react-toastify";
import {FeedFragment} from "../../Fragments";

export const HomePage = () => {
    const { addFeed } = useContext(FeedContext)

    return <Home style={{overflow: "auto"}}>
        <HeaderComponent MainTitle={"buildbox"} SubTitle={"WEB CHALLENGE"}/>
        <CardFormComponent
            style={{marginTop: "10px"}}
            cbOnCompleteForm={(data)=> {
                addFeed({...data, id: randomId()})
                toast("Feed adicionado com sucesso!", {type: "success"})
            }}
        />
        <FeedFragment/>
    </Home>

}


