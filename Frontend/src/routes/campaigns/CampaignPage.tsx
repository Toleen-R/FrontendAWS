'use client';  // Detta kan vara nödvändigt om du har interaktiva element, särskilt i Next.js där komponenter körs både på servern och klienten.

import CampaignsPageComponent from "@/components/campaigns-page";  // Importerar en komponent som troligtvis visar kampanjer på sidan.

export function CampaignPage() {
    return (
        <main className="justify-center items-center">  // Wrapper för centrering av innehållet.
            <CampaignsPageComponent />  // Renderar den importerade komponenten som visar kampanjer.
        </main>
    );
}
