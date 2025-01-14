/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  questions: [
    {
      text: 'What is the best-selling video game of all time?',
      answers: {
        a: 'Minecraft',
        b: 'Grand Theft Auto V',
        c: 'Tetris',
        d: 'The Legend of Zelda: Breath of the Wild',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Game History',
          href:
            'https://en.wikipedia.org/wiki/List_of_best-selling_video_games',
        },
      ],
    },
    {
      text: 'Which video game character is known as the "Blue Blur"?',
      answers: {
        a: 'Mega Man',
        b: 'Sonic the Hedgehog',
        c: 'Crash Bandicoot',
        d: 'Spyro the Dragon',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Sonic on SEGA',
          href: 'https://www.sega.com/games/sonic-origins',
        },
      ],
    },
    {
      text: 'Which game features a battle royale mode called "Warzone"?',
      answers: {
        a: 'Call of Duty',
        b: 'Fortnite',
        c: 'Apex Legends',
        d: "PlayerUnknown's Battlegrounds (PUBG)",
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Warzone Info',
          href: 'https://www.callofduty.com/warzone',
        },
      ],
    },
    {
      text:
        'In "The Legend of Zelda" series, what is the name of the princess?',
      answers: {
        a: 'Zelda',
        b: 'Link',
        c: 'Ganon',
        d: 'Midna',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Zelda Series',
          href: 'https://www.zelda.com/',
        },
      ],
    },
    {
      text: 'Which game developer created "The Last of Us"?',
      answers: {
        a: 'Rockstar Games',
        b: 'Naughty Dog',
        c: 'Bungie',
        d: 'CD Projekt Red',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Naughty Dog Games',
          href: 'https://www.naughtydog.com/games',
        },
      ],
    },
    {
      text: 'What is the name of the main protagonist in the "Halo" series?',
      answers: {
        a: 'Commander Shepard',
        b: 'Solid Snake',
        c: 'Master Chief',
        d: 'Marcus Fenix',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'Halo Series Info',
          href: 'https://www.halowaypoint.com/',
        },
      ],
    },
    {
      text:
        'Which game series features locations such as Whiterun, Solitude, and Windhelm?',
      answers: {
        a: 'The Elder Scrolls',
        b: 'Dark Souls',
        c: 'Dragon Age',
        d: 'World of Warcraft',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Elder Scrolls Games',
          href: 'https://elderscrolls.bethesda.net/',
        },
      ],
    },
    {
      text:
        'In "Fortnite," what is the term for the shrinking area that players must stay within?',
      answers: {
        a: 'Storm',
        b: 'Safe Zone',
        c: 'Ring',
        d: 'Circle',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Fortnite Info',
          href: 'https://www.epicgames.com/fortnite',
        },
      ],
    },
    {
      text:
        'Which character in "Overwatch" is known for saying, "Cheers, love! The cavalry’s here!"?',
      answers: {
        a: 'Mercy',
        b: 'Tracer',
        c: 'Widowmaker',
        d: 'D.Va',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Overwatch Heroes',
          href: 'https://playoverwatch.com/en-us/heroes/',
        },
      ],
    },
    {
      text: 'What is the name of the protagonist in the "God of War" series?',
      answers: {
        a: 'Kratos',
        b: 'Zeus',
        c: 'Ares',
        d: 'Hercules',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'God of War Info',
          href: 'https://www.playstation.com/en-us/games/god-of-war/',
        },
      ],
    },
  ],
};
