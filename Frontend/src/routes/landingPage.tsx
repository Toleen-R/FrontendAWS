import { Home } from "@/components/home";  // Importerar Home-komponenten som antas vara en välkomstsida eller landningssida.

export const LandingPage = () => {
    return (
        <main className="justify-center items-center">  // Wrapper för centrering av innehållet.
            <Home />  // Renderar Home-komponenten på sidan.
        </main>
    );
};
