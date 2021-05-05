import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meals = ({ meals, articles, setArticles }) => {
  const updateCart = (meal) => {
    const newArticles = [...articles];
    const articleFound = newArticles.find((elem) => elem.id === meal.id);
    if (articleFound) {
      articleFound.qt++;
    } else {
      newArticles.push({
        id: meal.id,
        title: meal.title,
        qt: 1,
        price: meal.price,
      });
    }

    setArticles(newArticles);
  };

  const mealsList = meals.map((meal, index) => {
    return (
      <div
        key={meal.id}
        className="meal"
        onClick={() => {
          updateCart(meal);
        }}
      >
        <div className="meal-content">
          <h3>{meal.title}</h3>{" "}
          <div className="meal-descr">{meal.description}</div>
          <div className="price">
            <span>{meal.price} €</span>
            {meal.popular && (
              <span className="populaire">
                <FontAwesomeIcon icon="star" className="icon" /> Populaire
              </span>
            )}
          </div>
        </div>

        {meal.picture && (
          <img className="meal-img" src={meal.picture} alt={meal.title}></img>
        )}
      </div>
    );
  });
  return <div className="meals">{mealsList}</div>;
};

export default Meals;
