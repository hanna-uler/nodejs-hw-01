import { readContacts } from "../utils/readContacts.js";

const generateContacts = async (number) => {
    const data = await readContacts();
    console.log("data: ", data, ", num: ", number);
};

generateContacts(5);
