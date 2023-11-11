"use client"

import styles from './header.module.scss';

const Search = ({position}) => {
  return (
    <div className={`${styles.search} ${position==='top' ? styles.top: styles.bottom}`}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search..."
      />
      <button className={styles.searchBtn}>
        <i className="flaticon-magnifying-glass" />
      </button>
    </div>
  );
}

export default Search