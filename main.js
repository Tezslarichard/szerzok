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


const th_row = document.createElement('tr') // létrehozunk egy tr elemet, amibe tárolni fogjuk a fejléc elemeket
thead.appendChild(th_row) // th_row elemet hozzá füzzük a theadhez

const th = document.createElement('th')// létrehozunk egy th elemet ez a fejléc egyik eleme
thead.appendChild(th)// a th elemet hozzáfüzőm a fejléchez
th.innerHTML = array[0].th1ertek //megadom a thnak az értékét úgy hogy kiválasztom melyik tömbön belül van és a helyes adatot irom

const th1 = document.createElement('th')// létrehozunk egy th elemet ez a fejléc egyik eleme
thead.appendChild(th1)//a th elemet hozzáfüzőm a fejléchez
th1.innerHTML = array[0].th2ertek //megadom a thnak az értékét úgy hogy kiválasztom melyik tömbön belül van és a helyes adatot irom

const th2 = document.createElement('th')// létrehozunk egy th elemet ez a fejléc egyik eleme
thead.appendChild(th2)//a th elemet hozzáfüzőm a fejléchez
th2.colSpan = 2 // összevonunk 2 cellát
th2.innerHTML = array[0].th3ertek //megadom a thnak az értékét úgy hogy kiválasztom melyik tömbön belül van és a helyes adatot irom


const table_row = document.createElement('tr') // létrehozunk egy tablerow elemet ez lesz a táblázatom első sora
tbody.appendChild(table_row)//ezt hozzáfűzöm a tbodyhoz

const td = document.createElement('td') //létre hozunk egy cellát
table_row.appendChild(td) // ezt a cellát hozzáfűzöm a sorhoz
td.innerHTML = array[1].Szerzo //megadom a cellának az adatát úgy hogy kiválasztom az tömbböl hogy hanyadik elemen belül van az adat

const td1 = document.createElement('td')//létre hozunk egy cellát
table_row.appendChild(td1)// ezt a cellát hozzáfűzöm a sorhoz
td1.innerHTML = array[1].csapat //megadom a cellának az adatát úgy hogy kiválasztom az tömbböl hogy hanyadik elemen belül van az adat


const td2 = document.createElement('td')//létre hozunk egy cellát
table_row.appendChild(td2)// ezt a cellát hozzáfűzöm a sorhoz
td2.innerHTML = array[1].Muvei //megadom a cellának az adatát úgy hogy kiválasztom az tömbböl hogy hanyadik elemen belül van az adat


const td3 = document.createElement('td')//létre hozunk egy cellát
table_row.appendChild(td3)// ezt a cellát hozzáfűzöm a sorhoz
td3.innerHTML =array[1].muvei2  //megadom a cellának az adatát úgy hogy kiválasztom az tömbböl hogy hanyadik elemen belül van az adat

const table_row1 = document.createElement('tr')//egy új sort létrehozunk a táblázatba
tbody.appendChild(table_row1) // és ezt is hozzáfüzöm a tbodyhoz amiben a táblázat van eltárolva



const td4 = document.createElement('td')//létre hozunk egy cellát
table_row1.appendChild(td4)// ezt a cellát hozzáfűzöm a sorhoz,figyelek rá hogy nem az elözőhöz
td4.innerHTML = array[2].Szerzo //megadom a cellának az adatát úgy hogy kiválasztom az tömbböl hogy hanyadik elemen belül van az adat


const td5 = document.createElement('td')//létre hozunk egy cellát
table_row1.appendChild(td5)// ezt a cellát hozzáfűzöm a sorhoz
td5.innerHTML = array[2].csapat //megadom a cellának az adatát úgy hogy kiválasztom az tömbböl hogy hanyadik elemen belül van az adat


const td6 = document.createElement('td')//létre hozunk egy cellát
table_row1.appendChild(td6)// ezt a cellát hozzáfűzöm a sorhoz
td6.colSpan= 2; // összeolvasztunk 2 cellát
td6.innerHTML = array[2].Muvei //megadom a cellának az adatát úgy hogy kiválasztom az tömbböl hogy hanyadik elemen belül van az adat


const table_row2 = document.createElement('tr')//egy új sort létrehozunk a táblázatba,megint
tbody.appendChild(table_row2) // és ezt is hozzáfüzöm a tbodyhoz amiben a táblázat van eltárolva



const td7 = document.createElement('td')//létre hozunk egy cellát
table_row2.appendChild(td7)// ezt a cellát hozzáfűzöm a sorhoz
td7.innerHTML = array[3].Szerzo //megadom a cellának az adatát úgy hogy kiválasztom az tömbböl hogy hanyadik elemen belül van az adat


const td8 = document.createElement('td')//létre hozunk egy cellát
table_row2.appendChild(td8)// ezt a cellát hozzáfűzöm a sorhoz
td8.innerHTML = array[3].csapat //megadom a cellának az adatát úgy hogy kiválasztom az tömbböl hogy hanyadik elemen belül van az adat


const td9 = document.createElement('td')//létre hozunk egy cellát
table_row2.appendChild(td9)// ezt a cellát hozzáfűzöm a sorhoz
td9.innerHTML = array[3].Muvei //megadom a cellának az adatát úgy hogy kiválasztom az tömbböl hogy hanyadik elemen belül van az adat


const td10 = document.createElement('td')//létre hozunk egy cellát
table_row2.appendChild(td10)// ezt a cellát hozzáfűzöm a sorhoz
td10.innerHTML = array[3].muvei2 //megadom a cellának az adatát úgy hogy kiválasztom az tömbböl hogy hanyadik elemen belül van az adat

const table_row3 = document.createElement('tr')//egy új sort létrehozunk a táblázatba,megint megint
tbody.appendChild(table_row3) // és ezt is hozzáfüzöm a tbodyhoz amiben a táblázat van eltárolva


const td11 = document.createElement('td')//létre hozunk egy cellát
table_row3.appendChild(td11)// ezt a cellát hozzáfűzöm a sorhoz
td11.innerHTML = array[4].Szerzo//megadom a cellának az adatát úgy hogy kiválasztom az tömbböl hogy hanyadik elemen belül van az adat


const td12 = document.createElement('td')//létre hozunk egy cellát
table_row3.appendChild(td12)// ezt a cellát hozzáfűzöm a sorhoz
td12.innerHTML = array[4].csapat //megadom a cellának az adatát úgy hogy kiválasztom az tömbböl hogy hanyadik elemen belül van az adat


const td13 = document.createElement('td')//létre hozunk egy cellát
table_row3.appendChild(td13)// ezt a cellát hozzáfűzöm a sorhoz
td13.innerHTML = array[4].Muvei //megadom a cellának az adatát úgy hogy kiválasztom az tömbböl hogy hanyadik elemen belül van az adat

const td14 = document.createElement('td')//létre hozunk egy cellát
table_row3.appendChild(td14)// ezt a cellát hozzáfűzöm a sorhoz
td14.innerHTML = array[4].muvei2 //megadom a cellának az adatát úgy hogy kiválasztom az tömbböl hogy hanyadik elemen belül van az adat


