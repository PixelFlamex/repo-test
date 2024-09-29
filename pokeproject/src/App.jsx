import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import PokeInfo from './Components/PokeInfo';


function App() {
  const [Pokelist, setPokeList] = useState([])

  useEffect(() => {
    getPokeList();
  },[])

    async function getPokeList() {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=286&limit=12`);
        if (!res) {
            return "no response try again later";
        }
        const { data } = res;
        if (!res.data) {
          return alert("no response")
        }
        const {results} = data
        console.log(results)
        setPokeList(results)
        return data;
    } catch (error) {
        console.log(error);
    }

    console.log (getPokeList())
}
var sprite = 0
  function getRandom() {
    console.log(Pokelist[0])
    sprite = Pokelist[0]
  }

  return (
    <>
     <button onClick={getRandom}>poke</button>
      <div className='pokeContainer'>

      {Pokelist || Pokelist.length > 0
                    ? Pokelist.map((Pokemon,i) => {
                        const { _id } = Pokemon;
                        return (
                            <PokeInfo
                                index={i}
                                key={i}
                            ></PokeInfo>
                        );
                    }): null}
        
      </div>

    </>
  )
}

export default App
/*i could not get the types because in the "path" to reach it in the json,there was an array called 0,which gave me an error when trying to destructure it*/
