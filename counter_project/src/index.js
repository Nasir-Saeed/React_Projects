import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// function customRender(reactElement, container){
//   const domElement = document.createElement(reactElement.type);

//   domElement.innerHTML = reactElement.children

//   domElement.setAttribute('href', reactElement.props.href)
//   domElement.setAttribute('target', reactElement.props.target)

//   container.appendChild(domElement)

// }


// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com/',
//     target: '_target'
//   },
//   children: 'Visit to the Google'
// }

// const mainContainer = document.querySelector('#root');
// customRender(reactElement, mainContainer);