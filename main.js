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

    info(){
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
        return newObject;
    }

    insert(pos,product){
        if (this.first == null){
            this.first = product;
        } else {
            let temp = this.first;
            let prev = temp;
            let i = 1;
            do{
                if(i == pos){
                    if(pos == 1){
                        this.first = product;
                        product.next = temp;
                    }else{
                        product.next = temp;
                        prev.next = product;
                    }
                }
                console.log(temp);
                prev = temp;
                temp = temp.next;
                console.log(temp);

                i++;
            }while(temp != null && i <= pos);
            
            if(i <= pos){
                prev.next = product;
            }
        }
        return product;
    }

    search(id){
        let temp = this.first;
        while(temp != null){
            if(temp.id == id){
                return temp;
            }
            temp = temp.next;
        }
        return null;
    }

    delete(id){
        let temp = this.first;
        let deleted = null;

        if(temp.next == null){
            if(temp.id == id){
                deleted = temp;
                temp = null;
            }
        }else{
            while(temp.next != null && deleted == null){
                if(temp.next.id == id){
                    deleted = temp.next;
                    temp.next = temp.next.next;
                }else{
                    temp = temp.next;
                }
            }
        }
        return deleted;
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
    ui.show(invent.add(product).info());
});

const btnInsert=document.getElementById('btnInsert');
btnInsert.addEventListener('click',()=>{
    let id = document.getElementById('idA').value;
    let name = document.getElementById('name').value;
    let amount = document.getElementById('amount').value;
    let cost = document.getElementById('cost').value;
    let pos = document.getElementById('pos').value;
    let product = new Product(id, name, amount, cost);
    ui.show(invent.insert(pos, product).info());
});

const btnDelete=document.getElementById('btnDelete');
btnDelete.addEventListener('click',()=>{
    let id = document.getElementById('idE').value;
    ui.show(invent.delete(id).info());
});

const btnSearch=document.getElementById('btnSearch');
btnSearch.addEventListener('click',()=>{
    let id = document.getElementById('idB').value;
    ui.show(invent.search(id).info());
});

const btnNormalO=document.getElementById('btnNormalO');
btnNormalO.addEventListener('click',()=>{
    ui.show(invent.list());
});

const btnReverseO=document.getElementById('btnReverseO');
btnReverseO.addEventListener('click',()=>{
    ui.show(invent.listR());
});