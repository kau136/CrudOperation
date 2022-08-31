const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Student = require('../model/student');
const checkAuth = require('../middleware/check-auth');

const { getStudent, getStudentById, postStudent, deleteStudentById, updateStudentById } = require('../controller/student');
router.get("/get",checkAuth, getStudent);
router.get("/getId/:id",checkAuth, getStudentById);
router.post("/post",checkAuth, postStudent);
router.delete("/delete/:id",checkAuth, deleteStudentById);
router.put("/update/:id",checkAuth, updateStudentById);

module.exports = router;