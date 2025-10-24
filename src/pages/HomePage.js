import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import HomeHeader from "../components/HomeHeader";
import ContactList from "../components/ContactList";
import SearchBar from "../components/SearchBar";
import AddContactForm from "../components/AddContactForm";
import AddContactButton from "../components/AddContactButton";

function HomePage() {
  const [search, setSearch] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);
  const [addcontact, setAddContact] = useState(false);

  const debouncedSearch = useDebounce(search, 400);

  
  const handleAddContact = (shouldRefresh) => {
    setAddContact(false);
    if (shouldRefresh) setRefreshKey(prev => prev + 1);
  };

  const handleChangeContact = () => {
    setAddContact(true);
  };


  return (
    <div className="min-h-screen bg-emerald-50 flex items-start justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 space-y-6 relative">
        <div className="sticky top-0 z-10 bg-white pb-3 flex flex-col " style={{ background: "inherit" }}>
          <HomeHeader />
          <SearchBar value={search} onChange={setSearch} />
        </div>
        <ContactList
          search={debouncedSearch}
          refreshKey={refreshKey}
        />
        <div className="sticky bottom-6 flex justify-end">
          {addcontact ? (
            <AddContactForm onAdd={handleAddContact}/>
          ) : (
            <AddContactButton onClick={handleChangeContact} />
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;

