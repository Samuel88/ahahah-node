const { exec } = require("child_process");

//
// FUNCTIONS
//
function randomArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

//
// MAIN
//

const youtubeIds = ["juqyzgnbspY", "mghhLqu31cQ", "j9V78UbdzWI", "Sagg08DrO5U", "TkX7HQtUepU"];

const youtubeUrls = youtubeIds.map((id) => {
  return "https://www.youtube.com/watch?v=" + id;
});

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    exec("start msedge " + randomArray(youtubeUrls), (err, stdout, stderr) => {
      return;
    });
  }, getRandomIntInclusive(1, 20) * 1000);
}
