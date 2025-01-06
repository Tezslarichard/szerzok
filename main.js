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
            td4 = document.createElement('td')
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
    const Szerzo_nev = document.getElementById('szerzo_nev')
    const csapat_nev = document.getElementById('group')
    const muelem = document.getElementById('mu1')
    const masodik = document.getElementById('mu2')

    const  tform = e.currentTarget
    const hiba = tform.querySelectorAll('.error')
    for(const errorElement of hiba){
        errorElement.innerHTML = ""
    }
    
    let valid = true
    // az adatok értékeit elkérem
    const Szerzo_nev_value = Szerzo_nev.value
    const csapat_nev_value = csapat_nev.value
    const muelem_value = muelem.value
    const masodik_value = masodik.value

    if(Szerzo_nev_value === ''){
        const parentElement = Szerzo_nev.parentElement;
        const errorplace = parentElement.querySelector('.error')
        if(errorplace != undefined){
            errorplace.innerHTML = ' A szerző neve kötelező'
        }
        valid = false;
    }

    if(csapat_nev_value === ''){
        const parentElement = csapat_nev.parentElement;
        const errorplace = parentElement.querySelector('.error')
        if(errorplace){
            errorplace.innerHTML = ' A csapat neve kötelező'
        }
        valid = false;
    }
    if(muelem_value === ''){
        const parentElement = muelem.parentElement;
        const errorplace = parentElement.querySelector('.error')
        if(errorplace){
            errorplace.innerHTML = ' A első műve kötelező'
        }
        valid = false;
    }

    //új objektumot létrehozok az adatoknak
    const new_array = {
        Szerzo : Szerzo_nev_value,
        csapat : csapat_nev_value,
        Muvei : muelem_value,
        muvei2: masodik_value,
    }
    array.push(new_array) // hozzáadjuk az új objektumot a meglévő tömbhöz
    rendetrable()//frissitjük a táblázatot az új adatokkal


})
