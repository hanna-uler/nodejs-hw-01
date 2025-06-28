import path from "node:path";
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const currentPath = fileURLToPath(import.meta.url);
const currentDirname = dirname(currentPath);

export const PATH_DB = path.join(currentDirname, "..", "db", "db.json");
