import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    await readContacts()
        .then((data) => {
            let currContactsData = data;
            return currContactsData;
        }
        ).then(async (data) => {
            if (data.length > 0) {
                data.pop();
                await writeContacts(data);
            } else {
                return;
            }
        });
};

removeLastContact();
