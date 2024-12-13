import { SpecificCampaign } from "@/components/Specific-campaign";  // Importerar komponenten som visar detaljer om en specifik kampanj.

export function SpecificCampaignPage() {
    return (
        <main className="justify-center items-center">  // Wrapper för centrering av innehållet.
            <SpecificCampaign />  // Renderar den importerade komponenten som visar detaljer om en specifik kampanj.
        </main>
    );
}
