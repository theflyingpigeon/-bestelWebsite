import React, {useState} from "react";
import Axios from "axios";
import QRCode from 'react-qr-code'

function Bestelijst() {
    const [bestellijst, setBestelijst] = useState([])

    const getProducten = () => {
        Axios.get('http://localhost:3001/getData').then((response) => {
            setBestelijst(response.data);
        })
    };

    const bestelAdvies = (minimaal, huidig) => {
        if (minimaal - huidig > 0) {
            return minimaal - huidig;
        } else {
            return 0;
        }
    };

    return (


        <div className="test">
            <button onClick={getProducten}>laat de bestellijst zien</button>

            <br /><br /><br />

            <table>
                <tr>
                    <th>Naam</th>
                    <th>ArtikkelNummer</th>
                    <th>     </th>
                    <th>Bestel advies</th>
                    <th>Code</th>
                </tr>
                {bestellijst.map((val) => {
                    if (bestelAdvies(val.MinimaleVooraad, val.ActueleVoorraad) > 0) {
                        return (
                            <tr>
                                <td>{val.Naam}</td>
                                <td>{val.Artikelnummer}</td>
                                <td>     </td>
                                <td>{bestelAdvies(val.MinimaleVooraad, val.ActueleVoorraad)}</td>
                                <td><QRCode value={val.Artikelnummer.toString()} size={80} /></td>
                            </tr>
                        )
                    }
                })}
            </table>
        </div>

    )
}

export default Bestelijst