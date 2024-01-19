import { CoffeeCard } from "./CoffeeCard";
import "./App.css";
import { LineSVG } from "../assets/Vector";
import { useState, useEffect } from "react";

function App() {
  const [isSelectedAll, setIsSelectedAll] = useState(true);
  const [isSelectedAva, setIsSelectedAva] = useState(false);
  const [coffeeList, setCoffeeList] = useState([]);
  const [done, setDone] = useState(false);

  const url =
    "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";

  useEffect(() => {
    async function fetchCoffeeList() {
      return await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setCoffeeList(data);
          setDone(true);
        })
        .catch((error) => {
          setDone(false);
          console.log(error);
        });
    }
    fetchCoffeeList();
  }, []);

  const handleClickAll = (e) => {
    setIsSelectedAll(true);
    setIsSelectedAva(false);
  };
  const handleClickAva = (e) => {
    setIsSelectedAll(false);
    setIsSelectedAva(true);
  };

  return (
    <>
      <main>
        <section className="coffee-menu">
          <section className="introduction headings">
            <div className="span-line" >
              <LineSVG />
            </div>
            <h1 className="headings-h1">Our Collection</h1>
            <p className="headings-paragraph">
              Introducing our Coffee Collection, a selection of unique coffees
              from different roast types and origins, expertly roasted in small
              batches and shipped fresh weekly.
            </p>
            <span className="first-line">
              <button
                onClick={handleClickAll}
                className={`button ${isSelectedAll ? "is-selected" : ""}`}
              >
                All Products
              </button>
              <button
                onClick={handleClickAva}
                className={`button ${isSelectedAva ? "is-selected" : ""}`}
              >
                Available Now
              </button>
            </span>
          </section>

          <section className="coffee-list">
            <div className="grid-template">
              {done &&
                (isSelectedAll
                  ? coffeeList.map((coffee) => (
                      <CoffeeCard {...coffee} key={coffee.id} />
                    ))
                  : coffeeList
                      .filter((coffee) => coffee.available)
                      .map((coffee) => (
                        <CoffeeCard {...coffee} key={coffee.id} />
                      )))}
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
