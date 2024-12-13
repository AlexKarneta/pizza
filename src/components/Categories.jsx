import React from "react";

export default function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(2);
  const selectCategory = (item) => {
    setActiveIndex(item);
  };

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            onClick={() => selectCategory(index)}
            className={activeIndex === index ? "active" : ""}
          >
            {item}
          </li>
        ))}
        {/* <li
          onClick={() => selectCategory(0)}
          className={activeIndex === 0 ? "active" : ""}
        >
          Все
        </li> */}
      </ul>
    </div>
  );
}
