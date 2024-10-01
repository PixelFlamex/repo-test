import React, {useEffect, useState} from "react";
import axios from 'axios';

function Statt(props) {
     
    const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins',
        params: {
          referenceCurrencyUuid: 'yhjMzLPhuIDl',
          timePeriod: '24h',
          tiers: '1',
          orderBy: 'marketCap',
          orderDirection: 'desc',
          limit: '10',
          offset: '0'
        },
        headers: {
          'x-rapidapi-key': '1b7667bf81mshee0bb8b83e7fc16p1c3384jsn73449a6865d5',
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
        }
      };





        const [Data, setData] = useState([])
        const [nom, setNom] = useState("")
        const [image, setImage] = useState("")
        const [ident, setIdent] = useState("")
        const [price, setPrice] = useState("")
        const {index} = props;
      
        useEffect(() => {
          getData()
        },[])
      
      
        async function getData() {            
          try {
            const response = await axios.request(options);
            console.log(index)
            const Statistic = response.data.data.coins[index]
            setData(Statistic)
            setNom(Statistic.name)
            setImage(Statistic.symbol)
            setIdent(Statistic.uuid)
            setPrice(Statistic.price)
            
            console.log(Data)
            
          } catch (error) {
            console.error(error);
          }
        }
        

    

    return (
        <>
        <h3>name: {nom}</h3><h3>symbol: {image}</h3><h3>id = {ident}</h3><h3>price = {price}</h3>
        <div>---------------------</div>
        
        
        
        </>
    )
}

export default Statt;