import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ModalZap.css";

const Modal = ({ onClose }) => {
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [datRodj, setDatRodj] = useState("");
  const [slika, setSLika] = useState("");
  const [pozicija, setPozicija] = useState("");
  const [pozicije, setPozicije] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/db");
      const data = await response.json();
      const types = data.type.map((type) => type.type_name);
      setPozicije(types);
    };
    fetchData();
  }, []);

  const handleDodajZaposlenog = async () => {
    const pozicijaId = pozicije.find((p) => p === pozicija)?.id || 0;
    const newEmployee = {
      first_name: ime,
      last_name: prezime,
      date_of_birth: datRodj,
      id_type_position: pozicijaId,
      image: slika,
    };
    await axios.post("http://localhost:3000/employs", newEmployee);
    onClose();
  };

  return (
    <div className="modal-content">
      <div className="kontejner">

        <h1>Unesi neophodne podatke</h1>

        <div className="inside">
          <label className="labela">Ime: </label>
          <input type="text" className="inpPolje" value={ime} onChange={(e) => setIme(e.target.value)}/>
        </div>

        <div className="inside">
          <label className="labela">Prezime: </label>
          <input type="text" className="inpPolje" value={prezime} onChange={(e) => setPrezime(e.target.value)}/>
        </div>

        <div className="inside">
          <label className="labela">Datum rođenja: </label>
          <input type="date" className="inpPolje" value={datRodj} onChange={(e) => setDatRodj(e.target.value)}/>
        </div>

        <div className="inside">
          <label className="labela">Pozicija: </label>
          <select className="inpPolje" value={pozicija} onChange={(e) => setPozicija(e.target.value)}>
            {pozicije.map((pozicija) => (
              <option key={pozicija} value={pozicija}>
                {pozicija}
              </option>
            ))}
          </select>
        </div>

        <div className="inside">
          <label className="labela">Slika: </label>
          <input type="text" className="inpPolje" value={slika} onChange={(e) => setSLika(e.target.value)}/>
        </div>

        <button onClick={handleDodajZaposlenog}>Dodaj</button>
        <button onClick={onClose}>Odustani</button>
      </div>
    </div>
  );
};

export default Modal;
