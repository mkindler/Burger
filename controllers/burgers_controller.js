const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        const handlebarsObject = {
            burgers: data
        };
        console.log(handlebarsObject);
        res.render("index", handlebarsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body.burger_name, function (result) {
        console.log(result);
        res.json(result);
    });
});

router.put("/api/burgers/devoured/:id", function (req, res) {
    const condition = `id = ${req.params.id};`;
    const boolean = req.body.devoured;

    burger.updateOne(boolean, condition, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(202).end();
    });
});

router.delete("/api/burgers/:id", function (req, res) {
    const condition = `id = ${req.params.id}`;

    burger.deleteOne(condition, function (result) {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(202).end();
    });
});

module.exports = router;