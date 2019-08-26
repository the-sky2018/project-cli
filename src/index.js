import './css/index.scss'

function component() {
  var element = document.createElement('div');


  element.innerHTML = 'Hello webpack4 + 有没有变化';

  

  return element;
}

document.body.appendChild(component());