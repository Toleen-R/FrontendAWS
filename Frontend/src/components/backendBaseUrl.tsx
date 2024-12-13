// Definierar miljön för applikationen. 
// Kommentarad kod visar att miljön kunde ha kommit från import.meta.env variabeln för miljöhantering.
// const environment = import.meta.env.REACT_APP_ENVIRONMENT;

// visar att applikationen körs i produktionsmiljö.
const environment = "prod";

// Deklarerar en variabel som ska innehålla bas-URL:en för backend.
let backendBaseUrl = "";

// Kontrollera vilken miljö som är aktiv för att tilldela korrekt backend-URL.
if (environment === "prod") {
  // Om miljön är "prod", används URL:en till backend som är distribuerad på Vercel.
  backendBaseUrl =
    "https://backend-qbb3iu3sv-davidheidari2-gmailcoms-projects.vercel.app";
} else {
  // Om miljön inte är "prod" (t.ex. utvecklingsmiljö), används localhost som backend-URL.
  backendBaseUrl = "http://localhost:3000";
}

// Exporterar backendBaseUrl så att andra filer i applikationen kan använda den.
export default backendBaseUrl;
