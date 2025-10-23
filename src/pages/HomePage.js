import { useState } from "react";
import ContactList from "../components/ContactList";
import SearchBar from "../components/SearchBar";
import AddContactForm from "../components/AddContactForm";

function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Contact List</h1>
      <SearchBar value={search} onChange={setSearch} />
      <AddContactForm />
      <ContactList search={search}/>
    </div>
  );
}

export default HomePage;
