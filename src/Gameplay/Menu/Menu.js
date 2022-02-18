import React from 'react';

const newGame = () => {
  alert('Starting new game!');
};

const menuOptions = [
  { title: 'New Game', action: () => newGame() },
  { title: 'Options' },
  { title: 'Credits' },
];

const Menu = () => {
  return menuOptions.map((opt) => (
    <div>
      <button class="outline" onClick={opt.action}>
        <p>{opt.title}</p>
      </button>
    </div>
  ));
};

export default Menu;
