const table = document.createElement('table') // létrehozunk egy table elemet
const thead = document.createElement('thead')// létrehozunk egy tablehead elemet
const tbody = document.createElement('tbody')// létrehozunk egy tbody elemet
document.body.appendChild(table) // table elemet hozzá adjuk a htmlhez
table.appendChild(thead) // a thead elemet a table elemhez füzőm
table.appendChild(tbody) // tbody elemet a tablehöz fűzöm

  const array1 =[  {    //tömb 0 eleme                       
        
        th1ertek : "Szerző neve",
        th2ertek : "Csapat",
        th3ertek : "Művei"
    }]

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
// Fejlécet létrehozom
const th_row = document.createElement('tr') // Létrehozzuk a fejléc sort
thead.appendChild(th_row) // A fejléc sort hozzáadjuk a thead-hez

// Fejléc cellák létrehozása és hozzáadása a fejléchez
const th1 = document.createElement('th')
th1.innerHTML = array1[0].th1ertek //megadjuk a fejléc tartalmát a tömbböl
th_row.appendChild(th1)

const th2 = document.createElement('th')
th2.innerHTML = array1[0].th2ertek //megadjuk a fejléc tartalmát a tömbböl
th_row.appendChild(th2)

const th3 = document.createElement('th')
th3.colSpan = 2 // Az utolsó fejléc cella két cellát von össze
th3.innerHTML = array1[0].th3ertek //megadjuk a fejléc tartalmát a tömbböl
th_row.appendChild(th3)

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