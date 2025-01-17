import React from "react";

export default function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);
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
            key={index}
            onClick={() => selectCategory(index)}
            className={activeIndex === index ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
