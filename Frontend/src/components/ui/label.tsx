import * as React from "react";
// Importerar React för att kunna skapa komponenter.

import * as LabelPrimitive from "@radix-ui/react-label";
// Importerar Label-primitive-komponenten från Radix UI, som används för att skapa tillgängliga och flexibla etiketter för formulär.

import { cva, type VariantProps } from "class-variance-authority";
// Importerar `cva` för att hantera CSS-varianter och `VariantProps` för att definiera typ för dessa varianter.

import { cn } from "@/lib/utils";
// Importerar en utility-funktion för att kombinera CSS-klasser dynamiskt.

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
// Definierar standardstilar för etiketten:
// - `text-sm`: Sätter textstorleken till liten.
// - `font-medium`: Gör texten halvfet.
// - `leading-none`: Tar bort extra radavstånd.
// - `peer-disabled:*`: Hanterar tillståndet där en associerad formkontroll (peer) är inaktiverad. 
//   * `cursor-not-allowed`: Gör muspekaren till en förbjuden ikon.
//   * `opacity-70`: Sänker opaciteten för att signalera inaktivering.

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>, // Typ för referensen till det underliggande DOM-elementet.
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & // Alla standardprops från `LabelPrimitive.Root`.
    VariantProps<typeof labelVariants> // Möjlighet att hantera variant-specifika props.
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref} // Vidarebefordrar referensen för att ge föräldrakomponenter åtkomst till elementet.
    className={cn(labelVariants(), className)} // Kombinerar standardstilar och eventuella anpassade klasser som skickas via `className`.
    {...props} // Sprider övriga props till Label-primitive-komponenten.
  />
));
// `Label.displayName`: Tilldelar samma displaynamn som `LabelPrimitive.Root` för bättre debugging i React DevTools.
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
// Exporterar `Label`-komponenten för användning i andra delar av applikationen.
