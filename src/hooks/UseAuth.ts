import { useContext } from "react";
import { AuthContext } from '../contexts/AuthContext'

export function UseAuth() {
    const value = useContext(AuthContext);

    return value;
}