import {React, useEffect, useState} from "react";
import List from "../components/List";
import { useNhostClient } from "@nhost/react";
import { Alert } from "react-native";

const Home = () =>{

    const nhost = useNhostClient();

    const [pins, setPins] = useState([]);

    const fetchPins = async () => {
       const response = await nhost.graphql.request(`
        query Myquery{
            pins {
            created_at
            id
            image
            ingredients
            preparation
            title
            user_id
            }
        }
      `);
      
       if(response.error){
        Alert.alert("error fetching");
       } else {
        setPins(response.data.pins);
       }
    }

    useEffect(()=>{
        fetchPins();
    }, []);

    return (
        <List pins={pins}/>
    )
}

export default Home;