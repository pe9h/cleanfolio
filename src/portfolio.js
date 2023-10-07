const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://pe9h.github.io/',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Avery',
  role: 'Full Time Programmer',
  description:
    'Hello! I am 18 years old. I have 2 1/2 years of experience in Luau, and a couple weeks of experience in GDScript. I primarily use Roblox, but can easily adapt to other game engines!',
  //resume: 'https://example.com',
  social: {
    github: 'https://github.com/pe9h',
    twitter: 'https://twitter.com/ownxer'
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Tree Harvesting Game',
    description:
      'Just a little project I worked on in April, 2023. Was primarily used to improve my Lua knowledge!',
    stack: ['Lua'],
    //sourceCode: 'https://github.com',
    livePreview: 'https://youtu.be/l4mAv4y5U3A',
  },
  {
    name: 'Wizard Storm Card Game',
    description:
      'Unfinished collectible card game, primarily inspired by Hearthstone.',
    stack: ['Lua'],
   // sourceCode: 'https://github.com',
    livePreview: 'https://youtu.be/LNRxsaduxaU',
  },
  {
    name: 'Roguelite/Dungeon Crawler',
    description:
      'I decided to mash a roguelite and a dungeon crawler together, and got this result. it isnt finished, but it has the basis for a full game.',
    stack: ['Lua'],
    //sourceCode: 'https://github.com',
    livePreview: 'https://youtu.be/F93cuCUOsu0',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Luau',
  'GDScript',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
 // email: 'johnsmith@mail.com',
}

export { header, about, projects, skills, contact }
