import React, { useState } from "react";
import Header from "./components/Card/Header";
import ZaposleniList from "./components/Zaposleni/ZaposleniList";
import axios from "axios";
import Modal from "./components/Card/ModalZap";
import "./App.css";

function App() {
  const [zaposleni, setZaposleni] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const fetchZaposlenogHandler = async () => {
    try {
      const [employs, type] = await Promise.all([
        axios.get("http://localhost:3000/employs"),
        axios.get("http://localhost:3000/type"),
      ]);
  
      setZaposleni(
        employs.data.map((emp) => ({
          ...emp,
          pozicija: type.data.find((p) => p.id === emp.id_type_position)
            .type_name,
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleDodajZaposlenogClick = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <>
    <div className="pozadina">
      <Header />
      <div className="pozadina">
        <section className="dugmePrikaz">
          
          <button onClick={fetchZaposlenogHandler}>PRIKAŽI ZAPOSLENE</button>
          <button onClick={handleDodajZaposlenogClick}>DODAJ ZAPOSLENOG</button>
          
          {modalVisible && (
            <div className="modal-background">
              <div className="modal-container">
                <Modal onClose={handleModalClose} />
              </div>
            </div>
          )}

        </section>
        
        <div>
          <ZaposleniList zap={zaposleni} />
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
