import React from "react";

const formFields = [
    { label: 'Nome', type: 'text', id: 'name' },
    { label: 'Email', type: 'email', id: 'email' },
    { label: 'Senha', type: 'password', id: 'password' },
    { label: 'CEP', type: 'text', id: 'cep' },
    { label: 'Rua', type: 'text', id: 'street' },
    { label: 'Número', type: 'text', id: 'number' },
    { label: 'Bairro', type: 'text', id: 'neighborhood' },
    { label: 'Cidade', type: 'text', id: 'city' },
    { label: 'Estado', type: 'text', id: 'state' }
];

function Form() {
    const [form, setForm] = React.useState(
        formFields.reduce((acc, field) => {
            return {
                ...acc,
                [field.id]: ''
            };
        }, {} as Record<string, string>)
    );

    const [response, setResponse] = React.useState<null | Response>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { id, value } = e.target;
        setForm({ ...form, [id]: value });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        }).then(response => setResponse(response));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {formFields.map(({ label, type, id }) => (
                    <div key={id}>
                        <label htmlFor={id}>{label}</label>
                        <input type={type} id={id} value={form[id]} onChange={handleChange} style={{ marginBottom: '2rem' }} />
                    </div>
                ))}
                {response && response.ok && <p>Formulário enviado com sucesso! Status: {response.status}</p>}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Form;