import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home'
import Goalkeeper from './components/Positions/Goalkeeper'
import Defender from './components/Positions/Defender'
import Midfielder from './components/Positions/Midfielder'
import Attacker from './components/Positions/Attacker'
import Blog from './components/Blog/Blog'
import Technology from './components/Technology/Technology'

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path ='/' element = { <Home /> }/>
          <Route path ='goalkeeper' element = { <Goalkeeper /> }/>
          <Route path ='defender' element = { <Defender /> }/>
          <Route path ='midfielder' element = { <Midfielder /> }/>
          <Route path ='attacker' element = { <Attacker /> }/>
          <Route path ='blog' element = { <Blog /> }/>
          <Route path = 'tech' element = { <Technology />}/>

        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
