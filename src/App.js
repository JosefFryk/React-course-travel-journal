import Nav from './components/Nav'
import './App.css';
import DestinationCard from './components/DestinationCard';
import data from './data'

function App() {
  
  const cards =  data.map(item => {
    return (
      <div className="App">
      
        <DestinationCard 
            key = {item.id}
            {...item}
        />
      </div>
    );
  })
  

  return (
    <div className="navigator">
      <Nav />
      <section className='cardsBody'>
        {cards}
      </section>
    </div>
  )

}
export default App;
