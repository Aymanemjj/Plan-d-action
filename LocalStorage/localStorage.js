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
    let person = localstorageGet("person")
    person.push({
        name : `${form.fullname.value}`,
        age : `${form.age.value}`
    },);
    localStorage["person"] = JSON.stringify(person);    
    form.reset();
    formDisplay();
}

const table = document.getElementById("displaySection")
function formDisplay(){
    let person = localstorageGet("person");
    const tBody = table.querySelector("tbody");
    tBody.innerHTML="";

        
    person.forEach((person) => {
        let row = tBody.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        let cell3 = row.insertCell();
        cell1.innerText = `${person.name}`;
        cell2.innerText = `${person.age}`;
        cell3.innerHTML = `<button owner ="${person.name}" class="deleteBtn">Delete</button>`
    });
    
    document.querySelectorAll(".deleteBtn").forEach((Btn)=>{
        Btn.addEventListener("click",()=>deleteFunction(Btn));
    });
}

function deleteFunction(Btn){
    let filter = Btn.getAttribute("owner");    
    let person = localstorageGet("person");
    let find = person.find(o => o.name == filter);
    let address = person.indexOf(find);
    person.splice(address,1);
    localStorage["person"] = JSON.stringify(person);
    formDisplay();
}

function localstorageGet(key){
    try {
        const data = localStorage.getItem(key);
        if(data === null){
            return [];
        }else{
            let parse = JSON.parse(data)
            return parse;
        }
        

    } catch (error) {
        console.log(`error handeling key: ${key}. reseting`);
        return [];
        
    }
}