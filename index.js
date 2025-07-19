import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const baseURL = 'https://v2.jokeapi.dev/joke';
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/joke', async (req, res) => { 
    const name = req.body.name;
    try {
        const response = await axios.get(`${baseURL}/any?contains=${name}`);
        const joke = response.data.setup + '\n ' + response.data.delivery;
        res.render('index.ejs', { joke });
    } catch (error) {
        console.error('Error fetching joke:', error);
        res.render('index.ejs', { joke: JSON.stringify(error.response.data.message) });
    }
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});