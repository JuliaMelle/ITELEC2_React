import "../styles/card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  let memoClass;
  switch (props.draftObj.category) {
    case "friendship":
      memoClass = "friendship-memo";
      break;
    case "love":
      memoClass = "love-memo";
      break;
    case "sentimental":
      memoClass = "sentimental-memo";
      break;
    default:
      memoClass = "misc-memo";
  }

  return (
    <div className="card">
      <div classNameName="layout_card_column">
        <div className={memoClass}>
          <div className="layout_card">
            <p className="card__header__title">Receipt no.</p>
            <p className="card__header__number">{props.draftObj.receiptNo}</p>
          </div>
        </div>

        <div className="card__body" id="card">
          <p className="body__username">{props.draftObj.userName}</p>
          <p className="body__message">{props.draftObj.content}</p>
          <div className="read-more">
            read more{" "}
            <FontAwesomeIcon
              className="fa-chevron-right"
              icon={faChevronRight}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
