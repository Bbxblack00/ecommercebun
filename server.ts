import express from "express";
import chalk from 'chalk';

const app = express();

const port: number = 6969;

// routes base and a responce
/**
 * Da qui possiamo mettere tutto il necessario per ricevere
 * le richieste per  il server;
*/

app.get('/', (req, res) => {
    res.send('ciao come vá?');
});

// start the server
app.listen(port, () => {
    console.log("\n*** server runnig: " + chalk.bgGreen(`http://localhost on port ${port}`) + " ***");
});