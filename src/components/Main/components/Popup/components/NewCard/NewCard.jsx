export default function NewCard() {
  return (
    <form className="popup__form form popup__form-local" noValidate>
      <label className="popup__form-label">
        <input
          className="popup__form-input popup__form-input-title"
          placeholder="Título"
          id="local-title"
          name="title"
          required
          minLength="2"
          maxLength="30"
        />
        <span className="popup__form-error local-title-error"></span>
      </label>
      <label className="popup__form-label">
        <input
          className="popup__form-input popup__form-input-link"
          placeholder="Link da imagem"
          id="local-link"
          name="link"
          type="url"
          required
        />
        <span className="popup__form-error local-link-error"></span>
      </label>
      <button type="submit" className="popup__form-button">
        Criar
      </button>
    </form>
  );
}
