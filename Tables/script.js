const form = document.forms["addContact"];
const form2 = document.forms["filter"];
let contactList = [];
const tBody = document.querySelector("tbody");
const counter = document.getElementById("counter")

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    
    addContact();
});

function addContact(){
    
    let contact = {
        name: `${form.name.value}`,
        email: `${form.email.value}`,
        phone: `${form.phone.value}`
    }
    contactList.push(contact)
    displayContacts(contactList);
    form.reset();
    
};

function displayContacts(contacts){
    tBody.innerHTML ="";
    contacts.forEach((contact)=>{

        let row = tBody.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        let cell3 = row.insertCell();
        let cell4 = row.insertCell()
        let cell5 = row.insertCell();
        cell1.innerText = `${contact.name}`;
        cell2.innerText = `${contact.email}`;
        cell3.innerText = `${contact.phone}`;
        cell4.innerHTML = `<button owner ="${contact.name}" class="editBtn">Edit</button>`
        cell5.innerHTML = `<button owner ="${contact.name}" class="deleteBtn">Delete</button>`

    })

    document.querySelectorAll(".deleteBtn").forEach((Btn)=>{
        Btn.addEventListener("click",()=>deleteFunction(Btn));
    });
    document.querySelectorAll(".editBtn").forEach((Btn)=>{
        Btn.addEventListener("click",()=>editFunction(Btn));
    });

    counter.innerHTML = contactList.length;

}

function deleteFunction(Btn){
    let filter = Btn.getAttribute("owner");
    let find = contactList.find(c =>c.name == filter);
    let address = contactList.indexOf(find);
    contactList.splice(address,1);
    displayContacts();
}
function editFunction(Btn){
    let filter = Btn.getAttribute("owner");
    let find = contactList.find(c =>c.name == filter);
    let address = contactList.indexOf(find);
    form.name.value = contactList[address].name;
    form.email.value = contactList[address].email;
    form.phone.value = contactList[address].phone;
    
    contactList.splice(address,1);

    displayContacts();
}

form2.sortSelect.addEventListener("change",()=>{

    let contacts = [...contactList];

    if(form2.sortSelect.value ==="az"){
        contacts.sort((a,b)=> a.name.localeCompare(b.name));
        displayContacts(contacts);
    }else if(form2.sortSelect.value ==="za"){
        contacts.sort((a,b)=> b.name.localeCompare(a.name));
        displayContacts(contacts);
    };
})