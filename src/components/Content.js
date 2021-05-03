import Meals from "./Meals";

const Content = ({ categories }) => {
  const categoriesList = categories.map((cat, index) => {
    return (
      <div key={index} className="category">
        <h2>{cat.name}</h2>
        <Meals meals={cat.meals}></Meals>
      </div>
    );
  });
  return (
    <div className="content">
      <div className="content-sub">
        <div className="categories">{categoriesList}</div>{" "}
        <div className="basket">
          <h2>Panier</h2>
        </div>
      </div>
    </div>
  );
};

export default Content;
