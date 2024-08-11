const userNames = [
  "TomCruiser",
  "CattyPerry",
  "SylvesterCookie",
  "WoofSmith",
  "OctoPitt",
  "CorgiHawn",
  "RobertMeowneyJr",
  "WoodyOwlson",
  "Furrgie",
  "RavenWilliams",
  "TinaFlea",
  "EddieMurpheagle",
  "GopherWinfrey",
  "HowlMandel",
  "SnailDiamond",
  "BenedictCumberbark",
  "BunnyDepp",
  "KittyPoppins",
  "MooseHawn",
  "BruceWhippet",
];

const thoughts = [
  "Just realized my coffee is colder than my ex's heart.",
  "My bed is a magical place where I suddenly remember everything I was supposed to do.",
  "Why do they call it 'beauty sleep' when I wake up looking like a disaster?",
  "Adulting is soup and I'm a fork.",
  "I run on coffee, chaos, and cursing at traffic.",
  "Do I want abs? Yes. But do I want pizza more? Absolutely.",
  "Is it possible to nap so hard that you wake up in another dimension?",
  "Pro tip: If you can't remember something, it wasn't important.",
  "The universe is made of protons, neutrons, electrons, and morons.",
  "My life is like a constant to-do list, except nothing gets to-done.",
  "Running late is my cardio.",
  "I like my coffee like I like my mornings: dark and too early.",
  "If I fits, I sits... and that applies to my entire life.",
  "You know you're adulting when you get excited about buying a new vacuum.",
  "My mind is like an internet browser: 19 tabs open, 3 are frozen, and I have no idea where the music is coming from.",
  "Eating healthy means having a pizza in one hand and a salad in the other.",
  "I'm not great at advice. But can I interest you in a sarcastic comment?",
  "Sometimes I pretend to be normal, but it gets boring, so I go back to being me.",
  "I'm not a morning person, or a night owl. I'm some sort of permanently exhausted pigeon.",
  "I’m multitasking: procrastinating, overthinking, and worrying all at once.",
];

const thoughtReactions = ["Applaud", "Groan"];

// select a random element from an array
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// create a random username by merging two random usernames
function randomUsername() {
  return random(userNames) + random(userNames);
}

// create an array of random thoughts, each with a specific number of reactions
function generateThoughts(count) {
  return Array.from({ length: count }, () => ({
    thoughtText: random(thoughts),
    reactions: generateReactions(2),
  }));
}

// create reactions for a thought
function generateReactions(count) {
  return Array.from({ length: count }, () => ({
    reactionBody: random(thoughtReactions),
    username: randomUsername(),
  }));
}

module.exports = { randomUsername, generateThoughts, random };
