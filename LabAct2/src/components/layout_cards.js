import Card from "./card";
import "../styles/layout_card.css";
import { draftData } from "../data";
function Layout() {
  return (
    <div className="card-container">
      {draftData.map((card) => (
        <Card draftObj={card} />
      ))}
    </div>
  );
}

export default Layout;
