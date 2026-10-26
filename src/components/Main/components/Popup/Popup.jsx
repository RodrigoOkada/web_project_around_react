import closeIcon from "../../../../images/Close.png";

export default function Popup(props) {
  // children é o conteúdo do popup
  const { onClose, title, className, children } = props;

  return (
    <div className={className ? `popup ${className}` : "popup"}>
      <div className={title ? "popup__content" : "popup__container"}>
        <button className="popup__button-close" type="button" onClick={onClose}>
          <img
            className="popup__button-close-image"
            src={closeIcon}
            alt="Fechar"
          />
        </button>
        {title && <h3 className="popup__title">{title}</h3>}
        {children}
      </div>
    </div>
  );
}
