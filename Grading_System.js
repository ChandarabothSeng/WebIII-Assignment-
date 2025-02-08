const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getGrade(score) {
    if (score >= 90) return 'A';
    else if (score >= 80) return 'B';
    else if (score >= 70) return 'C';
    else if (score >= 60) return 'D';
    else return 'F';
}

let scores = [];

function askForScore() {
    rl.question("Enter student score (or type 'exit' to stop): ", (input) => {
        if (input.toLowerCase() === 'exit') {
            console.log("\nStudent Grades:");
            scores.forEach((score, index) => {
                console.log(`Student ${index + 1}: Score = ${score}, Grade = ${getGrade(score)}`);
            });
            rl.close();
            return;
        }

        try {
            let score = parseInt(input);
            if (isNaN(score) || score < 0 || score > 100) {
                console.log("Invalid input. Please enter a number between 0 and 100.");
            } else {
                scores.push(score);
            }
        } catch (error) {
            console.log("An error occurred: " + error.message);
        }

        askForScore(); 
    });
}

askForScore();
