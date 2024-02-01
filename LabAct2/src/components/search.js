import "../styles/search.css";
function Search() {
  return (
    <div className="search_position">
      <div className="search">
        <form className="search__box" autocomplete="off">
          <input type="hidden" name="category"></input>
          <label for="search" className="search__label">
            hello.
          </label>
          <input
            type="text"
            className="search__bar"
            name="search"
            placeholder="looking for something? type it here."
          ></input>
        </form>
      </div>
    </div>
  );
}

export default Search;
