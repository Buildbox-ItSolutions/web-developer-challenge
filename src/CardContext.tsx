import React, { createContext, Dispatch, SetStateAction, useState, useEffect } from 'react';

export interface Cards {
    id: string;
    nome: string;
    mensagem: string;
    url: string;
}

interface Props {
    setCards: Dispatch<SetStateAction<Cards[]>>;
    cards: Cards[];
    setDadosFormulario: Dispatch<SetStateAction<any>>;
    dadosFormulario: any;
}

export const CardContext = createContext<Props>({} as Props);

export const CardContainer: React.FC = ({ children }) => {
    const [cards, setCards] = useState<Cards[]>([]);
    const [dadosFormulario, setDadosFormulario] = useState<Cards>();



    useEffect(() => {

        if (!dadosFormulario)
            return;

        setCards(itens => [...itens, dadosFormulario]);

    }, [dadosFormulario]);

    return (
        <CardContext.Provider value={{
            cards, setCards, dadosFormulario, setDadosFormulario
        }}>
            {children}
        </CardContext.Provider>
    )
}