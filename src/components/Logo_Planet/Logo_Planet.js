import '../../styles/components/_logo_planet.scss'

import Logo from '../../images/logo.svg';
import Animated_Logo from '../Animated_Logo/Animated_Logo';

export default function Logo_Planet(props) {

  const cardMovement = (e) => {
    let orbit = document.querySelector('#orbit');
    let target = document.querySelector('#target');

    if(orbit != null && e.target.id == "orbit") {
      const coordBox = orbit.getBoundingClientRect();
      const centerPointX = coordBox.x + coordBox.width / 2;
      const centerPointY = coordBox.y + coordBox.height / 2;
  
      const maxRotation = 20;
      
      //Y rotation
      const rotationFactorY = maxRotation / (coordBox.width / 2);
      const yRotation = Math.ceil( (e.clientX - centerPointX) * rotationFactorY );
      
      //X rotation
      const rotationFactorX = maxRotation / (coordBox.height / 2);
      const xRotation = -1 * Math.ceil( (e.clientY - centerPointY) * rotationFactorX );
  
      let limits = 40

      if(yRotation > -limits && yRotation < limits && xRotation > -limits && xRotation < limits)
        target.style.cssText = `transform: rotateY(${yRotation}deg) rotateX(${xRotation}deg);`;
    }
  }
  const cardMovementStop = (e) => {
    let target = document.querySelector('#target');

    if(e.target.id == "orbit")
      target.style.cssText = `transform: rotateY(0deg) rotateX(0deg);`;  
  }
  
  document.addEventListener('mousemove', cardMovement);
  document.addEventListener('mouseout', cardMovementStop);

  return (
    <main className="logo_planet">
      <div className="logo-container" id="orbit">
        <div className="first-layer">
          <div className="second-layer">
            <div className="orbit purple" />
            <div className="orbit cyan" />
            <div className="orbit red" />
            <div className="orbit blue" />
            <div className="orbit yellow" />
            {
              props.basic?
                <img src={Logo} alt="" className="logo" />
              :
                <Animated_Logo />
            }
            
            
          </div>
        </div>
      </div>
    </main>
  );
}