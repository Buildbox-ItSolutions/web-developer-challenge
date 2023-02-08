import React, { createContext, useReducer } from 'react'

interface State {
    galleries: Array<{
        id: number
        name: string
        description: string
        image: File
    }>
}

interface Action {
    type: 'DELETE_GALLERY' | 'ADD_GALLERY'
    payload: number | State['galleries'][0]
}

const initialState: State = {
    galleries: [],
}

const GlobalContext = createContext<[State, React.Dispatch<Action>]>([initialState, () => initialState])

const GlobalProvider: React.FC = ({ children }: any) => {
    const [state, dispatch] = useReducer((state: State, action: Action) => {
        switch (action.type) {
            case 'DELETE_GALLERY':
                return {
                    ...state,
                    galleries: state.galleries.filter((gallerie) => gallerie?.id !== action.payload),
                }
            case 'ADD_GALLERY':
                return {
                    ...state,
                    galleries: [
                        ...state.galleries,
                        {
                            ...action.payload,
                            id: state.galleries.length + 1,
                        },
                    ],
                }
            default:
                return state
        }
    }, initialState)

    return <GlobalContext.Provider value={[state, dispatch]}>{children}</GlobalContext.Provider>
}

export { GlobalContext, GlobalProvider }
