import { clsx, type ClassValue } from "clsx"; // Importera 'clsx' för att hantera dynamiska CSS-klasser
import { twMerge } from "tailwind-merge"; // Importera 'tailwind-merge' för att slå samman Tailwind CSS-klasser

// Funktion för att slå samman och hantera dynamiska klasser
export function cn(...inputs: ClassValue[]) {
  // 'clsx' används för att kombinera olika klassnamn baserat på villkor och returnerar en sammanhängande sträng med klasser
  // 'twMerge' slår samman eventuella duplicerade Tailwind-klasser för att ta bort konflikter och säkerställa rätt användning av klasser
  return twMerge(clsx(inputs)); // Kombinera clsx och twMerge för att få optimala CSS-klasser
}
