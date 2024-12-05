const affirmations = [
  "I am capable of amazing things.",
  "I Believe in myself and all that i am are.",
  "Every day is a fresh start.",
  "I have the power to create change.",
  "I am strong, resilient, and brave.",
  "Positivity is a choice, and today I choose joy.",
  "My potential is endless.",
  "I am worthy of love and respect.",
  "Everything I need is already within Me.",
  "I am making a difference.",
  "I am enough",
  "I am worthy of what I desire",
  "I am proud of myself and my achievements",
  "I am powerful",
  "I am getting better and better every day.",
  "I am living with abundance",
  "I am grateful for everything I have in my life",
  "I’m freeing myself from all destructive doubt and fear",
  "I must remember the incredible power I possess within me to achieve anything I desire",
  "My past might be ugly, but I am still beautiful.",
  "Note to self: I am going to make you so proud",
];

function generateAffirmation() {
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  const affirmationElement = document.getElementById("affirmation");
  affirmationElement.textContent = affirmations[randomIndex];
}
