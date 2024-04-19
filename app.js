import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.magenta.italic.bold("\n \t Welcom to CodeWithTooba - Todo-List Application\n"));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.green("Enter your New Task :")
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added in Todo-List successfully`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            meassage: chalk.bgBlueBright("Do you want to add more task ?"),
            defaulf: "false"
        }
    ]);
    // program stop krwany k lye condition lagai h (jb false hoga program)
    conditions = addMoreTask.addmore;
}
console.log("your Update Todo-List:", todoList);
