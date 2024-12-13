import { Routes, Route } from "react-router-dom"; // Importerar routing-komponenter från react-router-dom.
import { LoginPage } from "./routes/login/LoginPage"; // Importerar LoginPage-komponenten.
import { Register } from "./components/register"; // Importerar Register-komponenten.
import { CreateEmail } from "./routes/emails/CreateEmail"; // Importerar CreateEmail-komponenten.
import { SpecificCampaign } from "./components/Specific-campaign"; // Importerar komponent för specifik kampanj.
import { CampaignPage } from "./routes/campaigns/CampaignPage"; // Importerar CampaignPage-komponenten.
import { LandingPage } from "./routes/landingPage"; // Importerar LandingPage-komponenten.
import { GeneratedEmail } from "./routes/emails/GeneratedEmail"; // Importerar GeneratedEmail-komponenten.
import Layout from "./Layout"; // Importerar Layout-komponenten som omger alla sidor.
import { AuthProvider } from "./context/context"; // Importerar AuthProvider från context för hantering av autentisering.

function App() {
  return (
    <AuthProvider> {/* Wrappar hela appen i AuthProvider för autentisering */}
      <Routes> {/* Definierar alla rutter i appen */}
        <Route element={<Layout />}> {/* Huvudlayouten som omger alla sidor */}
          <Route path="/" element={<LandingPage />} /> {/* Landningssidan */}
          <Route path="/login" element={<LoginPage />} /> {/* Inloggningssidan */}
          <Route path="/register" element={<Register />} /> {/* Registreringssidan */}
          <Route path="/campaign" element={<CampaignPage />} /> {/* Kampanjsidan */}
          <Route path="/create-email" element={<CreateEmail />} /> {/* Sidan för att skapa e-post */}
          <Route path="/generated-email" element={<GeneratedEmail />} /> {/* Genererad e-post-sida */}
          <Route path="/campaign/:id" element={<SpecificCampaign />} /> {/* Sidan för specifik kampanj */}
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App; // Exporterar App-komponenten


//App.tsx hanterar routes och komponenter i appen, där varje rutt pekar till en specifik komponent (t.ex. inloggning, registrering, kampanjer).
// Authprovider används för att hantera autentisering och ge tillgång till autentiseringstillstånd i hela appen.