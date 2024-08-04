#! /usr/bin/env node
import inquirer from 'inquirer';
async function startGame() {
    console.log("Welcome to the CLI Adventure Game!");
    console.log("You find yourself at the entrance of a mysterious forest.");
    console.log("What do you want to do?");
    // Game loop
    while (true) {
        const { action } = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Choose an action:',
                choices: [
                    { name: 'Explore the forest', value: 'explore' },
                    { name: 'Check inventory', value: 'inventory' },
                    { name: 'Quit', value: 'quit' }
                ]
            }
        ]);
        switch (action) {
            case 'explore':
                await exploreForest();
                break;
            case 'inventory':
                await checkInventory();
                break;
            case 'quit':
                console.log('Thank you for playing!');
                process.exit(0);
                break;
            default:
                console.log('Invalid choice, please try again.');
        }
    }
}
async function exploreForest() {
    const { choice } = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'You see two paths. Which one will you take?',
            choices: [
                { name: 'Take the left path', value: 'left' },
                { name: 'Take the right path', value: 'right' },
                { name: 'Go back', value: 'back' }
            ]
        }
    ]);
    switch (choice) {
        case 'left':
            console.log('You encounter a friendly squirrel who gives you a magic nut.');
            break;
        case 'right':
            console.log('You find a hidden treasure chest with gold and gems.');
            break;
        case 'back':
            console.log('You return to the starting point.');
            break;
    }
}
async function checkInventory() {
    console.log('You have:');
    console.log('- A magic nut');
    console.log('- A map of the forest');
}
startGame();
