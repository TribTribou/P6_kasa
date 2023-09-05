import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Home from './Pages/Home/';
import Apropos from './Pages/Apropos';
import DetailsPage from './Pages/DetailsPage';
import Error from './Pages/Error';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import reportWebVitals from './reportWebVitals';

const theme = {
  red: '#FF6060', // Définissez la couleur red dans le thème
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat';
    width: 90%;
    margin: 5%;
    a {
      text-decoration: none;
    }

    @media screen and (max-width: 767px) {
      width:100%;
      max-width:100%;
      margin:0;
      display:flex;
      justify-content:center;
    }
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Banner />
      <Routes>
        <Route path="/P6_kasa/" element={<Home />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/logement/:id" element={<DetailsPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
