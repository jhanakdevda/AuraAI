import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { db } from './db.js';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
// Parse incoming requests JSON body (allowing large image uploads)
app.use(express.json({ limit: '50mb' }));

// Serve Vite production assets
app.use(express.static(path.join(__dirname, 'dist')));

// Authentication middleware
function authenticate(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ error: "Unauthorized. Authentication session missing." });
    }
    
    const user = db.getUserById(token);
    if (!user) {
        return res.status(403).json({ error: "Forbidden. Session token is invalid." });
    }
    
    req.user = user;
    next();
}

// ==========================================================================
// REST API ENDPOINTS
// ==========================================================================

// User Signup
app.post('/api/auth/signup', (req, res) => {
    const { firstName, lastName, email, contactNumber, password } = req.body;
    
    if (!firstName || !lastName || !email || !contactNumber || !password) {
        return res.status(400).json({ error: "All fields (First Name, Last Name, Email ID, Contact Number, Password) are required." });
    }
    
    try {
        const user = db.createUser({ firstName, lastName, email, contactNumber, password });
        res.status(201).json({ user, token: user.id });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// User Login
app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).json({ error: "Email ID and Password are required." });
    }
    
    try {
        const user = db.authenticateUser(email, password);
        res.status(200).json({ user, token: user.id });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Verify Current User Session
app.get('/api/auth/me', authenticate, (req, res) => {
    res.status(200).json({ user: req.user });
});

// ==========================================================================
// CHAT SYNC API ENDPOINTS
// ==========================================================================

// Get all user threads
app.get('/api/chats', authenticate, (req, res) => {
    const threads = db.getThreadsByUserId(req.user.id);
    res.status(200).json({ threads });
});

// Save or Update a thread
app.post('/api/chats', authenticate, (req, res) => {
    const thread = req.body;
    if (!thread || !thread.id) {
        return res.status(400).json({ error: "Invalid thread data." });
    }
    
    try {
        const saved = db.saveOrUpdateThread(req.user.id, thread);
        res.status(200).json({ thread: saved });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete a thread
app.delete('/api/chats/:threadId', authenticate, (req, res) => {
    const { threadId } = req.params;
    
    try {
        const success = db.deleteThread(req.user.id, threadId);
        if (success) {
            res.status(200).json({ success: true });
        } else {
            res.status(404).json({ error: "Thread not found." });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Serve frontend dist assets catch-all
app.get('*all', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`[AuraAI Server] Running at http://localhost:${PORT}`);
});
