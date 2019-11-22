const app = require('express')();
const cors = require('cors');

app.use(cors());

let PORT = process.env.PORT || 3030;

let userNum = 0;

app.get("/", (req, res) => {
    userNum += 1;
    res.send(JSON.stringify({ number: userNum % 2 }));
});

app.listen(PORT, () => console.log("listening"))