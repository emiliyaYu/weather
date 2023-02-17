const { default: axios } = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();

app.get("/", cors(), (req, res) => {
    const lon = req.query.lon;
    const lat = req.query.lat;

    axios.get(`https://api.weather.yandex.ru/v2/forecast?lat=${lat}&lon=${lon}`, {
        headers: {
            'X-Yandex-API-Key': '0c47596d-87f0-4894-8953-e253237fc348',
        }
    })
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
});

app.listen(8000);

