import Card from "./card";
import "../styles/layout_card.css";
import { draftData } from "../data";
function Featured() {
  return (
    <div className="card-container">
      {/* {draftData.map((card) => (
        <Card draftObj={card} />
      ))} */}
      {draftData.slice(0, 3).map((card) => (
        <Card draftObj={card} />
      ))}
    </div>
  );
}

export default Featured;
