import React, { Component } from "react";

//components
import {Print} from "components/PrintData";
//constants
import { Titles , TitleArray } from "constants/const";
//style
import {Title , TitleStyle} from "constants/const";



class App extends Component {
   render() {
        return(
            <Print titles={Titles} data={TitleArray} />
        )
    }
}






export default App;