const table = document.createElement('table') // létrehozunk egy table elemet
const thead = document.createElement('thead')// létrehozunk egy tablehead elemet
const tbody = document.createElement('tbody')// létrehozunk egy tbody elemet
document.body.appendChild(table) // table elemet hozzá adjuk a htmlhez
table.appendChild(thead) // a thead elemet a table elemhez füzőm
table.appendChild(tbody) // tbody elemet a tablehöz fűzöm



const objektum = {                            //objektumba raktam az adatokat ami a headerbe van
    th1ertek : "Szerző neve",
    th2ertek : "Csapat",
    th3ertek : "Művei"
}

const th_row = document.createElement('tr') // létrehozunk egy tr elemet, amibe tárolni fogjuk a fejléc elemeket
thead.appendChild(th_row) // th_row elemet hozzá füzzük a theadhez

const th = document.createElement('th')// létrehozunk egy th elemet ez a fejléc egyik eleme
thead.appendChild(th)// a th elemet hozzáfüzőm a fejléchez
th.innerHTML = objektum.th1ertek //megadom a thnak az értékét úgy hogy kiválasztom az objketumból

const th1 = document.createElement('th')// létrehozunk egy th elemet ez a fejléc egyik eleme
thead.appendChild(th1)//a th elemet hozzáfüzőm a fejléchez
th1.innerHTML = objektum.th2ertek //megadom a thnak az értékét úgy hogy kiválasztom az objketumból

const th2 = document.createElement('th')// létrehozunk egy th elemet ez a fejléc egyik eleme
thead.appendChild(th2)//a th elemet hozzáfüzőm a fejléchez
th2.colSpan = 2 // összevonunk 2 cellát
th2.innerHTML = objektum.th3ertek //megadom a thnak az értékét úgy hogy kiválasztom az objketumból


const table_row = document.createElement('tr') // létrehozunk egy tablerow elemet ez lesz a táblázatom első sora
tbody.appendChild(table_row)//ezt hozzáfűzöm a tbodyhoz

const objtabla = {    // ugyan ugy objektumba elrakom a táblának az adatait
    tartalom1 : "Vörösmarty Mihály",
    tartalom2 : "romantikus triász",
    tartalom3 : "Zalán futása",
    tartalom4 : "Szózat"

}
 
const td = document.createElement('td') //létre hozunk egy cellát
table_row.appendChild(td) // ezt a cellát hozzáfűzöm a sorhoz
td.innerHTML = objtabla.tartalom1  //megadom a cellának az adatát úgy hogy kiválasztom az objektumból melyik kell

const td1 = document.createElement('td')//létre hozunk egy cellát
table_row.appendChild(td1)// ezt a cellát hozzáfűzöm a sorhoz
td1.innerHTML = objtabla.tartalom2 //megadom a cellának az adatát úgy hogy kiválasztom az objektumból melyik kell


const td2 = document.createElement('td')//létre hozunk egy cellát
table_row.appendChild(td2)// ezt a cellát hozzáfűzöm a sorhoz
td2.innerHTML = objtabla.tartalom3 //megadom a cellának az adatát úgy hogy kiválasztom az objektumból melyik kell


const td3 = document.createElement('td')//létre hozunk egy cellát
table_row.appendChild(td3)// ezt a cellát hozzáfűzöm a sorhoz
td3.innerHTML =objtabla.tartalom4  //megadom a cellának az adatát úgy hogy kiválasztom az objektumból melyik kell

const table_row1 = document.createElement('tr')//egy új sort létrehozunk a táblázatba
tbody.appendChild(table_row1) // és ezt is hozzáfüzöm a tbodyhoz amiben a táblázat van eltárolva


const objktabla ={                    //eltárolom a második sornak az adatait egy objektumba
    tartalom5 : "Móricz Zsigmond",
    tartalom6 : "Nyugat I.",
    tartalom7 : "Hét krajcár"
}

const td4 = document.createElement('td')//létre hozunk egy cellát
table_row1.appendChild(td4)// ezt a cellát hozzáfűzöm a sorhoz,figyelek rá hogy nem az elözőhöz
td4.innerHTML = objktabla.tartalom5 //megadom a cellának az adatát úgy hogy kiválasztom az objektumból melyik kell


