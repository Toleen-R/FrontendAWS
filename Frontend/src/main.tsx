import { StrictMode } from 'react';  // Importerar StrictMode för att hjälpa till att upptäcka potentiella problem i appen under utveckling.
import { createRoot } from 'react-dom/client';  // Importerar createRoot för att rendera React-applikationen till DOM:en.
import { BrowserRouter } from 'react-router-dom';  // Importerar BrowserRouter för att aktivera klient-sidans routing i appen.
import App from './App.tsx';  // Importerar huvudkomponenten App.
import './index.css';  // Importerar den globala CSS-filen.

createRoot(document.getElementById('root')!).render(  // Skapar en root-React-komponent i HTML-elementet med id 'root'.
  <StrictMode>
    <BrowserRouter>  // Omsluter appen med BrowserRouter för att möjliggöra routing.
      <App />  // Renderar App-komponenten.
    </BrowserRouter>
  </StrictMode>,
);

//StrictMode: Omsluter hela appen i utvecklingsläge för att markera potentiella problem.
//BrowserRouter: Aktiverar klient-sidans routing med hjälp av webbläsarens URL, vilket gör att man kan navigera mellan olika sidor (som inloggning, registrering, kampanjer, etc.) baserat på URL:en.
//createRoot: Denna funktion används för att skapa ett root-element och rendera appen i det.
//Den här uppsättningen initierar React-applikationen och tillåter navigering mellan olika sidor med hjälp av React Router.