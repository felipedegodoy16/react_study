import React from "react";
import Input from "./Input";

function Form() {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input forInput="name" type="text" label="Nome" form={form, setForm} />
        <Input forInput="email" type="email" label="Email" form={form, setForm}/>
        <Input forInput="password" type="password" label="Senha" form={form, setForm}/>
        <Input forInput="cep" type="text" label="CEP" form={form, setForm}/>
        <Input forInput="street" type="text" label="Rua" form={form, setForm}/>
        <Input forInput="number" type="text" label="Número" form={form, setForm}/>
        <Input forInput="neighbor" type="text" label="Bairro" form={form, setForm}/>
        <Input forInput="city" type="text" label="Cidade" form={form, setForm}/>
        <Input forInput="state" type="text" label="Estado" form={form, setForm}/>
        <button>Enviar</button>
      </form>
    </>
  );
}

export default Form;
