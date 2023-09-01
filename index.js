const express = require('express');
const mongoose = require('mongoose');
const app = express();
const {HOST, PORT, API_PATH, DB_HOST, USERNAME, PASSWORD, } = require("./variables");
const bodyParser = require("body-parser")

console.log(`http://${HOST}:${PORT}${API_PATH}`)

/* mongodb+srv://santiagojimenezv:X1dRuSWOvG9fg0KI@cluster0.8y6zqe7.mongodb.net/ */

console.log(`mongodb+srv://${USERNAME}:${PASSWORD}@${DB_HOST}`)

mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@${DB_HOST}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( () => {
    console.log('conectado')
    app.listen(PORT, ()=>console.log(`Active port ${PORT}`));
})
.catch((err) => console.error(err));

app.use(bodyParser.json());
app.use("/", (req,res)=>{
    /* http://localhost:3000/api/v1 */
    res.send("Hola al Dashboard");
});