import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import AQICard from "./components/AQICard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-5xl mx-auto p-6">

        <SearchBar />

        <AQICard />

      </div>

    </div>
  );
}

export default App;
