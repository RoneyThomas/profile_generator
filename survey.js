const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Async await method it works.
// const questions = [
//   "What's your name? Nicknames are also acceptable :) ",
//   "What's an activity you like doing? ",
//   "What do you listen to while doing that? ",
//   "Which meal is your favourite (eg: dinner, brunch, etc.) ",
//   "What's your favourite thing to eat for that meal? ",
//   "Which sport is your absolute favourite? ",
//   "What is your superpower? In a few words, tell us what you are amazing at! "
// ];

// let answers = [];

// const profileQuestion = (promptQ) => {
//   return new Promise((callbackFn) => {
//     rl.question(promptQ, (uInput) => {
//       callbackFn(uInput);
//     });
//   });
// };

// const main = async () => {
//   for (const q of questions) {
//     answers.push(await profileQuestion(q));
//   }
//   rl.close();
//   console.log(`${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`);
// };

// main();

// Callback method
rl.question("What's your name? Nicknames are also acceptable :) ", (nickName) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (listen) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (meal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (eat) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (power) => {
              console.log(`${nickName} loves listening to ${listen} while ${activity}, devouring ${eat} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${power}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
