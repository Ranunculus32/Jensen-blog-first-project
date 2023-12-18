require('dotenv').config();
const express = import('express');

const app = express();
const PORT = 5000|| process.env.PORT;

app.get('', (req, res) => {
    res.render()
});

app.listen(PORT, () => {
console.log(`App is listening on port ${PORT}`)
});
