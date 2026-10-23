import FiltroLista from "./components/FiltroLista"

const ITEMS = [
  "Manzana",
  "Plátano",
  "Naranja",
  "Pera",
  "Fresa",
  "Melón",
  "Sandía",
  "Mandarina",
  "Uva",
  "Piña",
];

function App() {
  return (
    <FiltroLista items={ITEMS} />
  )
}

export default App
