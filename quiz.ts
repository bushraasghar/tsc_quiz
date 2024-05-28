#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.yellow("\n\tTypescript Basic Quizz\n\t"));
let intro = await inquirer.prompt([{
    name:'name',
    message:'Enter your name:',
    type:'input'
}])
const quiz: {
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
  question6: string;
  question7: string;
  question8: string;
  question9: string;
  question10: string;
} = await inquirer.prompt([
  {
    name: "question1",
    message: "Q1: Typescript develop by:",
    type: "list",
    choices: ['Microsoft','Amazon','Python','Javascript'],
  },
  {
    name: "question2",
    message: "Q2: JSON stands for",
    type: "list",
    choices: ['Javascript Object Neglection','Javascript Oreintation','Javascipt optional notation','Javascript Object Notation'],
  },
  {
    name: "question3",
    message: "Q3: What JSON requires data for the key?",
    type: "list",
    choices: ['Double qoutes','single qoutes','no qoutes','brackets'],
  },
  { name: "question4",
   message: "Q4: lett message = 'Hello World';",
    type: "list",
     choices: ['hello world','Hello World','Error','Undefined'] 
    },
  { name: "question5",
   message: "Q5: What we use for delete First Element from array?",
    type: "list",
     choices: ['unshift','concat','slice','shift']
     },
  {
    name: "question6",
    message: "Q6: Join multiple array:",
    type: "list",
    choices: ['concat','shift','splice','slice'],
  },
  { name: "question7",
   message: "Q7: Typescript is a superset of:",
    type: "list",
     choices: ['Python','Programming','Javascript','C++'] 
    },
  { name: "question8",
   message: "Q8: In strong typing we use:",
    type: "list",
     choices: ['premitive data type','non premitive','objects','interface']
     },
  { name: "question9",
   message: "Q9: A type aliases is exactly that:",
    type: "list",
     choices: ['a name for any type','an object for any type','union type','strong typing'] 
    },
  { name: "question10",
   message: "Q10: Cannot declared or updated:",
    type: "list",
     choices: ['Let','var','const','all of them'] 
    },
]);
let score: number = 0
switch (quiz.question1) {
    case ('Microsoft'):
        console.log(chalk.italic.green("Question1: Correct"));
        ++score
        break;
    default:
        console.log(chalk.italic.red("Question1: Incorrect"));
        
}

switch (quiz.question2) {
    case ('Javascript Object Notation'):
        console.log(chalk.italic.green("Question2: Correct"));
        ++score
        break;
    default:
        console.log(chalk.italic.red("question2: Incorrect"));
        
}

switch (quiz.question3) {
    case ('Double qoutes'):
        console.log(chalk.italic.green("Question3: Correct"));
        ++score
        break;
    default:
        console.log(chalk.italic.red("Question3: Incorrect"));
        
}

switch (quiz.question4) {
    case ('Error'):
        console.log(chalk.italic.green("Question4: Correct"));
        ++score
        break;
    default:
        console.log(chalk.italic.red("Question4: Incorrect"));
        
}

switch (quiz.question5) {
    case ('shift'):
        console.log(chalk.italic.green("Question5: Correct"));
        ++score
        break;
    default:
        console.log(chalk.italic.red("Question5: Incorrect"));
        
}

switch (quiz.question6) {
    case ('concat'):
        console.log(chalk.italic.green("Question6: Correct"));
        ++score
        break;
    default:
        console.log(chalk.italic.red("Question6: Incorrect"));
        
}

switch (quiz.question7) {
    case ('Javascript'):
        console.log(chalk.italic.green("Question7: Correct"));
        ++score
        break;
    default:
        console.log(chalk.italic.red("Question7: Incorrect"));
       
}

switch (quiz.question8) {
    case ('premitive data type'):
        console.log(chalk.italic.green("Question8: Correct"));
        ++score
        break;
    default:
        console.log(chalk.italic.red("Question8: Incorrect"));
        
}

switch (quiz.question9) {
    case ('a name for any type'):
        console.log(chalk.italic.green("Question9: Correct"));
        ++score
        break;
    default:
        console.log(chalk.italic.red("Question9: Incorrect"));
        
}

switch (quiz.question10) {
    case ('const'):
        console.log(chalk.italic.green("Question10: Correct"));
        ++score
        break;
    default:
        console.log(chalk.italic.red(" Incorrect"));
        
}


console.log(chalk.bold.black(`${intro.name}! Here's your final score ${score}/10`));
// if(score == 6){
//     console.log("\tKeep it up! You can do better\t");
// }
if (score >= 10) {
    console.log(chalk.italic.bold.blue("\tSuperb Champ!\t"));
    
}
if (score <= 5) {
    console.log(chalk.bold.italic.blue("\tHard luck!\t"));
    
}