import React from "react";

const types = {
    cep: {
        regex: /^[0-9]{5}-[0-9]{3}$/,
        message: 'Preencha um CEP válido'
    },
    email: {
        regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
        message: 'Preencha um email válido'
    }
};

const useForm = (type: keyof typeof types) => {
    const [value, setValue] = React.useState<any>('');
    const [error, setError] = React.useState<string | null>(null);

    function validate(value: string) {
        if(value.length === 0) {
            setError('Preencha um valor');
            return false;
        } else if(types[type] && !types[type].regex.test(value)) {
            setError(types[type].message);
            return false;
        } else {
            setError(null);
            return true;
        }
    }

    function onChange({target}: React.ChangeEvent<HTMLInputElement>) {
        if (error) validate(target.value);
        setValue(target.value);
    }

    return { value, setValue, error, onChange, onBlur: () => {validate(value)}, validate };
}

export default useForm;