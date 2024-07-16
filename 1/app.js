const express = require('express');
const axios = require('axios');
require('dotenv').config();
const cookie = require('cookie-parser');

const app = express();

let arr = new Set();

app.get('/', async (req, res) => {
    const data ={
        "companyName": process.env.COMPANYNAME,
        "clientID": process.env.CLIENT_ID,
        "clientSecret": process.env.CLIENT_SECRET,
        "ownerName": process.env.OWNERNAME,
        "ownerEmail": process.env.OWNEREMAIL,
        "rollNo": process.env.ROLLNO
    }
    axios.post("http://20.244.56.144/test/auth",data)
    .then(response => {
        console.log(response.data);
        let array = response.data.numbers;
        array.forEach(element => {
            arr.add(element);
        });
        res.send(response.data);
    })
});

app.get('/numbers',async (req,res)=>{
    axios.get("http://20.244.56.144/test/primes",{headers : {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIxMTQwNzE0LCJpYXQiOjE3MjExNDA0MTQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjE1YjdhMGI1LWMyOTItNDIwNi05Y2JiLTgyMDAxZjM4OGIxZiIsInN1YiI6IjEyNTE1NjA4NEBzYXN0cmEuYWMuaW4ifSwiY29tcGFueU5hbWUiOiJTQVNUUkEiLCJjbGllbnRJRCI6IjE1YjdhMGI1LWMyOTItNDIwNi05Y2JiLTgyMDAxZjM4OGIxZiIsImNsaWVudFNlY3JldCI6ImdCVHBzamRQd0RFaEFEV2giLCJvd25lck5hbWUiOiJQZXJpYWthcnVwcGFuIFBMIiwib3duZXJFbWFpbCI6IjEyNTE1NjA4NEBzYXN0cmEuYWMuaW4iLCJyb2xsTm8iOiIxMjUxNTYwODQifQ.jsPWdtc8WW8EmXQHDvFwW2I9nIK7kpsQwfjwsIqvQBg'
    }}
    )
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
})




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});