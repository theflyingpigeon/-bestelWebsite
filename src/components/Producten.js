import React, {useState} from 'react';
import Axios from 'axios';
import "../App.css";

function Producten() {
    const [naam, setNaam] = useState("")
    const [artikkelNummer, setArtikkelNummer] = useState(0)
    const [minimaleVoorraad, setMinimaleVoorraad] = useState(0)

    const [bestelList, setBestelList] = useState([]);
    const [newArtikkelNummer, setnewArtikkelNummer] = useState(0);
    const [newVoorraad, setNewVoorraad] = useState(0);
    const [newMinimaleVoorraad, setMinimaleNewVoorraad] = useState(0);

    const getProducten = () => {
        Axios.get('http://localhost:3001/moonen').then((response) => {
            setBestelList(response.data);
        })
    };

    const addItem = () => {
        Axios.post("http://localhost:3001/create", {
            Naam: naam,
            ArtikkelNummer: artikkelNummer,
            MinimaleVoorraad: minimaleVoorraad
        }).then(() => {
            setBestelList([
                ...bestelList,
                {
                    Naam: naam,
                    ArtikkelNummer: artikkelNummer,
                    MinimaleVoorraad: minimaleVoorraad,
                    ActueleVoorraad: 0
                },
            ]);
        });
    };

    const updateArtikkelNummer = (artikkelNummer) => {
        Axios.put('http://localhost:3001/updateArtikkelNummer', {
            artikkelnummer: newArtikkelNummer,
            Number: artikkelNummer
        }).then((response) => {
            setBestelList(
                bestelList.map((val) => {
                    return val.Artikelnummer === artikkelNummer
                        ? {
                            Naam: val.Naam,
                            Artikelnummer: newArtikkelNummer,
                            MinimaleVooraad: val.MinimaleVooraad,
                            ActueleVoorraad: val.ActueleVoorraad
                        }
                        : val;
                })
            );
        });
    };

    const updateVoorraad = (artikkelNummer) => {
        Axios.put('http://localhost:3001/updateVoorraad', {
            voorraad: newVoorraad,
            Number: artikkelNummer
        }).then((response) => {
            setBestelList(
                bestelList.map((val) => {
                    return val.Artikelnummer === artikkelNummer
                        ? {
                            Naam: val.Naam,
                            Artikelnummer: val.Artikelnummer,
                            MinimaleVooraad: val.MinimaleVooraad,
                            ActueleVoorraad: newVoorraad
                        }
                        : val;
                })
            );
        });
    };

    const updateMinimaleVoorraad = (artikkelNummer) => {
        Axios.put('http://localhost:3001/updateMinimaleVoorraad', {
            MinimaleVooraad: newMinimaleVoorraad,
            Number: artikkelNummer
        }).then((response) => {
            setBestelList(
                bestelList.map((val) => {
                    return val.Artikelnummer === artikkelNummer
                        ? {
                            Naam: val.Naam,
                            Artikelnummer: val.Artikelnummer,
                            MinimaleVooraad: newMinimaleVoorraad,
                            ActueleVoorraad: val.ActueleVoorraad
                        }
                        : val;
                })
            );
        });
    };

    const bestelAdvies = (minimaal, huidig) => {
        if (minimaal - huidig > 0) {
            return minimaal - huidig
        } else {
            return 0
        }
    };

    const deleteProduct = (artikkelNummer) => {
        Axios.delete('http://localhost:3001/delete/{artikkelNummer}', {
            ArtikkelNummer: artikkelNummer
        }).then((response) => {
            setBestelList(
                bestelList.filter((val) => {
                    return val.Artikelnummer !== artikkelNummer;
                })
            );
        });
    };


    return (
        <div className="layOut">
            <div className="Information">

                <div className="newProduct">
                    <label>Naam:</label>
                    <input
                        type="text"
                        onChange={(event) => {
                            setNaam(event.target.value);
                        }}
                    />

                    <label>Artikkelnummer:</label>
                    <input
                        type="number"
                        onChange={(event) => {
                            setArtikkelNummer(event.target.value);
                        }}
                    />

                    <label>Minimalevoorraad:</label>
                    <input
                        type="number"
                        onChange={(event) => {
                            setMinimaleVoorraad(event.target.value);
                        }}
                    />

                    <button onClick={addItem}>Voeg product toe</button>
                </div>

                <button onClick={getProducten}>Show producten</button>
                {bestelList.map((val, key) => {
                    return (
                        <div className="product">
                            <div>
                                <h3>Naam: {val.Naam}</h3>
                                <h3>Artikkelnummer: {val.Artikelnummer}</h3>
                                <h3>Minimale Voorraad: {val.MinimaleVooraad}</h3>
                                <h3>Actuele Voorraad: {val.ActueleVoorraad}</h3>
                                <h3>Bestel advies {bestelAdvies(val.MinimaleVooraad, val.ActueleVoorraad)}</h3>
                            </div>

                            <div className="ButtonStack">
                                <input
                                    type="text"
                                    placeholder="Verander artikkelnummer"
                                    onChange={(event) => {
                                        setnewArtikkelNummer(event.target.value);
                                    }}
                                />

                                <button onClick={() => {
                                    updateArtikkelNummer(val.Artikelnummer);
                                }}>Update artikkelnummer
                                </button>

                                <input
                                    type="text"
                                    placeholder="Verander Miniamale voorraad"
                                    onChange={(event) => {
                                        setMinimaleNewVoorraad(event.target.value);
                                    }}
                                />

                                <button onClick={() => {
                                    updateMinimaleVoorraad(val.Artikelnummer);
                                }}>Update minimalevoorraad
                                </button>

                                <input
                                    type="text"
                                    placeholder="Actuele voorraad"
                                    onChange={(event) => {
                                        setNewVoorraad(event.target.value);
                                    }}
                                />

                                <button onClick={() => {
                                    updateVoorraad(val.Artikelnummer);
                                }}>Update voorraad
                                </button>

                                <button onClick={() => {
                                    deleteProduct(val.Artikelnummer);
                                }}
                                >Verwijder product
                                </button>
                            </div>
                        </div>
                    );
                })
                }
            </div>
        </div>
    )
}

export default Producten