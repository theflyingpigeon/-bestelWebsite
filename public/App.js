import "./App.css";
import {Link} from 'react-router-dom'

function App() {
    return (
        <ul>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/producten">Producten</Link></li>
            <li> <Link to="/bestellijst">Bestellijst</Link></li>
        </ul>
    );
}

export default App;