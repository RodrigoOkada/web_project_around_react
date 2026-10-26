import trashIcon from "../../../../images/Trash.png";
import likeIcon from "../../../../images/Like.png";
import likeDarkIcon from "../../../../images/Like-dark.png";
import ImagePopup from "../Popup/components/ImagePopup/ImagePopup";
import RemoveCard from "../Popup/components/RemoveCard/RemoveCard";

export default function Card(props) {
  const { card, handleOpenPopup } = props;
  const { name, link, isLiked } = card;

  const imageComponent = { title: null, children: <ImagePopup card={card} /> };
  const removeCard = {
    title: "Você tem certeza?",
    className: "popup-confirm",
    children: <RemoveCard />,
  };

  return (
    <li className="card">
      <img
        src={link}
        className="card__image"
        alt={name}
        onClick={() => handleOpenPopup(imageComponent)}
      />
      <button
        className="card__trash-button"
        type="button"
        onClick={() => handleOpenPopup(removeCard)}
      >
        <img src={trashIcon} className="card__trash" alt="Excluir cartão" />
      </button>
      <div className="card__footer">
        <p className="card__title">{name}</p>
        <button className="card__button-like" type="button">
          <img
            src={isLiked ? likeDarkIcon : likeIcon}
            className="card__like-icon"
            alt={isLiked ? "Descurtir" : "Curtir"}
          />
        </button>
      </div>
    </li>
  );
}
