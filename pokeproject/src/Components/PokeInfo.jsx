import React, {useEffect, useState} from "react";
import axios from 'axios';



function PokeInfo(props) {
    const {index,key} = props;
    const [Poke,setPoke] = useState("missingno")
    const [pokeSprite,setPokeSprite] = useState()
    

    useEffect(() => {
        getPoke()
    },[])
    async function getPoke() {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${index + 1}/`);
            if (!res) {
                return "no response try again later";
            }
            const { data } = res;
            if (!res.data) {
              return alert("no response")
            }
            const {name} = Poke
            
            setPoke(data)
            setPokeSprite(data.sprites.front_default)
            
            return data;
        } catch (error) {
            console.log(error);
        }
    
        
    }


    

    return (
        <>
        <h1>{Poke.name}</h1>
        <img src={pokeSprite}></img>
        
        
        
        </>
    )
}

export default PokeInfo;