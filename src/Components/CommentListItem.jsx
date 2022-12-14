const CommentsListItem = ({ comment, children }) => {
  return (
    <li className="Comments__li">
      <h3 className="Comments__li--author">User: {comment.author}</h3>
      <p className="Commnets__li--body">Said: "{comment.body}"</p>
      <time className="Comments__li--timestamp">On: {comment.created_at}</time>
      <h4 className="Comments__li--votes">Votes: {comment.votes}</h4>
      {children}
    </li>
  );
};

export default CommentsListItem;
