import "./Card.css";

/**
 * Reusable Card
 * @param {string}    title        - card title
 * @param {string}    description  - card text
 * @param {string}    image        - optional image URL
 * @param {ReactNode} children     - optional nested content
 */
function Card({ title, description, image, children }) {
  return (
    <article className="card">
      {image && <img className="card-image" src={image} alt={title} />}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        {children && <div className="card-extra">{children}</div>}
      </div>
    </article>
  );
}

export default Card;
