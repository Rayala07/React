const Search = ({ text, setText }) => {
  const inputHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="py-4">
      <input
        className="p-1 border border-white text-white"
        type="text"
        placeholder="Search"
        value={text}
        onChange={inputHandler}
      />
    </div>
  );
};

export default Search;
