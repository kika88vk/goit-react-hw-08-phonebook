import React from 'react';
import css from './HomePage.module.css';
import picture from '../images/—Pngtree—business phone book_8500179.png';

const HomePage = () => {
  return (
    <div className={css.home}>
      <div className={css.homeWrap}>
        <img src={picture} alt="Phonebook" width={450} className={css.image} />
        <h1 className={css.homeText}>Phone book</h1>
      </div>
    </div>
  );
};

export default HomePage;
