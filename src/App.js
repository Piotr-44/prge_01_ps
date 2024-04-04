import "./App.css";

const lista_uzytkownkow = [
  { imie: "Szymon" },
  { imie: "Piotr" },
  { imie: "Ola" },
  { imie: "Wojtek" },
];
console.log(lista_uzytkownkow);

function App() {
  return (
    <div className="App">
      {lista_uzytkownkow.map((zolnierz) => {
        return <div>{zolnierz.imie}</div>;
      })}
    </div>
  );
}

export default App;
