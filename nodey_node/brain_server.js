// import {hash} from "bcrypt-nodejs";

const express = require('express');
// GET EXPRESS PACKAGE
const bodyP = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const hash = require('bcrypt-nodejs');
const cors = require('cors');
const app = express();
app.use(bodyP.json());
app.use(cors());
// CREATE APP BY RUNNING EXPRESS PACKAGE
//array of objects
const database = {
    users: [
        {
            id: '123',
            name: 'Dekevion',
            password: "test",
            email: 'dekevion@yahoo.com',
            entries: 0,
            joined: new Date(),
        },
        {
            id: '124',
            name: 'Little Johhny',
            password: "abc123",
            email: 'LittleJ@yahoo.com',
            entries: 0,
            joined: new Date(),
        }
    ],
    login: [
        {
            id: '111',
            hash: '',
            email: 'john@gmaail.com'
        }
    ]
};

app.get('/', (request, response) => {
    response.json(database.users)
});


// run app on port # 3000 and up

app.post('/sign', (request, response) => {
    if (request.body.name === database.users[0].name && request.body.password === database.users[0].password) {
        response.json('success');
        console.log('success')
    } else {
        response.json('error logging in');
        console.log('error logging in');
    }
});

app.post('/register', (request, response) => {
    const {email, name, password, id} = request.body;
    bcrypt.hash(password, null, null, function (err, hash) {
        // Store hash in your password DB.
        console.log(hash);
    });
    database.users.push({
        id: id,
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date(),
    });
    response.json(database.users[database.users.length - 1])
});

app.get('/profile/:id', (request, response) => {
    const {id} = request.params;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            return response.json(user);
        }
    });
    if (!found) {
        response.status(400).json('not found')
    }
});

app.post('/image', (request, response) => {
    const {id} = request.body;
    let found = false;

    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            user.entries++;
            return response.json(user.entries);
        }
        if (!found) {
            response.status(400).json('not found')
        }
    });
});

bcrypt.hash("bacon", null, null, function (err, hash) {
    // Store hash in your password DB.
});

// Load hash from your password DB.
bcrypt.compare("bacon", hash, function (err, res) {
    // res == true
});
bcrypt.compare("veggies", hash, function (err, res) {
    // res = false
});

app.listen(3001, () => {
    console.log('app is running')
});
/*
Root Route
Sign in Route (POST)
Register (POST) = New User
/Access users Profile/:userId -> get user
/image => PUT => USER/
 */