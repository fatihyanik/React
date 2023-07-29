const Form = ({ inputValue, setInputValue, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Add todo..."
      />
      <button type="submit"> Add todo</button>
    </form>
  );
};

export default Form;