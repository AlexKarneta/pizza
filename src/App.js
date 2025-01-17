import "./App.css";
import "./scss/app.scss";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import React from "react";
import Ebobo from "./components/Ebobo";
import Skeleton from "./components/PizzaBlock/Skeleton";

function App() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(async () => {
    fetch("https://6763109317ec5852cae801bb.mockapi.io/items")
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(!isLoading);
      });
  }, []);

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
            {isLoading
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
          </div>
        </div>
      </div>
      {/* <Ebobo /> */}
    </div>
  );
}

export default App;
