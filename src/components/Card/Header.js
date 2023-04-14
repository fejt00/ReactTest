import React from 'react';
import logoSLika from '../../pics/LOGO-Oykos-Development-horizontalni-01.png';
import headerLinija from '../../pics/289-2892166_hec-edu-in-haryana-engineering-college-yamunanagar-blue.png';
import classes from './Header.module.css';

function Header() {
    return (<React.Fragment>
        <div className={classes.header}>
        <img src={logoSLika} alt="OYKOS LOGO" className={classes.pic}/>
        <span className={classes.naslov}>ZAPOSLENI</span>
        <div className={classes.headerRight}>
          <a className={classes.active} href="https://oykos.me/about">POČETNA</a>
        </div>
        <img src={headerLinija} className={classes.picHeader}/>
      </div>
    </React.Fragment>);
}

export default Header;