import RestaurantImg from "../img/header-image.jpg";

const Restaurant = ({ restaurant }) => {
  return (
    <div className="restaurant">
      <div className="restaurant-infos">
        <h1>{restaurant.name}</h1>
        <p className="restaurant-text">{restaurant.description}</p>
      </div>
      <img
        src={RestaurantImg}
        alt="Image du restaurant"
        className="restaurant-img"
      />
    </div>
  );
};

export default Restaurant;
