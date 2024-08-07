import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
  const { id } = useParams();
  const articles = useSelector((state) => state.articleState.entries);
  const article = articles.find((article) => article.id.toString() === id);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default SingleArticle;
