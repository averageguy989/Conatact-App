import ContactCard from "./ContactCard";
import { useEffect, useState } from "react";
import getContact from "../lib/api";

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchContacts = async () => {
        const data = await getContact();
        setContacts(data);
        setLoading(false);
    }
    fetchContacts();
  },[])

  if (loading) return <p>Loading contacts...</p>;

  if (contacts.length === 0) return <p>No contacts found..</p>;

  return (
    <div className="grid gap-4">
      {contacts.map((c) => (
        <ContactCard key={c.id} {...c} />
      ))}
    </div>
  );
}

export default ContactList;
