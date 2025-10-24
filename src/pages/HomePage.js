import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import ContactList from "../components/ContactList";
import SearchBar from "../components/SearchBar";
import AddContactForm from "../components/AddContactForm";

function HomePage() {
  const [search, setSearch] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);
  const debouncedSearch = useDebounce(search, 400);

  const handleAddContact = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-emerald-50 flex items-start justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 space-y-6">
        <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 flex items-center gap-3 justify-start">
            Contact List <span className="text-emerald-500">📇</span>
        </h1>
        <p className="text-left text-gray-500">
            Manage your contacts with style.
        </p>
        </div>

        <SearchBar value={search} onChange={setSearch} />
        <AddContactForm onAdd={handleAddContact} />
        <ContactList key={refreshKey} search={debouncedSearch} />
      </div>
    </div>
  );
}

export default HomePage;

