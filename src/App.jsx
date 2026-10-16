import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Table from "./components/Table";
import "./App.css";

const students = [
  { Name: "Ali", Age: 21, City: "Cairo" },
  { Name: "Sara", Age: 22, City: "Giza" },
  { Name: "Omar", Age: 20, City: "Alexandria" },
  { Name: "Mona", Age: 23, City: "Mansoura" },
];

const products = [
  { Product: "Keyboard", Price: "$45", Stock: 12 },
  { Product: "Mouse", Price: "$20", Stock: 30 },
  { Product: "Monitor", Price: "$160", Stock: 5 },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="app">
      <h1>Reusable Components in React</h1>

      {/* ---------- Button: same component, different props ---------- */}
      <section>
        <h2>Buttons</h2>
        <div className="row">
          <Button text={`Clicked ${count} times`} variant="primary" onClick={() => setCount(count + 1)} />
          <Button text="Reset" variant="secondary" onClick={() => setCount(0)} />
          <Button text="Delete" variant="danger" onClick={() => alert("Deleted!")} />
          <Button text="Unavailable" variant="primary" disabled />
        </div>
      </section>

      {/* ---------- Card: different data, one uses children ---------- */}
      <section>
        <h2>Cards</h2>
        <div className="grid">
          <Card
            title="Learn React"
            description="Components, props, and state are the building blocks of every React app."
            image="https://picsum.photos/id/180/600/320"
          />

          <Card
            title="Build Projects"
            description="Practice by building small apps and reusing your components."
          >
            {/* children: nested content passed inside the Card */}
            <Button text="Start" variant="primary" onClick={() => alert("Let's go!")} />
            <Button text="Later" variant="secondary" onClick={() => alert("Saved for later")} />
          </Card>

          <Card
            title="Notice"
            description="A card with no image and different nested content."
          >
            <Button text="Dismiss" variant="danger" onClick={() => alert("Dismissed")} />
          </Card>
        </div>
      </section>

      {/* ---------- Table: used twice with different data ---------- */}
      <section>
        <h2>Tables</h2>
        <h3>Students (striped)</h3>
        <Table columns={["Name", "Age", "City"]} data={students} striped />

        <h3>Products (not striped)</h3>
        <Table columns={["Product", "Price", "Stock"]} data={products} />
      </section>
    </main>
  );
}

export default App;
