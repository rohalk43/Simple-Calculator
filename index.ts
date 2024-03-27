#! /usr/bin/env node

import inquirer from "inquirer";

// Printing a Wellcome Message
console.log("\n\tWellcome To \'CodeWithRohail\' = - CLI Simple Calculator\n");

//asking questions from users through inquirer

let answers = await inquirer.prompt([ 
    {message: "Enter First Number", type: "number", name: "firstNumber"},
    {message: "Enter Second Number",type: "number", name: "secondNumber"},
    {
        message: "Select One Operator to perform Operations",
        type: "list",
        name: "operator",
        choices:["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);

//conditional statements if-else

if(answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if (answers.operator === "Subtraction"){
    console.log(answers.firstNumber = answers.secondNumber)
}
else if (answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if (answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else{
    console.log("Invalid Input")
}
