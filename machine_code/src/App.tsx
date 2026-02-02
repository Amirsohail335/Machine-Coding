import "./App.css";
import Counter from "./components/projects/Counter";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex  flex-col">
      <header className="border-b py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">
            30 React Machine Coding Projects
          </h1>
        </div>
      </header>
      <main>
        <Counter />
      </main>
    </div>
  );
}

export default App;
