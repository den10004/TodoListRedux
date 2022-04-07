import "../App.css";

function InputField({text, handleInput, handleSubmit}) {
  return (
    <label>
      <input className="inputField" value={text} onChange={(e) => handleInput(e.target.value)}></input>
      <button onClick={handleSubmit}>Добавить</button>
    </label>
  );
}

export default InputField;
