/* let test = "Ali";
localStorage.setItem("test",test);
console.log(localStorage.getItem("test"));
let temp = "Omar";
localStorage.setItem("temp", temp);
console.log(localStorage.getItem("temp"));

localStorage.removeItem("temp");
localStorage.clear();

let table = ["Mario", "Luigie", "Peach", "Wario", "Bowser"];
let table2 = ["Sonic", "Tails", "Knucles", "amy", "Eggman"];

localStorage.setItem("Mario",JSON.stringify(table));
localStorage.setItem("Sonic",JSON.stringify(table2));
for(let i=0; i<localStorage.length;i++){
    console.log(localStorage.key(i))
};
console.log(JSON.parse(localStorage.Mario)[1]);

let player={
        id: 0,
        name: "Salah",
    };

localStorage.setItem("player1",JSON.stringify(player));
 */
/* let players=[
        {
            id : 1,
            name : "Aamir"
        },
        {
            id : 2,
            name : "Zain"
        },
        {
            id : 3,
            name : "Sed"
        }
    ];
localStorage.setItem("players",JSON.stringify(players));
console.log(JSON.parse(localStorage.players)[1]);
let team = JSON.parse(localStorage["players"])
team[1]={
    id: 4,
    name : "Ronaldo"
}
console.log(team);
localStorage.setItem("players", JSON.stringify(team)) */



let players=[
        {
            id : 1,
            name : "Aamir"
        },
        {
            id : 2,
            name : "Zain"
        },
        {
            id : 3,
            name : "Sed"
        },
    ];
localStorage.setItem("players",JSON.stringify(players));
let team = JSON.parse(localStorage["players"]);
team.push({
    id: 4,
    name : "Ronaldo"
},);

team.find

console.log(team);
localStorage.setItem("players", JSON.stringify(team));


