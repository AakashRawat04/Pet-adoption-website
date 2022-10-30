const SearchParams = () => {
  const location = "itarsi, india";
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="loacation" value={location} placeholder="Location" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
