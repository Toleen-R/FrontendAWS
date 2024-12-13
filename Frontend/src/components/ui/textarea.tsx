import * as React from "react";
// Importerar hela React-biblioteket för att använda dess komponenter och funktionalitet.

import { cn } from "@/lib/utils";
// Importerar en hjälpfunktion för att hantera dynamiska klassnamn.

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
// Definierar gränssnittet för komponentens props, vilket utökar standardattributen för en `<textarea>`.

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    // Komponentens funktion definierar props och referens.
    return (
      <textarea
        className={cn(
          "flex min-h-[60px] w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300",
          className
        )}
        ref={ref}
        {...props}
      />
      // Renderar en `<textarea>`-tagg:
      // - Kombinerar klassnamn dynamiskt med `cn`.
      // - Använder `ref` för att referera till elementet.
      // - Sprider alla övriga props (`...props`) till `<textarea>`-elementet.
    );
  }
);

Textarea.displayName = "Textarea";
// Sätter ett display-namn för komponenten, vilket är användbart för utvecklingsverktyg och debug.

export { Textarea };
// Exporterar komponenten så att den kan användas i andra delar av applikationen.
