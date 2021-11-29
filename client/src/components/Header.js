import React from 'react';

export default function Header(props) {

  return (
    <header className="block row center">
      <div>
        <a href="/">
          <h1>Roses Sales Point</h1>
        </a>
      </div>
      <div>
        <a href="/">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <div>
          <button className="button">
            Go to Dashboard
          </button>
        </div>
      </div>
    </header>
  );
}

//onClick={() => { handleGoDashboard()}}