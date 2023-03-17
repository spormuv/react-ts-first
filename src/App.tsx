import React, { createElement as e } from 'react';

function App() {
  // return <h1>Hello React!!!</h1>;
  return e('div', { className: 'container' }, [
    e('h1', { className: 'font-bold', key: 1 }, 'Test JSX'),
    e('button', { className: '', key: 2 }, 'click me'),
  ]);
}

export default App;
