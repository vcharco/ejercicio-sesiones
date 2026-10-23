interface Props {
    items: string[];
}

export default function FiltroLista({ items }: Props) {
    // COMPLETAR: Crea un estado para el texto del input


    // COMPLETAR: Crea un estado para el filtro


    // COMPLETAR: función para aplicar el filtro


    // COMPLETAR: Función para limpiar el input y el filtro


    // COMPLETAR: Crea una variable que contenga los resultados filtrados

    return (
        <div style={{ maxWidth: 360, margin: "2rem auto", fontFamily: "system-ui, sans-serif" }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                <input
                    type="text"
                    // value={}
                    // onChange={}
                    placeholder="Escribe para filtrar..."
                    style={{ flex: 1, padding: "8px 10px" }}
                />
                {/* COMPLETAR: Botón para aplicar el filtro */}
                {/* COMPLETAR: Botón para limpiar el filtro */}
            </div>
        </div>
    );
}