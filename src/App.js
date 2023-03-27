import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Home, Edit } from './components';


function App() {
  return (
    <>
        <Router>
          <div className="App">
            <Navbar />
            <div className="content">
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/edit' element={<Edit />} />
              </Routes>
            </div>
          </div>
        </Router>
    </>
  );
}

export default App;