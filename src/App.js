import "./App.css";
import "./scss/app.scss";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import pizzas from "./assets/pizza.json";
import { useEffect } from "react";

function App() {
  useEffect(
    () => (
      fetch("https://6763109317ec5852cae801bb.mockapi.io/items")
        .then((response) => response.json())
        .then((data) => console.log(data)),
      []
    )
  );

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
