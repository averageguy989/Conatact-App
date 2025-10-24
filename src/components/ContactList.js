import ContactCard from "./ContactCard";
import { useEffect, useState } from "react";
import getContact from "../lib/api";
import { Mail, Phone, User } from "lucide-react";



function ContactList({ search, refreshKey }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      setLoading(true); 
      const data = await getContact(search);
      setTimeout(() => {
        setContacts(data);
        setLoading(false);
      }, 1700);
    };
    fetchContacts();
  }, [search, refreshKey]);


  if (contacts.length === 0) {
    return (
      <div className={`flex justify-start items-start min-h-[28rem] animate-slide-down`}>
        <p className="text-3xl">No contacts found..</p>
      </div>
    );
  }

  return (
    <div className="space-y-3 min-h-screen">
      <div className="relative">
        <div className={`space-y-3 transition-opacity duration-700 ${loading ? 'opacity-50' : 'opacity-100'}`}>
          {contacts.map((contact, i) => (
            <div
              key={contact.id}
              className={`flex gap-3 flex-row items-center p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all ${loading ? "animate-slide-up" : "animate-slide-down"}`}
              style={{ animationDelay: `${0}ms` }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-100 hover:h-[3.5em] hover:w-[3.5rem] duration-200 transition-all">
                <User className="w-6 h-6 text-emerald-500" />
              </div>
              <div className="flex flex-row items-center flex-1 justify-between">
                <div className="flex flex-col gap-1 ">
                  <p className="font-medium text-lg text-gray-800">{contact.name}</p>
                  <p className="text-gray-500 text-sm">{contact.phone}</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <Mail size={28} className="text-emerald-300 hover:text-emerald-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactList;
