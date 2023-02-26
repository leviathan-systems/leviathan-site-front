import './styles/global.scss';

import Home from './pages/Home';


function scrollTo(id) {    
  let element = document.querySelector(id);
  let margin = 100;

  let pos = element.offsetTop - margin;

  window.scrollTo(0, pos);
}

export default function App() {
  
	return <Home />;
}
