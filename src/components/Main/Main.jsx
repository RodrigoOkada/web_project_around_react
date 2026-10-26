import { useState } from "react";
import avatar from "../../images/profile-image.jpg";
import editIcon from "../../images/edit-image.png";
import addIcon from "../../images/add-image.png";
import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

export default function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "Novo Local", children: <NewCard /> };
  const editProfilePopup = {
    title: "Editar Perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = {
    title: "Alterar a foto do perfil",
    children: <EditAvatar />,
  };

  function handleOpenPopup(popupData) {
    setPopup(popupData);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__image-container"
          onClick={() => handleOpenPopup(editAvatarPopup)}
        >
          <img
            src={avatar}
            className="profile__image"
            alt="Foto de perfil do usuário"
          />
          <div className="profile__image-overlay">
            <img
              src={editIcon}
              alt="Ícone de lápis para editar a foto de perfil"
              className="profile__image-edit-icon"
            />
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__info-header">
            <h1 className="profile__info-name">Jacques Cousteau</h1>
            <button
              className="profile__info-edit"
              type="button"
              onClick={() => handleOpenPopup(editProfilePopup)}
            >
              <img
                className="profile__info-edit-image"
                src={editIcon}
                alt="Editar perfil"
              />
            </button>
          </div>
          <p className="profile__info-description">Explorador</p>
        </div>
        <button
          className="profile__info-add"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          <img
            className="profile__info-add-image"
            src={addIcon}
            alt="Adicionar novo local"
          />
        </button>
      </section>

      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              handleOpenPopup={handleOpenPopup}
            />
          ))}
        </ul>
      </section>

      {popup && (
        <Popup
          onClose={handleClosePopup}
          title={popup.title}
          className={popup.className}
        >
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
