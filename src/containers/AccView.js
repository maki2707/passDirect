import React from "react";
import axios from "axios";
import Popup from "reactjs-popup"; //todo
import { authConfig } from "../actions/auth";
import { deleteUser } from "../actions/auth";

const AccView = () => {
    const [firstName, setFirstName] = React.useState("");
    const[lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    React.useEffect(() => {
        const fetchData = async () => {
          const response = await axios.get(`http://passdirect-backend.herokuapp.com/auth/users/me`, authConfig);
          setFirstName(response.data.ime);
          setLastName(response.data.prezime);
          setEmail(response.data.email);
        };
        fetchData();
      }, []);
    return (
    <div>
        <div className="content">
            <div className="accview-grid-container">
                <div className="accview-grid-item">Ime</div>
                <div className="accview-grid-item">{firstName}</div>
                <div className="accview-grid-item">Prezime</div>
                <div className="accview-grid-item">{lastName}</div>
                <div className="accview-grid-item">e-mail</div>
                <div className="accview-grid-item">{email}</div>
            </div>
            <div className="button-flex-container">
                <div className="button button-primary">
                    <a href="/account/edit">
                        Izmijeni podatke
                    </a>
                </div>
                <div className="button button-important">
                    <a href="/" onClick={deleteUser("sifra")}>
                        Obriši račun
                    </a>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AccView;