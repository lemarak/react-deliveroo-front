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
      <div>{article.title}</div>
      <span>{article.price * article.qt}</span>
    </div>
  );
};

export default Article;
