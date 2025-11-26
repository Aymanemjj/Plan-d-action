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




/* partie 4 */

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
        },
    ];
localStorage.setItem("players",JSON.stringify(players));
let team = JSON.parse(localStorage["players"]);
team.push({
    id: 4,
    name : "Ronaldo"
},);
team[1]={
    id: 2,
    name : "messi"
}

localStorage.setItem("players", JSON.stringify(team));


let temp = JSON.parse(localStorage.getItem("players"));
let find = temp.find(o=>o.id == 3);
let i = temp.indexOf(find);

temp.splice(i,1);
localStorage["players"] = JSON.stringify(temp);

console.log(JSON.parse(localStorage["players"])); */


/* partie 5 */



const form = document.forms["addForm"]
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    formRead()
})
function formRead(){
    let person = JSON.parse(localStorage.getItem("person")) || [];
    person.push({
        name : `${form.fullname.value}`,
        age : `${form.age.value}`
    },);
    localStorage["person"] = JSON.stringify(person);    
    form.reset();
    formDisplay();
}

const block = document.getElementById("displaySection")
function formDisplay(){
    let person = JSON.parse(localStorage.getItem("person"));
    block.innerHTML =
        `<tr>
            <th>Name</th>
            <th>Age</th>
        </tr>`;
        
    person.forEach((person) => {
        block.innerHTML +=
            `
                <tr>
                    <td>${person.name}</td>
                    <td>${person.age}</td>
                </tr>
            `
    })
    
}
