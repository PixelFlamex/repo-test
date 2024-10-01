import { useState,useEffect } from 'react'
import './App.css'
import  axios  from 'axios'
import Statt from './Components/Statt';


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


function App() {
  const [Data, setData] = useState([])
  

  useEffect(() => {
    getData()
  },[])


  async function getData() {
    try {
      const response = await axios.request(options);
      
      const Statistic = response.data.data.coins
      setData(Statistic)
      
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <>
    <div>
    {Data || Data.length > 0
                    ? Data.map((Coin,i) => {
                        const { _id } = Coin;
                        return (
                            <Statt
                                index={i}
                            ></Statt>
                        );
                    }): null}
    </div>
    </>
  )
}

export default App
