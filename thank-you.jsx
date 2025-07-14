import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function ThankYou() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ticketType = params.get("ticket") || "General";
    const buyerId = Date.now();
    const fileName = `${ticketType.replace(/\s/g, "_")}_${buyerId}.txt`;
    const fileContent = `🎟️ Ticket Confirmation\n\nTicket Type: ${ticketType}\nTicket ID: ${buyerId}\nHolder: Guest\nThank you for your support!`;

    const blob = new Blob([fileContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6 text-center">
      <motion.h1
        className="text-4xl font-bold text-green-700 mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        🎉 Thank You for Your Payment!
      </motion.h1>
      <motion.p
        className="text-lg mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Your ticket has been downloaded. We appreciate your support!
      </motion.p>
      <motion.a
        href="https://wa.me/message/5C4HVBPPFLJSI1"
        target="_blank"
        rel="noreferrer"
        className="bg-green-600 text-white py-2 px-4 rounded-full text-lg hover:bg-green-700 mt-4"
        whileHover={{ scale: 1.1 }}
      >
        👉 Join WhatsApp Group
      </motion.a>
    </div>
  );
}
