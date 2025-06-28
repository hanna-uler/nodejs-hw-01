import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    const allContacts = await readContacts().then((data) => {
        // console.log(data);
        // console.log(data.length());
        // console.log(typeof data);
        return data;
    });
    return allContacts;

};

console.log(await getAllContacts());
