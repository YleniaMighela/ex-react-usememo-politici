import { useState, useEffect, useMemo } from 'react'
import './App.css'
import CardList from './components/CardList'


function App() {

  const [politici, setPolitici] = useState([])

  const [cerca, setCerca] = useState("")

  useEffect(() => {
    fetch('http://localhost:5000/politicians')
      .then(res => res.json())
      .then(data => setPolitici(data))
  }, [])
  // console.log(politici);


  // funzione per cercare 
  const cercaPolitici = useMemo(() => {
    return politici.filter(p => p.name.toLowerCase().includes(cerca.toLowerCase())) ||
      p.biography.toLowerCase().includes(cerca.toLowerCase())
  }, [politici, cerca])



  return (
    <>
      <input type="text"
        placeholder='Cerca per nome o biografia..'
        value={cerca}
        onChange={e => setCerca(e.target.value)}

      />
      <div className='container'>


        {cercaPolitici.map(politico => (
          < CardList key={politico.id} politico={politico} />
        ))}
      </div>
    </>
  )
}

export default App
