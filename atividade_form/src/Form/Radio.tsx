import React from "react";

function Radio({
  pergunta,
  options,
  onChange,
  value,
  id,
  active,
}: {
  pergunta: string;
  options: Array<string>;
  onChange: React.ChangeEvent<HTMLInputElement, HTMLInputElement>;
  value: string;
  id: string;
  active: boolean;
}) {
  if (!active) return null;

  return (
    <fieldset
      style={{
        padding: "2rem",
        marginBottom: "1rem",
        border: "2px solid #eee",
      }}
    >
      <legend style={{ fontWeight: "bold" }}>{pergunta}</legend>
      {options.map((option) => {
        return (
          <label
            key={option}
            style={{
              marginBottom: "1rem",
              fontFamily: "monospace",
              display: "flex",
            }}
          >
            <input
              style={{ display: "flex", width: "auto" }}
              type="radio"
              id={id}
              checked={value === option}
              value={option}
              onChange={onChange}
            />
            {option}
          </label>
        );
      })}
    </fieldset>
  );
}

export default Radio;
