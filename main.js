const table = document.createElement('table') // létrehozunk egy table elemet
const thead = document.createElement('thead')// létrehozunk egy tablehead elemet
const tbody = document.createElement('tbody')// létrehozunk egy tbody elemet
document.body.appendChild(table) // table elemet hozzá adjuk a htmlhez
table.appendChild(thead) // a thead elemet a table elemhez füzőm
table.appendChild(tbody) // tbody elemet a tablehöz fűzöm



const array =[          //Tömbben eltárolom az adatokat
    {    //tömb 0 eleme                       
        
        th1ertek : "Szerző neve",
        th2ertek : "Csapat",
        th3ertek : "Művei"
    },
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
th1.innerHTML = array[0].th1ertek //megadjuk a fejléc tartalmát a tömbböl
th_row.appendChild(th1)

const th2 = document.createElement('th')
th2.innerHTML = array[0].th2ertek //megadjuk a fejléc tartalmát a tömbböl
th_row.appendChild(th2)

const th3 = document.createElement('th')
th3.colSpan = 2 // Az utolsó fejléc cella két cellát von össze
th3.innerHTML = array[0].th3ertek //megadjuk a fejléc tartalmát a tömbböl
th_row.appendChild(th3)

for (let i = 1; i < array.length; i++) {
    const table_row = document.createElement('tr') // Létrehozzuk az új sort
    tbody.appendChild(table_row) // Hozzáadjuk a sort a tbody-hoz

    const td1 = document.createElement('td') // létrehozunk egy sort
    td1.innerHTML = array[i].Szerzo  //megadjuk mit tartalmaz
    table_row.appendChild(td1) //hozzáadjuk a sorhoz

    const td2 = document.createElement('td') // létrehozunk egy sort
    td2.innerHTML = array[i].csapat  //megadjuk mit tartalmaz
    table_row.appendChild(td2)//hozzáadjuk a sorhoz

    const td3 = document.createElement('td')// létrehozunk egy sort
    td3.innerHTML = array[i].Muvei  //megadjuk mit tartalmaz
    table_row.appendChild(td3)//hozzáadjuk a sorhoz

    let td4;
    if (array[i].muvei2) {      td4 = document.createElement('td')// létrehozunk egy sort
        td4.innerHTML = array[i].muvei2//megadjuk mit tartalmaz
        table_row.appendChild(td4) //hozzáadjuk a sorhoz
    }

   
    if (td4 === undefined) {
        td3.colSpan = "2" // Ha nincs td4, akkor a td3 összevonja a két cellát
    } else {
        // Ha van td4, akkor hozzáadjuk a sorhoz
        table_row.appendChild(td4)
    }


}

