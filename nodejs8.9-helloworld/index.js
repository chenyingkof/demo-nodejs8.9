'use strict';
exports.main_handler = async (event, context, callback) => {
    console.log("Hello World")
    console.log(event)
    console.log(event["non-exist"])
    console.log(context)

    console.log("process.execPath")
    console.log(process.execPath)
    console.log("__dirname")
    console.log(__dirname)
    console.log("process.cwd()")
    console.log(process.cwd())

    var fs = require("fs");
    // var data1 = fs.readFileSync('/var/user/input.txt');
    // console.log("read data1: " + data1.toString());
    // console.log("read data1 finished");

    // process.chdir("/var/user")

    var data2 = fs.readFileSync('./input.txt');
    console.log("read data2: " + data2.toString());
    console.log("read data2 finished");
    return event
};