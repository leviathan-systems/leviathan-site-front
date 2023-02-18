import '../../styles/components/_logo_planet.scss'

import Logo from '../../images/logo.svg';

export default function Logo_Planet() {
  return (
    <main className="logo_planet">
      <div className="logo-container">
        <div className="first-layer">
          <div className="second-layer">
            <div className="orbit purple" />
            <div className="orbit cyan" />
            <div className="orbit red" />
            <div className="orbit blue" />
            <div className="orbit yellow" />
            <img src={Logo} alt="" className="logo" />
          </div>
        </div>
      </div>
    </main>
  );
}