var express = require('express');
var router = express.Router();
const curd = require("mongodb-curd");

/* 查找 */
router.get('/api/list', function(req, res, next) {
    curd.find("test", "yk-A", (result) => {
        if (result) {
            res.send({ code: 1, msg: "查找到了数据", data: result })
        } else {
            res.send({ code: 0, msg: "没有查找到数据", })
        }
    })
});
//删除
router.get('/api/delList', function(req, res, next) {
    curd.remove("test", "yk-A", (result) => {
        if (result) {
            res.send({ code: 1, msg: "success", data: result })
        } else {
            res.send({ code: 0, msg: "error", })
        }
    })
});
//增加
router.post('/api/addList', function(req, res, next) {
    let { name, tel, address } = req.body;
    if (!name || !tel || !address) {
        res.send({ code: 2, msg: "参数不完整" })
    }
    curd.insertMany("test", "yk-A", { name: name, tel: tel, adress: adress }, (result) => {
        if (result) {
            res.send({ code: 1, msg: "success", data: result })
        } else {
            res.send({ code: 0, msg: "error", })
        }
    })
});
//编辑
router.post('/api/upList', function(req, res, next) {
    let { name, tel, adress } = req.body;
    if (!name || !tel || !adress) {
        res.send({ code: 2, msg: "参数不完整" })
    }
    curd.update("test", "yk-A", { name: name, tel: tel, adress: adress }, (result) => {
        if (result) {
            res.send({ code: 1, msg: "success", data: result })
        } else {
            res.send({ code: 0, msg: "error", })
        }
    })
});

module.exports = router;