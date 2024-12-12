import { useContext } from 'react'
import { SnackbarContext } from '../context/snackbar-provider/snackbar-provider'

const useSnackbar = () => {
    const { message, showMessage } = useContext(SnackbarContext)

    return {
        message,
        showMessage
    }
}

export default useSnackbar