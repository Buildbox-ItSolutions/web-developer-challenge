import React, { useState, ChangeEvent } from 'react';

interface ValidatorBase {
    regex: RegExp,
    message: string;
}

interface ValidatorType {
    [id: string]: ValidatorBase;
}


const validators: ValidatorType = {
    nome: {
        regex: /.{3,}/,
        message: 'Minimo 3 caracteres'
    },
    mensagem: {
        regex: /.{6,}/,
        message: 'Minimo 6 caracteres'
    },
    imagem: {
        regex: /\.(?:jpg|gif|png)/g,
        message: 'Formato invalido.'
    }
}

type typeInput = 'nome' | 'mensagem' | 'imagem' | undefined;


interface Response {
    value: any;
    error: string | undefined;
    isValid: () => boolean;
    onBlur: () => boolean;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    clear: () => void;
}

const useForm = (type: typeInput = undefined): Response => {

    const [value, setValue] = useState<string | number | Date | undefined>("")
    const [error, setError] = useState<string | undefined>();

    const validationExist = (type: string) => !!validators[type],
        didNotPassTheRegex = (type: string, valor: any) => !validators[type].regex.test(valor);


    const clearValue = () => setValue('');

    function isValid(value: any): boolean {

        if (type === undefined) return true;
        if (typeof value === 'string' && value.length === 0) {
            setError('Preencha um valor.');
            return false;
        }
        if (validationExist(type) && didNotPassTheRegex(type, value)) {
            setError(validators[type].message);
            return false;
        }
        setError(undefined);
        return true;
    }

    function onChange({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {

        if (error) isValid(target.value)

        setValue(target.value);

    }

    return {
        value,
        error,
        onChange,
        isValid: () => isValid(value),
        onBlur: () => isValid(value),
        clear: () => clearValue()
    }

}

export default useForm;