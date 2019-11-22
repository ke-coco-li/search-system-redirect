const app = require('express')();
const cors = require('cors');

app.use(cors());

let userNum = 0;

app.get("/redirect.html", (req, res) => {
    userNum += 1;
    res.send(JSON.parse.stringify({ number: userNum % 2 }));   
});

app.listen(3030, () => console.log("listening"))