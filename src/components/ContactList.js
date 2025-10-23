import ContactCard from "./ContactCard";

const dummyContacts = [
  { id: 1, name: "Alice Johnson", email: "alice@mail.com", phone: "123-456-7890" },
  { id: 2, name: "Bob Smith", email: "bob@mail.com", phone: "987-654-3210" },
];

function ContactList() {
  return (
    <div className="grid gap-4">
      {dummyContacts.map((c) => (
        <ContactCard key={c.id} {...c} />
      ))}
    </div>
  );
}

export default ContactList;
