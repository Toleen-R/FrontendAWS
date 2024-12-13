import { InputHTMLAttributes, forwardRef } from "react";
// Importerar nödvändiga typer och funktioner från React.

import { cn } from "@/lib/utils";
// Importerar en hjälpfunktion för att hantera CSS-klassnamn dynamiskt.

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string; // Valfri etikett för inmatningsfältet.
  error?: string; // Valfritt felmeddelande som visas under inmatningsfältet.
}
// Definierar props som komponenten kan ta emot. Den utökar standardegenskaper för HTML-inputfält.

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, ...props }, ref) => {
    // Komponentens huvudfunktion definierar dess props och referens.
    return (
      <div className="w-full">
        {/* Wrapper för inmatningsfältet och dess tillhörande etikett och felmeddelande. */}
        {label && (
          <label
            htmlFor={props.id}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
            {/* Renderar etiketten om `label` är tillgänglig. Binder etiketten till inmatningsfältet via `htmlFor`. */}
          </label>
        )}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500",
            className
          )}
          ref={ref}
          {...props}
        />
        {/* Renderar inmatningsfältet med dynamiska klassnamn. 
            `ref` används för att exponera DOM-elementet till föräldrakomponenten.
            Sprider resterande props (`...props`) till input-elementet. */}
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        {/* Om ett felmeddelande finns (`error`), renderas det som en paragraf under inmatningsfältet. */}
      </div>
    );
  }
);

Input.displayName = "Input";
// Sätter ett display-namn för komponenten, vilket är användbart i utvecklingsverktyg och felmeddelanden.

export default Input;
// Exporterar komponenten som standard, så att den kan användas i andra delar av applikationen.
