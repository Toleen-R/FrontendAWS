import { MountainIcon } from 'lucide-react'; // Importerar ett ikonbibliotek för att visa ikoner.
import { Outlet } from 'react-router-dom'; // Outlet-komponent för att rendera de aktuella barnkomponenterna för rutter.
import { useContext } from 'react'; // Importerar React Hook för att använda kontext.
import { Link } from 'react-router-dom'; // Importerar Link-komponenten för navigering.
import { AuthContext } from './context/context'; // Importerar AuthContext för att få autentiseringstillstånd.

const Layout = () => {
    const { isLoggedIn } = useContext(AuthContext) as { isLoggedIn: boolean }; // Hämtar autentiseringstillståndet från AuthContext.

    return (
        <div className="layout">
            <header style={{ backgroundColor: '#3498db', color: 'white', padding: '1rem' }}>
                <div className="container mx-auto px-4 py-6 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2">
                        <MountainIcon className="h-6 w-6" /> {/* Visa en ikon i headern */}
                        <span className="text-lg font-semibold">Gbg Marketing</span> {/* Företagsnamn */}
                    </Link>
                    <div className="flex items-center gap-4">
                        {/* Visa olika länkar beroende på om användaren är inloggad eller inte */}
                        {!isLoggedIn && <>
                            <Link to="/login" className="text-sm font-medium hover:underline">Logga in</Link>
                            <Link to="/register" className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow">Registrera</Link>
                        </>}
                        {isLoggedIn && <>
                            <Link to="/campaign" className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow">Campaigns</Link>
                            <Link to="/logout" className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow">Logga ut</Link>
                        </>}
                    </div>
                </div>
            </header>

            <main>
                <Outlet /> {/* Här renderas de olika sidorna som användaren navigerar till */}
            </main>

            <footer style={{ backgroundColor: '#3498db', color: 'white', padding: '1rem', textAlign: 'center' }}>
                <p className="text-xs text-muted-foreground">&copy; 2024 Gbg Marketing. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout; // Exporterar Layout-komponenten


//Layout.tsx är en layoutkomponent som innehåller en header (med navigering) och en footer, samt en Outlet för att rendera de specifika sidorna som matchar användarens valda rutt.
//Användarens autentiseringstillstånd (isLoggedIn) styr vad som visas i navigationen: länkar för inloggning och registrering om de inte är inloggade, eller länkar för kampanjer och utloggning om de är inloggade.