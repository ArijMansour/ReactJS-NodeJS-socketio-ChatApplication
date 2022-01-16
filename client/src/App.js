import React  from 'react' ; 
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom' ; 
import Join from './components/Join';
import Chat from './components/Chat';
/*const App=()=>(
    <Router>
        <Route path='/' exact component={Join}/>
        <Route path='/chat' exact component={Chat}/>
       
    </Router>
);*/

/************************ New Router setup V6  */
function App() {
    return (
      <Router>
        <div className="max-w-screen-md mx-auto pt-20">
          <Routes>
          <Route exact path='/' element={<Join />} />
         <Route path='/chat' element={<Chat/>} />
       
          </Routes>
        </div>
      </Router>
    )
  }

export default App ; 
