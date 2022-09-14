import { useEffect, useState } from "react";
import Filters from "./components/Filters";
import JobItem from "./components/JobItem";
import data from "./data.json";

function App() {
  const [activeFilter, setActiveFilter] = useState([]);
  const [allData, setAllData] = useState(data);

  function handleFilter(e) {
    if (activeFilter.includes(e.target.value)) {
      setActiveFilter(activeFilter);
    } else {
      setActiveFilter((prevValue) => [...prevValue, e.target.value]);
    }
  }

  //function that gets called every time active filter changes
  function getFilteredItems() {
    //if there are no active filters, then we set allData to the original data imported from .json file
    if (!activeFilter) {
      setAllData(data);
    } else {
      const filteredItems = data.filter((item) => {
        const reqs = [item.role, item.level, ...item.languages, ...item.tools];
        return activeFilter.every((filt) => reqs.includes(filt));
      });
      setAllData(filteredItems);
    }
  }

  function handleRemoveFilter(currFilt) {
    if (activeFilter.length > 1) {
      setActiveFilter((prevValue) =>
        prevValue.filter((item) => item !== currFilt)
      );
    } else {
      setActiveFilter([]);
      setAllData(data);
    }
  }

  function handleClear() {
    setActiveFilter([]);
    setAllData(data);
  }

  useEffect(() => {
    getFilteredItems();
  }, [activeFilter]);

  const filterItems = activeFilter.map((filt) => (
    <Filters key={filt} filt={filt} handleRemoveFilter={handleRemoveFilter} />
  ));

  const jobItems = allData.map((item) => (
    <JobItem key={item.id} item={item} handleFilter={handleFilter} />
  ));

  return (
    <>
      <header></header>
      <main>
        {activeFilter[0] && (
          <div className="filters-holder">
            <div className="filters">{filterItems}</div>
            <div className="filters-clear">
              <button className="clear-button" onClick={handleClear}>
                Clear
              </button>
            </div>
          </div>
        )}
        <div className="jobs-list">{jobItems}</div>
      </main>

      <footer>
        <div class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/matijazinic">Matija Zinic</a>.
        </div>
      </footer>
    </>
  );
}

export default App;
