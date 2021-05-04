import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Counter = ({ article, index, articles, setArticles }) => {
  const updateQty = (operator) => {
    const newArticles = [...articles];
    operator === "+" ? newArticles[index].qt++ : newArticles[index].qt--;
    if (newArticles[index].qt === 0) {
      newArticles.splice(index, 1);
    }
    setArticles(newArticles);
  };

  return (
    <div className="counter">
      <FontAwesomeIcon
        icon="minus-circle"
        className="icon"
        onClick={() => updateQty("-")}
      />
      <span>{article.qt}</span>
      <FontAwesomeIcon
        icon="plus-circle"
        className="icon"
        onClick={() => updateQty("+")}
      />
    </div>
  );
};

export default Counter;
