const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json()); // pentru a primi JSON în request

// CITIRE UTILIZATORI DIN users.json
function readUsers() {
    const data = fs.readFileSync("./database/users.json", "utf-8");
    return JSON.parse(data);
}

// SCRIERE UTILIZATORI ÎN users.json
function writeUsers(users) {
    fs.writeFileSync("./database/users.json", JSON.stringify(users, null, 2));
}

// REGISTER
app.post("/register", (req, res) => {
    const { name, phone, email, password } = req.body;

    // verificăm dacă email-ul există deja
    let users = readUsers();
    let exists = users.find(u => u.email === email);

    if (exists) {
        return res.status(400).json({ message: "Email already registered" });
    }

    let newUser = {
        id: Date.now(),
        name,
        phone,
        email,
        password
    };

    users.push(newUser);
    writeUsers(users);

    res.json({ message: "User registered successfully" });
});

// LOGIN
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    let users = readUsers();
    let user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful", user });
});

app.listen(4000, () => {
    console.log("Server running on port 4000");
});
