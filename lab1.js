const game = {
  team1: "Chelsea",
  team2: "Manchester United",
  players: [
    [
      "Mendy",
      "Rudiger",
      "Thiago Silva",
      "Chritensen",
      "N'Golo Kanté",
      "Jorginho",
      "Azpilicueta",
      "Marcos Alonso",
      "Havertz",
      "Mount",
      "Lukaku",
    ],
    [
      "De Gea",
      "Maguire",
      "Vanrane",
      "Wan-Bisaka",
      "Shaw",
      "McTominay",
      "Bruno",
      "Pogba",
      "Greenwood",
      "Sancho",
      "Ronaldo",
    ],
  ],
  sorce: "4:2",
  sorced: ["Lukaku", "Pogba", "Ronaldo", "Mount", "Havertz", "Lukaku"],
  date: "Sep 3rd, 2023",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1
const [players1, players2] = game.players;
// 2
const [gk, ...morePlayers] = players1;
const [df1, df2, df3, df4, mf1, mf2, cam1, cam2, cam3, st] = morePlayers;
// 3
const allPlayers = [...players1, ...players2];
// 4
const players1Final = [
  ...players1,
  "Robert Sanchez",
  "Malo Gusto",
  "Nicolas Jackson",
];
// 5
const { team1, x: draw, team2 } = game.odds;
// 6
function printGoals(...sorcedPlayers) {
  sorced = sorcedPlayers[0];
  console.log(sorced.length);
  sorced.map((sorce) => {
    console.log(sorce);
  });
}
printGoals(game.sorced);
// 7
const t1win = team1 < team2;
const t2win = team1 > team2;
t1win && console.log(game.team1 + " win");
t2win && console.log(game.team2 + " win");
// part 2
// 1
game.sorced.map((sorce, i) => {
  console.log("goal " + i + ": " + sorce);
});
// 2
var count1 = 0;
var count2 = 0;
game.sorced.map((goal) => {
  if (players1.includes(goal)) {
    count1++;
  }
  if (players2.includes(goal)) {
    count2++;
  }
});
console.log("ti so la: " + count1 + ":" + count2);
// 3
console.log("ti le thang cua " + game.team1 + ": " + team1);
console.log("ti le hoà of draw " + draw);
console.log("ti le thang cua " + game.team2 + ": " + team2);
// example more
const scores = {
}
game.sorced.map((goal) => {
  scores[goal] = game.sorced.filter((score) => score == goal).length;
})
console.log(scores);