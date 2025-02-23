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

const tablazat = [
    {
        htmlfor : "szerzo_nev",
        text : "Szerző",
        inputType : "text"
    },

    {
        htmlfor : "group",
        text : "Csapat",
        inputType : "text"
    },
    {
        htmlfor : "mu1",
        text : "Művek",
        inputType : "text"
    },
    {
        htmlfor : "mu2",
        text : "Művek",
        inputType : "text"
    }
]

const table = document.createElement('table') // létrehozunk egy table elemet
const thead = document.createElement('thead')// létrehozunk egy tablehead elemet
const tbody = document.createElement('tbody')// létrehozunk egy tbody elemet


document.body.appendChild(table) // table elemet hozzá adjuk a htmlhez
table.appendChild(thead) // a thead elemet a table elemhez füzőm
table.appendChild(tbody) // tbody elemet a tablehöz fűzöm


generateform(tablazat)//meghivom a függvényt
rendetrable(array,tbody) // meghivom a fuggvenyemet
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

    array.push(ujobjektum)// hozzáadjuk az új objektumot a meglévő tömbhöz
    form.reset() // a formomat resetelem hogy ne tudjam spammelni a hozzáadást
    tbody.innerHTML="" //ne duplikáljuk a táblázatot
    rendetrable(array,tbody)//frissitjük a táblázatot az új adatokkal 
}})

fejlecgeneralas(thead);














