const app = require('./app')
const mongoose = require('mongoose')

const {HOST, PORT, API_PATH, DB_HOST, USERNAME, PASSWORD} = require('./variables')


console.log(`http://${HOST}:${PORT}${API_PATH}`)
console.log(`mongodb+srv://${USERNAME}:${PASSWORD}@${DB_HOST}`)
mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@${DB_HOST}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB")
    app.listen(PORT, () => console.log(`Active port ${PORT}`))
})
.catch((err) => console.log(err))