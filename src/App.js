import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';
const url = 'https://course-api.com/react-tours-project'

function App() {

  const[loading,setLoading] = useState(true)
  const[tours,setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async() => {
    setLoading(true)
    try
    {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    }
    catch(error)
    {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  },[])

  if(tours.length === 0)
  {
    return(
    <div>
      <h2>No tours left</h2>
      <button onClick={() => fetchTours()}>Refresh</button>
    </div>
  )
  }

  if(loading)
  {
    return(
      <div>
        <Loading />
      </div>
    )
  }
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}/>
    </div>
  );
}

export default App;
