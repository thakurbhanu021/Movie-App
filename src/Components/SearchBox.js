import React from "react";

const SearchBox = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        type="text"
        placeholder="Type to search movies..."
        value={props.value}
        onChange={(event)=> props.setSearchValue(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
