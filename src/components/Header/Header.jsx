import logo from "../../images/logo.png";

export default function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        className="header__logo"
        alt="Logotipo do Around the U.S."
      />
      <hr className="header__line" />
    </header>
  );
}
