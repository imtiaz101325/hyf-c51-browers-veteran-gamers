/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  playerName: '',
  currentQuestionIndex: 0,
  scoreResult: 0, // the secore result of the quiz have inial value  0
  // the questions in the quiz
  questions: [
    {
      text: 'Which video game character is known as the "Plumber"?',
      answers: {
        a: 'Link',
        b: 'Mario',
        c: 'Sonic',
        d: 'Donkey Kong',
      },
      correct: 'b',
      selected: null,
    },
    {
      text: 'In which game would you find the character "Master Chief"?',
      answers: {
        a: 'Call of Duty',
        b: 'Halo',
        c: 'Gears of War',
        d: 'Destiny',
      },
      correct: 'b',
      selected: null,
    },
    {
      text: 'Which video game series is known for the phrase "It’s dangerous to go alone! Take this."?',
      answers: {
        a: 'The Legend of Zelda',
        b: 'Final Fantasy',
        c: 'Skyrim',
        d: 'Dark Souls',
      },
      correct: 'a',
      selected: null,
    },
    {
      text: 'What is the main objective in the game "Minecraft"?',
      answers: {
        a: 'To defeat the Ender Dragon',
        b: 'To collect all the Pokemon',
        c: 'To build the tallest tower',
        d: 'To solve puzzles and escape dungeons',
      },
      correct: 'a',
      selected: null,
    },
    {
      text: 'Which gaming console is known for its motion-sensing controllers?',
      answers: {
        a: 'Xbox 360',
        b: 'PlayStation 4',
        c: 'Nintendo Wii',
        d: 'Sega Genesis',
      },
      correct: 'c',
      selected: null,
    },
    {
      text: 'Which of these is a racing video game franchise?',
      answers: {
        a: 'Gran Turismo',
        b: 'Battlefield',
        c: 'Halo',
        d: 'World of Warcraft',
      },
      correct: 'a',
      selected: null,
    },
    {
      text: 'Which game features the character "Samus Aran"?',
      answers: {
        a: 'Metroid',
        b: 'Zelda',
        c: 'Super Mario',
        d: 'Star Fox',
      },
      correct: 'a',
      selected: null,
    },
    {
      text: 'Which game series is set in the fictional world of "Tamriel"?',
      answers: {
        a: 'The Elder Scrolls',
        b: 'Dark Souls',
        c: 'Dragon Age',
        d: 'Final Fantasy',
      },
      correct: 'a',
      selected: null,
    },
    {
      text: 'Which video game character is known for saying "Hadouken!"?',
      answers: {
        a: 'Ryu',
        b: 'Liu Kang',
        c: 'Sagat',
        d: 'Ken',
      },
      correct: 'a',
      selected: null,
    },
    {
      text: 'In which game do you control a car that plays soccer?',
      answers: {
        a: 'Rocket League',
        b: 'Gran Turismo',
        c: 'FIFA',
        d: 'Need for Speed',
      },
      correct: 'a',
      selected: null,
    },
  ],
};
