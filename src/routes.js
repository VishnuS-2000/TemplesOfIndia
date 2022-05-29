import {BrowserRouter as Router,Routes,Route,Switch} from "react-router-dom"

import { Home } from "./components/Home"
import { Detail } from "./components/Detail"
import {Error} from "./components/Error"

// Router & Routes

export default function Navigation(){

    return <Router>

<Routes>

       
        <Route path="/" element={<Home />}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="*" element={<Error/>}/>
        </Routes>


    
    </Router>
}
