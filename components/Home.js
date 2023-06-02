import React from "react";

import List from "./list";
import pins from "../assets/data/pins";

const Home = () =>{
    return (
        <List pins={pins}/>
    )
}

export default Home;