const array =[          //Tömbben eltárolom az adatokat
    
    {    //tömb első eleme
        Szerzo : "Vörösmarty Mihály",
        csapat : "romantikus triász",
        Muvei : "Zalán futása",
        muvei2 : "Szózat"
    
    },
    {       //tömb második eleme             
        Szerzo  : "Móricz Zsigmond",
        csapat : "Nyugat I.",
        Muvei : "Hét krajcár"
    },
    {              // tömb harmadik eleme       
        Szerzo  : "Illyés Gyula",
        csapat : "Nyugat II.",
        Muvei : "Egy mondat a zsarnokságról",
        muvei2 :  "Puszták népe"
    },
    {               // tömb negyedik eleme               
        Szerzo  : "Radnóti Miklós",
        csapat : "Nyugat III.",
        Muvei : "Pogány köszöntő",
        muvei2 : "Járkálj csak, halálraítélt"
    },
]


const table = document.createElement('table') // létrehozunk egy table elemet
const thead = document.createElement('thead')// létrehozunk egy tablehead elemet
const tbody = document.createElement('tbody')// létrehozunk egy tbody elemet


document.body.appendChild(table) // table elemet hozzá adjuk a htmlhez
table.appendChild(thead) // a thead elemet a table elemhez füzőm
table.appendChild(tbody) // tbody elemet a tablehöz fűzöm




function fejlecgeneralas() {  //ez egy funkcio
    const fejelesek = ["Szerző neve", "Csapat", "Művei"]; // fejelesek tömbben tárolom a adatokat
    const fejsor = document.createElement('tr'); //csinálok egy sort és fejsorba eltárolom
    thead.appendChild(fejsor); //theadhez hozzáfüzőm a fejsort
    
    for (const futasok of fejelesek) {  //vegigmegyunk a tombon egy ciklus segitsegevel, es a ciklusvaltozo az aktualis elem
        const fejcella = document.createElement('th'); // létrehozok egy th t 
        fejcella.innerHTML = futasok; // megadom a fejcella értékét ugy hogy végig fut az i a tömbbön és htmlinnertálásával
        fejsor.appendChild(fejcella); // majd ezt hozzáfűzöm a fejsorhoz
        
        if(futasok === "Művei")//hogyha a futasok elem elér a Művei elemhez akkor az legyen colspan 2
        { 
            fejcella.colSpan = 2
        }
    } 
    
}
function rendetrable(){  //függvény bevezetése, nincs parametere
    tbody.innerHTML="" //ne duplikáljuk a táblázatot
    for (const futo of array) {
        
        const table_row = document.createElement('tr') // Létrehozzuk az új sort
        tbody.appendChild(table_row) // Hozzáadjuk a sort a tbody-hoz

        const td1 = document.createElement('td') // létrehozunk egy cellát
        td1.innerHTML = futo.Szerzo  //megadjuk mit tartalmaz
        table_row.appendChild(td1) //hozzáadjuk a sorhoz

        const td2 = document.createElement('td') // létrehozunk egy cellát
        td2.innerHTML = futo.csapat  //megadjuk mit tartalmaz
        table_row.appendChild(td2)//hozzáadjuk a sorhoz

        const td3 = document.createElement('td')// létrehozunk egy cellát
        td3.innerHTML = futo.Muvei  //megadjuk mit tartalmaz
        table_row.appendChild(td3)//hozzáadjuk a sorhoz


        if (futo.muvei2) { //ha van td4 akkor  létrehozunk egy cellát,megadjuk mit tartalmaz majd hozzáadjuk a sorhoz
            td4 = document.createElement('td') // 
            td4.innerHTML = futo.muvei2
            table_row.appendChild(td4) 
        
        } else {
            // Ha nincs td4 akkor összevonom a cellát
           td3.colSpan = "2"
        }


    }
}
function generateform(){
const form1 = document.createElement('form')
form1.id = 'form'
document.body.appendChild(form1)

const div1 = document.createElement('div')
div1.classList.add('field')

const label1 = document.createElement('label')
label1.htmlFor = "szerzo_nev"
label1.innerText = "Szerző neve:"
div1.appendChild(label1)


const input = document.createElement('input')
input.type = 'text'
input.id = 'szerzo_nev'
input.name = 'szerzo_nev'
div1.appendChild(input)


const span_error = document.createElement('span')
span_error.classList.add('error')
div1.appendChild(span_error)

const div2 = document.createElement('div')
div2.classList.add('field')

const label2 = document.createElement('label')
label2.htmlFor = "group"
label2.innerText = "Csapat"
div2.appendChild(label2)


const input1 = document.createElement('input')
input1.type = 'text'
input1.id = 'group'
input1.name = 'group'
div2.appendChild(input1)


const span_error1 = document.createElement('span')
span_error1.classList.add('error')
div2.appendChild(span_error1)


const div3 = document.createElement('div')
div3.classList.add('field')

const label3 = document.createElement('label')
label3.htmlFor = "mu1"
label3.innerText = "Elso mű: "
div3.appendChild(label3)


const input2 = document.createElement('input')
input2.type = 'text'
input2.id = 'mu1'
input2.name = 'mu1'
div3.appendChild(input2)


const span_error2 = document.createElement('span')
span_error2.classList.add('error')
div3.appendChild(span_error2)


const div4 = document.createElement('div')
div4.classList.add('field')

const label4 = document.createElement('label')
label4.htmlFor = "masodik"
label4.innerText = "Szeretnél megadni második művet is?"
div4.appendChild(label4)


const input3 = document.createElement('input')
input3.type = 'text'
input3.name = "masodik"
input3.id = 'masodik'
input3.type = 'checkbox'
div4.appendChild(input3)



const div5 = document.createElement('div')
div5.classList.add('field')

const label5 = document.createElement('label')
label5.htmlFor = "mu2"
label5.innerText = "Második mű: "
div5.appendChild(label5)


const input4 = document.createElement('input')
input4.type = 'text'
input4.id = 'mu2'
input4.name = 'mu2'
div5.appendChild(input4)


const span_error3 = document.createElement('span')
span_error3.classList.add('error')
div5.appendChild(span_error3)

const button = document.createElement('button')
button.type = 'submit'
button.innerText = 'Hozzáadás'


form1.appendChild(div1)
form1.appendChild(div2)
form1.appendChild(div3)
form1.appendChild(div4)
form1.appendChild(div5)
form1.appendChild(button)



}
generateform()
rendetrable() // meghivom a fuggvenyemet
const form = document.getElementById('form'); //letrehozok egy formot es annak elkerem azt a htmlelemntjét ami form id-val rendelkezik

