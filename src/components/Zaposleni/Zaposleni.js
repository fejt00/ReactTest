import React from "react";
import KarticaCard from "../Card/KarticaCard";
import classes from "./Zaposleni.module.css";

function Zaposleni(props) {
  return (
    <KarticaCard>
      <li className={classes.zap}>
        <h2>Ime: {props.zaposleni.first_name}</h2>
        <h2>Prezime: {props.zaposleni.last_name}</h2>
        <h3>Datum rodjenja: {props.zaposleni.date_of_birth}</h3>
        <h3>Pozicija: {props.zaposleni.pozicija}</h3>
        <div className={classes.slikaKontejner}>
          <img
            src={props.zaposleni.image}
            alt={props.zaposleni.first_name}
            className={classes.slika}
          />
        </div>
      </li>
    </KarticaCard>
  );
}

export default Zaposleni;