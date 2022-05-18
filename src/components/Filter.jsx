import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAll,
  filter,
  getcategories,
  getcategory,
} from "../redux/actions/actions";
import { exitloader, startloader } from "../redux/actions/loading";

function Filter() {
  const categories = useSelector((state) => state.product.categories);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getcate = async () => {
      await dispatch(getcategories());
    };

    getcate();
  }, []);

  const getCategory = async (value) => {
    dispatch(startloader());
    if (value === "/") {
      await dispatch(fetchAll());
    } else {
      await dispatch(getcategory(value));
    }
    dispatch(exitloader());

  };

  const onClick = () => {
    dispatch(filter(search))
    setSearch('')
  }

  return (
    <div className="ui container">
      <div className="filter">
        <div className="ui big action  input search-div">
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            placeholder="Search..."
          />
          <button
            onClick={() => onClick()}
            className="ui green button"
          >
            Search
          </button>
        </div>
        <div className="big input ui">
          <select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="ui compact  selection dropdown"
            onClick={(e) => getCategory(e.target.value)}
          >
            <option value="/">All</option>
            {categories.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;