form.addEventListener('submit',function(e){ //submitra irok egy eseménykezelőt
    e.preventDefault();
    //elkérjük az adatokat a táblázatnak
    const Szerzo_nev = document.getElementById('szerzo_nev') //szerzo_nevet elkerjuk id alapjan
    const csapat_nev = document.getElementById('group') // csapatot elkérjük a group id alapján
    const muelem = document.getElementById('mu1') // muelemet elkérjük a mu1 id alapjan
    const masodik = document.getElementById('mu2') // mu2-t is elkérem a mu2 id alapjan

    const  tform = e.currentTarget
    const hiba = tform.querySelectorAll('.error')
    for(const errorElement of hiba){
        errorElement.innerHTML = ""
    }

    if(simplevalidacio(Szerzo_nev, csapat_nev,muelem,masodik)){ // ha minden mező megvan adva akkor
    // akkor eltároljuk az értékeket egy valtozoba
    const Szerzo_nev_value = Szerzo_nev.value
    const csapat_nev_value = csapat_nev.value
    const muelem_value = muelem.value
    const masodik_value = masodik.value
    //új objektumot létrehozok az adatoknak
    const ujobjektum = {
        Szerzo : Szerzo_nev_value,
        csapat : csapat_nev_value,
        Muvei : muelem_value,
        muvei2: masodik_value,
    }

    array.push(ujobjektum) // hozzáadjuk az új objektumot a meglévő tömbhöz
    rendetrable()//frissitjük a táblázatot az új adatokkal 
}})
function simplevalidacio(szerzo_input,csapatnev_input,muelem_input){
    let valid = true // validáció alap értéke
    if(!validatefields(szerzo_input, "A szerző neve kötelező")){//validáljuk a szerző neve mezőt, ha hamisan tér vissza akkor
        valid = false; // a valid változo értékét hamisra allitjuk
    }

    if(!validatefields(csapatnev_input, "A csapatot kötelező megadni")){//validáljuk a csapat neve  mezőt, ha hamissal tér vissza
        valid = false; // valid valtozo erteke hamissa allitjuk
    }
    if(!validatefields(muelem_input, "A műnek a  neve kötelező")){ //validáljuk a a mű  mezőt, ha hamissal ter vissza
        valid = false; // valid valtozo erteket hamisra allitjuk
    }
    return valid; // visszaterek a valid valtozo ertekevel
}
function validatefields(inputhtmlElement, errormessage){ // csinálunk egy függvényt
    let valid = true // definiáljuk a valid értékét

    if(inputhtmlElement.value === ''){//ha az érték üres akkor
        const parentElement = inputhtmlElement.parentElement; //eltároljuk egy változoba
        const errorhely = parentElement.querySelector('.error'); // megkeressuk azt az első elmet, amin rajta van az error class
        if(errorhely != undefined){ // ha talalunk ilyet mezot 
            errorhely.innerHTML = errormessage; // akkor beleirjuk a hibauzenetet
        }
        valid = false; //valid valtozo értéke ujra hamis
    }
    return valid; // visszaterek a valid valtozoval, ami akkor hamis ha nem ment at a validacion
}


fejlecgeneralas();














