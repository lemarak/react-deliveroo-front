import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meals = ({ meals, className }) => {
  const mealsList = meals.map((meal, index) => {
    return (
      <div key={meal.id} className="meal">
        <div className="meal-content">
          <h3>{meal.title}</h3>{" "}
          <div className="meal-descr">{meal.description}</div>
          <div className="price">
            <span>{meal.price} €</span>
            <span className="populaire">
              <FontAwesomeIcon icon="star" className="icon" /> Populaire
            </span>
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
