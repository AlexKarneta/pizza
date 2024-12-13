import "./App.css";
import "./scss/app.scss";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";

function App() {
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
            <PizzaBlock title="Чизбургер-пицца" price={500} />
            <PizzaBlock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
