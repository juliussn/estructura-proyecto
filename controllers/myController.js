const OneModel = require('../models/myModel');
const moment = require('moment');

//Ejemplo de respuesta a una petición de tipo GET
exports.inicio = (req, res) => {
    res.status(200).render('index');
};

exports.login = (req, res) => {
    res.status(200).render('login');
};
exports.register = (req, res) => {
    res.status(200).render('register');
};
