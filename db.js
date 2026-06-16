import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const DB_FILE = path.resolve(process.cwd(), 'db.json');

function initDb() {
    if (!fs.existsSync(DB_FILE)) {
        fs.writeFileSync(DB_FILE, JSON.stringify({ users: [], threads: [] }, null, 2));
    }
}

function readData() {
    initDb();
    try {
        const raw = fs.readFileSync(DB_FILE, 'utf8');
        return JSON.parse(raw);
    } catch (err) {
        console.error("Error reading database:", err);
        return { users: [], threads: [] };
    }
}

function writeData(data) {
    try {
        fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
        return true;
    } catch (err) {
        console.error("Error writing database:", err);
        return false;
    }
}

// Generate secure salt
function generateSalt() {
    return crypto.randomBytes(16).toString('hex');
}

// PBKDF2 Hashing
export function hashPassword(password, salt) {
    return crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
}

export const db = {
    // User Operations
    createUser({ firstName, lastName, email, contactNumber, password }) {
        const data = readData();
        const emailLower = email.toLowerCase().trim();
        
        if (data.users.find(u => u.email === emailLower)) {
            throw new Error("Email ID is already registered");
        }
        
        const salt = generateSalt();
        const passwordHash = hashPassword(password, salt);
        
        const newUser = {
            id: 'user_' + Date.now(),
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: emailLower,
            contactNumber: contactNumber.trim(),
            salt,
            passwordHash
        };
        
        data.users.push(newUser);
        writeData(data);
        
        // Return user details without salt/passwordHash
        const { salt: _, passwordHash: __, ...userPublic } = newUser;
        return userPublic;
    },
    
    authenticateUser(email, password) {
        const data = readData();
        const emailLower = email.toLowerCase().trim();
        const user = data.users.find(u => u.email === emailLower);
        
        if (!user) {
            throw new Error("Invalid email or password");
        }
        
        const hash = hashPassword(password, user.salt);
        if (hash !== user.passwordHash) {
            throw new Error("Invalid email or password");
        }
        
        const { salt: _, passwordHash: __, ...userPublic } = user;
        return userPublic;
    },
    
    getUserById(userId) {
        const data = readData();
        const user = data.users.find(u => u.id === userId);
        if (!user) return null;
        const { salt: _, passwordHash: __, ...userPublic } = user;
        return userPublic;
    },

    // Chat Operations
    getThreadsByUserId(userId) {
        const data = readData();
        return data.threads.filter(t => t.userId === userId);
    },
    
    saveOrUpdateThread(userId, thread) {
        const data = readData();
        const index = data.threads.findIndex(t => t.id === thread.id && t.userId === userId);
        
        const threadData = {
            ...thread,
            userId: userId // ensure associated with the user
        };
        
        if (index > -1) {
            data.threads[index] = threadData;
        } else {
            data.threads.push(threadData);
        }
        
        writeData(data);
        return threadData;
    },
    
    deleteThread(userId, threadId) {
        const data = readData();
        const lengthBefore = data.threads.length;
        data.threads = data.threads.filter(t => !(t.id === threadId && t.userId === userId));
        writeData(data);
        return data.threads.length < lengthBefore;
    }
};

// Initialise DB file on module load
initDb();
