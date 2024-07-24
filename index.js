#! /user/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
//Display a colourfull welcome message
console.log(chalk.bold.cyanBright("\n\t\t Word counter"));
console.log("=".repeat(60));
//prompt  tha user to enter a sentence
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence "
    }
]);
//Triming tha sentence and spliting it into words based on "spaces"
let words = answer.sentence.trim().split(" ");
//analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - word count: ${chalk.bold.redBright(words.length)} `));
