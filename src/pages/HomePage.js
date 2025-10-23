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
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Contact List</h1>
      <SearchBar value={search} onChange={setSearch} />
      <AddContactForm onAdd={handleAddContact} />
      <ContactList key={refreshKey} search={debouncedSearch} />
    </div>
  );
}

export default HomePage;

