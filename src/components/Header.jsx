import logo from "/images/logo.svg";

function Header() {
  return (
    <header>
      <img src={logo} alt="Huddle logo" className="w-30" />
    </header>
  )
}

export default Header;