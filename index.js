const app = require('./app');
const db = require('./config/db')
const userModel = require('./model/user_model')

const port = 3000;

app.get('/',(req, res) => {
    res.send("hello ulektz New!")
});

app.listen(port, () => { console.log(`conected server url http://localhost:${port}`) });

