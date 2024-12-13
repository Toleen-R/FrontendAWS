import * as React from "react";
// Importerar React för att skapa komponenter och använda hooks.

import { cn } from "@/lib/utils";
// Importerar en utility-funktion som kombinerar CSS-klasser dynamiskt.

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}
// Definierar en typ `InputProps` som utökar standardattributen för ett HTML `<input>`-element. 
// Detta gör att komponenten kan acceptera alla vanliga `<input>`-attribut, t.ex. `placeholder`, `value`, `onChange`, etc.

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type} // Anger `type`-attributet (t.ex. "text", "password", "email", etc.).
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          // Standardklasser för att styla inputfältet, inkluderar:
          // - Flex för att anpassa storlek.
          // - Höjd och bredd för att skapa en responsiv design.
          // - Rundade hörn och skuggor för visuellt tilltalande element.
          // - Stöd för olika tillstånd: fokus (`focus-visible`), inaktiverad (`disabled`), och filuppladdning (`file`).
          className // Kombinerar dessa med eventuella extra klasser som skickas via `className`.
        )}
        ref={ref} // Vidarebefordrar en referens för att möjliggöra åtkomst till `<input>`-elementet från en förälderkomponent.
        {...props} // Sprider övriga egenskaper vidare till `<input>`, vilket gör komponenten flexibel och återanvändbar.
      />
    );
  }
);
Input.displayName = "Input";
// Sätter ett displaynamn för att göra det enklare att identifiera komponenten i React DevTools.

export { Input };
// Exporterar `Input`-komponenten för användning i andra delar av applikationen.
