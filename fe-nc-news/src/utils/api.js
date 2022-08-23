const { default: axios } = require("axios");

exports.fetchAllArticleData = async () => {
  const fetched = await fetch(
    "https://mooses-backend-news-project.herokuapp.com/api/articles"
  );
  const parsedFetch = fetched.json();
  return parsedFetch;
};

exports.fetchArticleDataByTopic = async (topic) => {
  const fetched = await fetch(
    `https://mooses-backend-news-project.herokuapp.com/api/articles?topic=${topic}`
  );
  const parsedFetch = fetched.json();
  return parsedFetch;
};

exports.fetchArticlePageById = async (article_id) => {
  const fetched = await fetch(
    `https://mooses-backend-news-project.herokuapp.com/api/articles/${article_id}`
  );
  const parsedFetch = fetched.json();
  return parsedFetch;
};

exports.patchVotesInArticleInc = async (article_id) => {
  await axios.patch(
    `https://mooses-backend-news-project.herokuapp.com/api/articles/${article_id}`,
    {
      inc_votes: 1,
    }
  );
};

exports.patchVotesInArticleDec = async (article_id) => {
  await axios.patch(
    `https://mooses-backend-news-project.herokuapp.com/api/articles/${article_id}`,
    {
      inc_votes: -1,
    }
  );
};
