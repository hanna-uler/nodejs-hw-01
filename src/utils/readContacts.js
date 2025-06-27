import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
export const readContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, "utf-8");
        // console.log(JSON.parse(data));
        return JSON.parse(data);
    } catch (error) {
        console.log(error);
    }
};
