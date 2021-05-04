import Article from "./Article";

const Cart = ({ articles, setArticles }) => {
  console.log("Cart:", articles);

  const articlesList = articles.map((article, index) => {
    return (
      <Article
        key={article.id}
        index={index}
        article={article}
        articles={articles}
        setArticles={setArticles}
      />
    );
  });
  return (
    <div className="basket">
      <button>Valider mon panier</button>
      {articlesList}
    </div>
  );
};

export default Cart;
