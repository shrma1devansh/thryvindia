const supabase = require("../config/supabaseClient");

exports.addEmail = async (req, res) => {
  const { email } = req.body;

  const { error } = await supabase.from("waitlist").insert([{ email }]);

  if (error) {
    return res.json({ message: "Email already registered" });
  }

  res.json({ message: "You are on the waitlist!" });
};
