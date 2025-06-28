import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";


const generateContacts = async (number) => {
    await readContacts()
        .then((data) => {
            // console.log(data);
            let currContactsData = data;
            // console.log(typeof currContactsData);
            let i = 0;
            while (i < number) {
                const newContact = createFakeContact();
                currContactsData.push(newContact);
                i++;
            }
            // console.log("currContactsData: ", currContactsData);
            return currContactsData;
        }
    )
        .then(async (data) => {
            await writeContacts(data);
        });
};

generateContacts(5);
