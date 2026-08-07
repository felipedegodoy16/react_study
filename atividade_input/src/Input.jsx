import React from "react";

function Input({ label, type, forInput, {form, setForm} }) {
  const [value, setValue] = React.useState("");

  return (
    <>
      <label htmlFor={forInput}>{label}</label>
      <input
        id={forInput}
        type={type}
        value={value}
        onChange={({ target }) => {
          setValue(target.value);
        }}
      />
      <br />
      <br />
    </>
  );
}

export default Input;
