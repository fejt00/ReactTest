import React from 'react';
import Zaposleni from './Zaposleni';
import classes from './ZaposleniList.module.css';

const ZaposleniList = (props) => {
    return (
      <ul className={classes['zap-list']}>
        {props.zap.length === 0 && <></>}
        {props.zap.map((zaposleni) => (
          <Zaposleni
            key={zaposleni.id}
            id={zaposleni.id}
            zaposleni={zaposleni}
          />
        ))}
      </ul>
    );
  };

export default ZaposleniList;