import React from "react";
// Importerar React för att kunna skapa en funktionell komponent.

interface LoginCheckboxProps {
  id: string; // ID för checkboxen, används för att länka `label` och `input`.
  label: string; // Text som visas bredvid checkboxen.
  checked: boolean; // Tillstånd för om checkboxen är markerad eller inte.
  onCheckedChange: (checked: boolean) => void; // Callback-funktion som anropas vid förändring av checkboxens tillstånd.
}
// Definierar props som komponenten förväntar sig med hjälp av en TypeScript-gränssnitt.

const LoginCheckbox: React.FC<LoginCheckboxProps> = ({
  id,
  label,
  checked,
  onCheckedChange,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      />
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};

export default LoginCheckbox;
// Exporterar komponenten så att den kan användas i andra delar av applikationen.
