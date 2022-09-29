import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//routes import
import LobbyBiol from './components/biologia';
import LobbyHis from './components/historia';
import Tkanki from './components/routes/tkanki';
import Laczna from './components/routes/tkankaLaczna';
import Nerwowa from './components/routes/tkankaNerwowa';
import Nablonkowa from './components/routes/tkankaNablonkowa';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
      <Route path='/biologia' element={<LobbyBiol />}/>
      <Route path='/biologia/tkanki-zwierzece' element={<Tkanki />} />
      <Route path='/biologia/tkanki-zwierzece/laczna' element={<Laczna />} />
      <Route path='/biologia/tkanki-zwierzece/nerwowa' element={<Nerwowa />} />
      <Route path='/biologia/tkanki-zwierzece/nablonkowa' element={<Nablonkowa />} />
      <Route path='/historia' element={<LobbyHis />} />
        <Route path="*" element={
          <main style={{ padding: "1rem" }}>
            <p>Coś poszło nie tak...</p>
            <br/>
            <p>Tylko co...</p>
          </main>
        }
    />  
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();