const td5 = document.createElement('td')//létre hozunk egy cellát
table_row1.appendChild(td5)// ezt a cellát hozzáfűzöm a sorhoz
td5.innerHTML = objktabla.tartalom6 //megadom a cellának az adatát úgy hogy kiválasztom az objektumból melyik kell


const td6 = document.createElement('td')//létre hozunk egy cellát
table_row1.appendChild(td6)// ezt a cellát hozzáfűzöm a sorhoz
td6.colSpan= 2; // összeolvasztunk 2 cellát
td6.innerHTML = objktabla.tartalom7 //megadom a cellának az adatát úgy hogy kiválasztom az objektumból melyik kell


const table_row2 = document.createElement('tr')//egy új sort létrehozunk a táblázatba,megint
tbody.appendChild(table_row2) // és ezt is hozzáfüzöm a tbodyhoz amiben a táblázat van eltárolva

const tablak ={                    // eltárolom egy objektumba a 3.sor adatait
    tartalom8 : "Illyés Gyula",
    tartalom9 : "Nyugat II.",
    tartalom10 : "Egy mondat a zsarnokságról",
    tartalom11 :  "Puszták népe"
}

const td7 = document.createElement('td')//létre hozunk egy cellát
table_row2.appendChild(td7)// ezt a cellát hozzáfűzöm a sorhoz
td7.innerHTML = tablak.tartalom8 //megadom a cellának az adatát úgy hogy kiválasztom az objektumból melyik kell


const td8 = document.createElement('td')//létre hozunk egy cellát
table_row2.appendChild(td8)// ezt a cellát hozzáfűzöm a sorhoz
td8.innerHTML = tablak.tartalom9 //megadom a cellának az adatát úgy hogy kiválasztom az objektumból melyik kell


const td9 = document.createElement('td')//létre hozunk egy cellát
table_row2.appendChild(td9)// ezt a cellát hozzáfűzöm a sorhoz
td9.innerHTML = tablak.tartalom10 //megadom a cellának az adatát úgy hogy kiválasztom az objektumból melyik kell


const td10 = document.createElement('td')//létre hozunk egy cellát
table_row2.appendChild(td10)// ezt a cellát hozzáfűzöm a sorhoz
td10.innerHTML = tablak.tartalom11 //megadom a cellának az adatát úgy hogy kiválasztom az objektumból melyik kell

const table_row3 = document.createElement('tr')//egy új sort létrehozunk a táblázatba,megint megint
tbody.appendChild(table_row3) // és ezt is hozzáfüzöm a tbodyhoz amiben a táblázat van eltárolva

const tabla = {                           //4.sor adatait szintúgy egy objektumba rakom
    tartalom12 : "Radnóti Miklós",
    tartalom13 : "Nyugat III.",
    tartalom14 : "Pogány köszöntő",
    tartalom15 : "Járkálj csak, halálraítélt"
}

const td11 = document.createElement('td')//létre hozunk egy cellát
table_row3.appendChild(td11)// ezt a cellát hozzáfűzöm a sorhoz
td11.innerHTML = tabla.tartalom12//megadom a cellának az adatát úgy hogy kiválasztom az objektumból melyik kell


const td12 = document.createElement('td')//létre hozunk egy cellát
table_row3.appendChild(td12)// ezt a cellát hozzáfűzöm a sorhoz
td12.innerHTML = tabla.tartalom13 //megadom a cellának az adatát úgy hogy kiválasztom az objektumból melyik kell


const td13 = document.createElement('td')//létre hozunk egy cellát
table_row3.appendChild(td13)// ezt a cellát hozzáfűzöm a sorhoz
td13.innerHTML = tabla.tartalom14 //megadom a cellának az adatát úgy hogy kiválasztom az objektumból melyik kell

const td14 = document.createElement('td')//létre hozunk egy cellát
table_row3.appendChild(td14)// ezt a cellát hozzáfűzöm a sorhoz
td14.innerHTML = tabla.tartalom15 //megadom a cellának az adatát úgy hogy kiválasztom az objektumból melyik kell


