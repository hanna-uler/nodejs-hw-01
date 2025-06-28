import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
await readContacts()
        .then((data) => {
            // console.log(data);
            const newContact = createFakeContact();
            data.push(newContact);
            // console.log("updContsData: ", data);
            return data;
        })
        .then(async (data) => {
            await writeContacts(data);
        });
};

addOneContact();
