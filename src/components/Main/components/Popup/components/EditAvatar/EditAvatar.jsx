export default function EditAvatar() {
  return (
    <form className="popup__form form popup__form-avatar" noValidate>
      <label className="popup__form-label">
        <input
          className="popup__form-input popup__form-input-avatar"
          placeholder="Link da imagem"
          id="avatar-link"
          name="avatar"
          type="url"
          required
        />
        <span className="popup__form-error avatar-link-error"></span>
      </label>
      <button type="submit" className="popup__form-button">
        Salvar
      </button>
    </form>
  );
}
