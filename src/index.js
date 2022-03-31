import _ from 'lodash'
import './style.css'
// import Icon from './notion-avatar.png'
import printMe from "./print";

function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.innerHTML = 'Hello Webpack'
  element.classList.add('hello')

  const btn = document.createElement('button')
  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = printMe
  element.appendChild(btn)
  // const img = document.createElement('img')
  // img.src = Icon
  // element.appendChild(img)
  return element;
}

document.body.appendChild(component());