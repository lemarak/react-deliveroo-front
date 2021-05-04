import Article from "./Article";

const Cart = ({ articles, setArticles }) => {
  const shippingCost = 2.5;

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

  const subTotalCard = Number(
    articles
      .reduce((acc, article) => acc + parseFloat(article.price * article.qt), 0)
      .toFixed(2)
  );

  return (
    <div className="basket">
      {/* Button */}
      <button className={articles.length > 0 ? "active" : "inactive"}>
        Valider mon panier
      </button>
      {/* List articles */}
      {articlesList}
      {/* Total */}
      {articles.length > 0 ? (
        <div className="total">
          <div className="sous-total">
            <span>Sous-total</span>
            <span>
              {subTotalCard.toLocaleString("fr-FR", {
                minimumFractionDigits: 2,
              })}{" "}
              €
            </span>
          </div>
          <div className="sous-total">
            <span>Frais de livraison</span>
            <span>
              {Number(shippingCost.toFixed(2)).toLocaleString("fr-FR", {
                minimumFractionDigits: 2,
              })}{" "}
              €
            </span>
          </div>
          <div className="total-total">
            <span>Total</span>
            <span>
              {(subTotalCard + shippingCost).toLocaleString("fr-FR", {
                minimumFractionDigits: 2,
              })}{" "}
              €
            </span>
          </div>
        </div>
      ) : (
        <div className="empty">Votre panier est vide</div>
      )}
    </div>
  );
};

export default Cart;
