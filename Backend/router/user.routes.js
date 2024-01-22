const express = require('express');
const server = express.Router();
const userData = require('../services/user.services');
server.use(express.json());
const bcrypt = require("bcryptjs")

server.get('/getAll', async (req, resp) => {

    const data = await userData.userAll();

    if (data) {
        resp.json({
            "status": "Success",
            data: data,
        })
    } else {
        resp.json({
            "status": "UnSuccess",
        })
    }
});



server.post('/postUser', async (req, resp) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 0);

    const data = await userData.postData(req.body);

    if (data) {
        resp.json({
            "status": "success",
            data: data
        });
    } else {
        resp.json({
            "status": "Unsuccess"
        });
    }
});


server.put('/updateUser/:id', async (req, resp) => {

    const userId = req.params.id;
    const updatedData = req.body;

    const data = await userData.updateData(userId, updatedData);
    if (data) {
        resp.json({
            "status": "Update Successfully",
            data: data
        });
    } else {
        resp.json({
            "status": "Unsuccess"
        })
    }

});

server.delete('/deleteuser/:id', async (req, res) => {

    const userid = req.params.id;

    const data = await userData.deleteuser(userid);

    if (data) {
        res.json({
            "Message": "Delete Successfully",
            data: data
        });
    } else {
        res.json({
            "Message": "Error To delete a Data"
        });
    }

});

module.exports = server;