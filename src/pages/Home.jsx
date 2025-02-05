import React from "react";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
export default function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const onClickCategory = (i) => setCategoryId(i);

  const [sortType, setSortType] = React.useState({
    name: "Популярности",
    sortProperty: "rating",
    sortToggle: "desc",
  });

  const onClickSort = (i) => {
    setSortType(i);
  };
  const category = categoryId > 0 ? `category=${categoryId}` : "";
  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://6763109317ec5852cae801bb.mockapi.io/items?${category}&sortBy=${sortType.sortProperty}&order=${sortType.sortToggle}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    console.log(sortType.sortToggle);
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} onClickCategory={onClickCategory} />
        <Sort sortType={sortType} onClickSort={onClickSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}
