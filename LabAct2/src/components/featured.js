import Card from "./card";
import "../styles/layout_card.css";
import { draftData } from "../data";

function Featured() {
  // Filter the draftData to include only items with feature set to true
  const featuredCards = draftData.filter((card) => card.feature);

  return (
    <div className="card-container">
      {featuredCards.slice(0, 3).map((card) => (
        <Card draftObj={card} />
      ))}
    </div>
  );
}

export default Featured;
