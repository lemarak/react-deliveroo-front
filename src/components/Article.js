import Counter from "./Counter";

const Article = ({ article, index, articles, setArticles }) => {
  return (
    <div className="article">
      <Counter
        article={article}
        index={index}
        articles={articles}
        setArticles={setArticles}
      />
      <div className="detail-article">
        <div>{article.title}</div>
        <span>
          {Number(
            (article.price * article.qt).toFixed(2)
          ).toLocaleString("fr-FR", { minimumFractionDigits: 2 })}{" "}
          €
        </span>
      </div>
    </div>
  );
};

export default Article;
