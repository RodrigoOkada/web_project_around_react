export default function EditProfile() {
  return (
    <form className="popup__form form popup__form-person" noValidate>
      <label className="popup__form-label">
        <input
          className="popup__form-input popup__form-input-name"
          placeholder="Seu nome"
          id="owner-name"
          name="name"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="popup__form-error owner-name-error"></span>
      </label>
      <label className="popup__form-label">
        <input
          className="popup__form-input popup__form-input-profession"
          placeholder="Sua profissão"
          id="owner-profession"
          name="profession"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="popup__form-error owner-profession-error"></span>
      </label>
      <button type="submit" className="popup__form-button">
        Salvar
      </button>
    </form>
  );
}
