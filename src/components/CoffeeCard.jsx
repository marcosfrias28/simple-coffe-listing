import { StarSVG } from "../assets/star";
import { StarFillSVG } from "../assets/Star-fill";
import "./CoffeeCard.css";

export function CoffeeCard(prop) {
  const { id, name, image, price, rating, votes, popular, available } = prop;
  return (
    <>
      <div key={id} className="coffee-card">
        <picture>
          {popular && (
            <>
              <label className="absolute popular-label">Popular</label>
            </>
          )}
          <img className="image-card" src={image} alt={name} />
        </picture>
        <span className="name-price-line">
          <h1 className="name-card bold">{name}</h1>
          <label className="price">{price}</label>
        </span>
        <div className="star-rat-vote">
          <span>{votes > 0 ? <StarFillSVG /> : <StarSVG />}</span>
          <span className="bold">{rating}</span>
          <span className="votes">{`(${votes} votes)`}</span>
          <span className="sold-out">{!available ? "sold out" : ""}</span>
        </div>
      </div>
    </>
  );
}
