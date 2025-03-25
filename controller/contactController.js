import Contact from "../modals/contact.js";

export const postContact = async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    const contactObj = {
      name,
      email,
      subject,
      message,
    };
    const newContact = new Contact(contactObj);

    await newContact.save();
    res.status(201).send({ message: "Contact successful!" });
  } catch (err) {
    res.status(500).send({ message: "Error " });
  }
};
export const getContact = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};
