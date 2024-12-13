import * as React from "react";
// Importerar React för att använda komponenter och hooks.

import { cn } from "@/lib/utils";
// Importerar en funktion för att kombinera CSS-klasser dynamiskt.

// Huvudkomponenten för kortet
const Card = React.forwardRef<
  HTMLDivElement, // Typen på HTML-elementet som referensen pekar på (en <div> i detta fall).
  React.HTMLAttributes<HTMLDivElement> // Standardattribut för en <div>.
>(({ className, ...props }, ref) => (
  <div
    ref={ref} // Vidarebefordrar en referens för åtkomst till DOM-elementet.
    className={cn(
      "rounded-xl border border-zinc-200 bg-white text-zinc-950 shadow dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50", // Standardklasser för kortets utseende.
      className // Lägger till eventuella anpassade klasser från props.
    )}
    {...props} // Sprider övriga egenskaper till <div>.
  />
));
Card.displayName = "Card";
// Sätter ett displaynamn för bättre debugging och verktygskompatibilitet.

// Komponent för kortets header
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)} // Flexbox-layout för att organisera innehåll i headern.
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

// Komponent för kortets titel
const CardTitle = React.forwardRef<
  HTMLParagraphElement, // HTML-elementet som referensen pekar på (en <h3> i detta fall).
  React.HTMLAttributes<HTMLHeadingElement> // Standardattribut för en rubrik.
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)} // Stil för en rubrik: fetstil och tät radavstånd.
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

// Komponent för kortets beskrivning
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-zinc-500 dark:text-zinc-400", className)} // Stil för en beskrivning: liten text och subtil färg.
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

// Komponent för kortets innehåll
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6 pt-0", className)} // Padding runt innehållet, ingen padding överst.
    {...props}
  />
));
CardContent.displayName = "CardContent";

// Komponent för kortets footer
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)} // Footer med flexbox-layout och padding.
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// Exporterar alla komponenter för användning i andra delar av applikationen.
export {
  Card, // Huvudkortet.
  CardHeader, // Header-komponenten.
  CardFooter, // Footer-komponenten.
  CardTitle, // Titel-komponenten.
  CardDescription, // Beskrivnings-komponenten.
  CardContent, // Innehållskomponenten.
};
