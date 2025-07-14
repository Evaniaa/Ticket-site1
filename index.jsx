import React from "react";
import { motion } from "framer-motion";

const ticketOptions = [
  {
    id: 1,
    name: "Regular Ticket",
    price: 5000,
    description: "Access to all main events and exhibitions."
  },
  {
    id: 2,
    name: "Group Ticket (5 Persons)",
    price: 20000,
    description: "Discounted group ticket for 5 attendees."
  },
  {
    id: 3,
    name: "Support/Donate",
    price: null,
    description: "Make a voluntary donation to support our event."
  }
];

export default function Home() {
  const handleBuy = (ticket) => {
    if (ticket.price) {
      const ref = `${ticket.name.replace(/\s/g, "_")}_${Date.now()}`;
      alert(
        `Please make a bank transfer to:\n\n` +
        `Account Number: 8112140111\n` +
        `Account Name: Olajumoke Favour\n` +
        `Amount: ₦${ticket.price.toLocaleString()}\n` +
        `Reference: ${ref}\n\n` +
        `After payment, you will be redirected.`
      );
      window.location.href = `/thank-you?ticket=${encodeURIComponent(ticket.name)}`;
    } else {
      const amount = prompt("Enter amount you wish to donate (₦):");
      if (amount && !isNaN(amount)) {
        const ref = `Donation_${Date.now()}`;
        alert(
          `Please make a bank transfer to:\n\n` +
          `Account Number: 8112140111\n` +
          `Account Name: Olajumoke Favour\n` +
          `Amount: ₦${Number(amount).toLocaleString()}\n` +
          `Reference: ${ref}\n\n` +
          `After payment, you will be redirected.`
        );
        window.location.href = `/thank-you?ticket=Donation`;
      } else {
        alert("Invalid amount entered.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-100 to-blue-200 text-blue-900">
      <header className="py-8 bg-blue-800 text-white shadow">
        <h1 className="text-4xl font-bold text-center">🎟️ Get Your Tickets</h1>
        <p className="text-center mt-2 text-blue-100">Join us for an unforgettable experience!</p>
      </header>

      <main className="p-6">
        <motion.div
          className="grid gap-8 md:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {ticketOptions.map((ticket) => (
            <motion.div
              key={ticket.id}
              className="rounded-2xl shadow-lg bg-white p-6 hover:scale-105 transition transform border border-blue-200"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">{ticket.name}</h2>
              <p className="text-blue-700 mb-4">{ticket.description}</p>
              {ticket.price && (
                <p className="text-xl font-bold text-blue-800 mb-4">₦{ticket.price.toLocaleString()}</p>
              )}
              <button
                className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-900 w-full"
                onClick={() => handleBuy(ticket)}
              >
                {ticket.price ? "Buy Now" : "Donate"}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <footer className="text-center text-sm text-gray-600 mt-16 py-6 border-t">
        &copy; 2025 Olajumoke Favour | Powered by Ambrosia Events
      </footer>
    </div>
  );
}
