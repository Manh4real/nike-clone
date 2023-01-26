import React, { useState } from "react";

function PasswordInput({ first, validatePassword }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="input-ctn">
      <input
        value={input}
        onChange={handleChange}
        type="password"
        placeholder="Password"
        id="password-input"
        spellCheck={false}
      />
      {(!first || input) && validatePassword && validatePassword(input)}
    </div>
  );
}

export default PasswordInput;
