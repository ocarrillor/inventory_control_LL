class Product{
    constructor(id, name, amount, cost){
        this.id = Number(id);
        this.name = name;
        this.amount = Number(amount);
        this.cost = Number(cost);
    }

    getValue(){
        return this.amount * this.cost;
    }

    infoHTML(){
        return `<p>${this.id}  ${this.name}  $${this.amount}  $${this.cost}  $${this.getValue()}</p>`;
    }
}

class Inventory{
    constructor(){
        this.first = null;
    }

    add(newObject){
        if (this.first == null){
            this.first = newObject;
        } else {
            let temp = this.first;
            while (temp.next != null){
                temp = temp.next;
            }
            temp.next = newObject;
        }
    }





    list(){
        let list = '';
        let temp = this.first;
        do{
            if(list != ''){
                temp = temp.next;
            }

            list += temp.info() + ' ';
        }while(temp.next != null);
        return list;
    }
}

class Interface{
    show(info){
        let details=document.getElementById('detalles');
        details.innerHTML = `<br> La info es: <br> ${info}`;
    }
}

let invent = new Inventory();
let ui = new Interface();
const btnAdd=document.getElementById('btnAdd');
btnAdd.addEventListener('click',()=>{
    let id = document.getElementById('idA').value;
    let name = document.getElementById('name').value;
    let amount = document.getElementById('amount').value;
    let cost = document.getElementById('cost').value;
    let product = new Product(id, name, amount, cost);
    ui.show(invent.add(product).infoHTML());
});

const btnDelete=document.getElementById('btnDelete');
btnDelete.addEventListener('click',()=>{
    let id = document.getElementById('idE').value;
    ui.show(invent.delete(id).infoHTML());
});

const btnSearch=document.getElementById('btnSearch');
btnSearch.addEventListener('click',()=>{
    let id = document.getElementById('idB').value;
    ui.show(invent.search(id).infoHTML());
});

const btnNormalO=document.getElementById('btnNormalO');
btnNormalO.addEventListener('click',()=>{
    ui.show(invent.listN());
});

const btnReverseO=document.getElementById('btnReverseO');
btnReverseO.addEventListener('click',()=>{
    ui.show(invent.listR());
});