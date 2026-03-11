"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import API from "../services/api";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/waitlist", { email });

      setMsg(res.data.message);
      setSuccess(true);
    } catch {
      setMsg("Error submitting email");
      setSuccess(false);
    }

    setEmail("");
  };

  return (
    <div className="flex flex-col items-center gap-3 relative">
      {/* EMAIL BOX */}
      {!success && (
        <form
          onSubmit={handleSubmit}
          className="flex items-center bg-black border rounded-lg px-4 py-2 transition-all duration-500 border-gray-400 shadow-[0_0_20px_rgba(34,211,238,0.6)]"
        >
          <input
            type="email"
            placeholder="Your community is waiting."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                e.target.form.requestSubmit();
              }
            }}
            enterKeyHint="send"
            required
            className="bg-transparent outline-none text-gray-300 w-72"
          />
        </form>
      )}

      {/* SUCCESS MESSAGE */}
      {success && (
        <motion.h2
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.8 }}
          className="text-[6vw] font-extrabold text-gray-600 tracking-tight text-center"
        >
          {/* THRYV */}
          <br />
          COMING SOON
        </motion.h2>
      )}

      <p className="text-gray-400 text-3xl">{msg}</p>
    </div>
  );
}
