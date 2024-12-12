import React, {
    createContext,
    ReactNode,
    useState,
} from 'react'
import Snackbar from '@mui/material/Snackbar';

type Context = {
    showMessage(message: string): void
    message: string
}

export const SnackbarContext = createContext({} as Context)

const SnackbarProvider = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')

    const showMessage = (message: string) => {
        setMessage(message)
        setOpen(true)
    }

    const close = () => {
        setMessage('')
        setOpen(false)
    }

    return (
        <SnackbarContext.Provider
            value={{
                message,
                showMessage
            }}
        >
            <Snackbar
                open={open}
                autoHideDuration={6000}
                message={message}
                onClose={close}
            />
            {children}
        </SnackbarContext.Provider>
    )
}

export default SnackbarProvider