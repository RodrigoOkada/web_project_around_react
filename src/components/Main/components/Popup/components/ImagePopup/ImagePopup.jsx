export default function ImagePopup(props) {
  const { name, link } = props.card;

  return (
    <>
      <img src={link} className="popup__image-enlarge" alt={name} />
      <p className="popup__image-title">{name}</p>
    </>
  );
}
