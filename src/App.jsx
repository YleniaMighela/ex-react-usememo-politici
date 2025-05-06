import { useState, useEffect } from 'react'
import './App.css'
import CardList from './components/CardList'


function App() {

  const [politici, setPolitici] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/politicians')
      .then(res => res.json())
      .then(data => setPolitici(data))
  }, [])
  // console.log(politici);

  return (

    <div className='container'>
      {politici.map(politico => (
        < CardList key={politico.id} politico={politico} />
      ))}
    </div>

  )
}

export default App
