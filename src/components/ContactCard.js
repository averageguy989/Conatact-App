function ContactCard({ name, email, phone }) {
    return (
      <div className="p-4 border rounded-lg shadow-sm bg-white">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p>{email}</p>
        <p className="text-gray-500">{phone}</p>
      </div>
    );
  }
  
export default ContactCard;
  