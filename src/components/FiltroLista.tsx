import { useState } from "react";

interface Props {
    items: string[];
}

export default function FiltroLista({ items }: Props) {
    // COMPLETAR: Crea un estado para el texto del input


    // COMPLETAR: Crea un estado para el filtro


    // COMPLETAR: función para aplicar el filtro


    // COMPLETAR: Crea una variable que contenga los resultados filtrados

    return (
        <div style={{ maxWidth: 360, margin: "2rem auto", fontFamily: "system-ui, sans-serif" }}>
            <input
                type="text"
                // value={}
                // onChange={}
                placeholder="Escribe para filtrar..."
            />

            {/* Añade aquí un botón que llame a la función de aplciar filtro */}

            <ul>
                {/* Pinta aquí los resultados filtrados */}
            </ul>
        </div>
    );
}