import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    const allContacts = await readContacts().then((data) => data);
    // console.log(allContacts.length);
    return allContacts.length;
};

console.log(await countContacts());
