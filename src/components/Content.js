import Cart from "./Cart";
import Meals from "./Meals";

const Content = ({ categories, articles, setArticles }) => {
  const categoriesList = categories.map((cat, index) => {
    return (
      cat.meals.length > 0 && (
        <div key={index} className="category">
          <h2>{cat.name}</h2>
          <Meals meals={cat.meals}></Meals>
        </div>
      )
    );
  });

  return (
    <div className="content">
      <div className="content-sub">
        <div className="categories">{categoriesList}</div>
        <Cart articles={articles} setArticles={setArticles} />
      </div>
    </div>
  );
};

export default Content;
