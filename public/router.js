import Producten from './components/Producten'
import Bestelijst from './components/Bestellijst'
import {Route} from "react-router-dom";

export default (
    <Route path="/">
        <Route path="producten" component={Producten}/>
        <Route path="bestellijst" component={Bestelijst}/>
    </Route>
)