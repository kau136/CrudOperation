const express = require("express");
const mongoose = require("mongoose");
const Student = require("../model/student");


exports.getStudent = async (req, res, next) => {
    try {
        const studentData = await Student.find()
        console.log(studentData);
        res.status(200).json({
            studentData: studentData
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.getStudentById = async (req, res, next) => {
    try {
        console.log(req.params.id);
        const studentDataById = await Student.findById(req.params.id)
        console.log(studentDataById);
        res.status(200).json({
            student: studentDataById
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }


}

exports.postStudent = async (req, res, next) => {
    try {
        const student = await new Student({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            gender: req.body.gender
        }).save()
        console.log(student);
        res.status(200).json({
            newStudent: student
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.deleteStudentById = async (req, res, next) => {
    try {
        const deleteStudentData = await Student.remove({ _id: req.params.id })
        console.log('Record Deleted Successfully!......');
        res.status(200).json({
            message: 'record deleted',
            result: deleteStudentData

        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }



}

exports.updateStudentById = async (req, res, next) => {
    try {

        const updateDataById = await Student.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                gender: req.body.gender
            }
        }, { new: true })
        res.status(200).json({
            updated_record: updateDataById
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }

}