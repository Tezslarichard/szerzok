const table = document.createElement('table') // létrehozunk egy table elemet
const thead = document.createElement('thead')// létrehozunk egy tablehead elemet
const tbody = document.createElement('tbody')// létrehozunk egy tbody elemet
document.body.appendChild(table) // table elemet hozzá adjuk a htmlhez
table.appendChild(thead) // a thead elemet a table elemhez füzőm
table.appendChild(tbody) // tbody elemet a tablehöz fűzöm


const th_row = document.createElement('tr') // létrehozunk egy tr elemet, amibe tárolni fogjuk a fejléc elemeket
thead.appendChild(th_row) // th_row elemet hozzá füzzük a theadhez

const th = document.createElement('th')// létrehozunk egy th elemet ez a fejléc egyik eleme
thead.appendChild(th)// a th elemet hozzáfüzőm a fejléchez
th.innerHTML = "Szerző neve"//megadom a thnak mi legyen a tartalma

const th1 = document.createElement('th')// létrehozunk egy th elemet ez a fejléc egyik eleme
thead.appendChild(th1)//a th elemet hozzáfüzőm a fejléchez
th1.innerHTML = " Csapat"//megadom a thnak mi legyen a tartalma

const th2 = document.createElement('th')// létrehozunk egy th elemet ez a fejléc egyik eleme
thead.appendChild(th2)//a th elemet hozzáfüzőm a fejléchez
th2.colSpan = 2 // összevonunk 2 cellát
th2.innerHTML = "Művei"//megadom a thnak mi legyen a tartalma


const table_row = document.createElement('tr') // létrehozunk egy tablerow elemet ez lesz a táblázatom első sora
tbody.appendChild(table_row)//ezt hozzáfűzöm a tbodyhoz


const td = document.createElement('td') //létre hozunk egy cellát
table_row.appendChild(td) // ezt a cellát hozzáfűzöm a sorhoz
td.innerHTML = "Vörösmarty Mihály" // és megadom az értékét

const td1 = document.createElement('td')//létre hozunk egy cellát
table_row.appendChild(td1)// ezt a cellát hozzáfűzöm a sorhoz
td1.innerHTML = "romantikus triász" // és megadom az értékét

const td2 = document.createElement('td')//létre hozunk egy cellát
table_row.appendChild(td2)// ezt a cellát hozzáfűzöm a sorhoz
td2.innerHTML = "Zalán futása" // és megadom az értékét

const td3 = document.createElement('td')//létre hozunk egy cellát
table_row.appendChild(td3)// ezt a cellát hozzáfűzöm a sorhoz
td3.innerHTML = "Szózat" // és megadom az értékét

const table_row1 = document.createElement('tr')//egy új sort létrehozunk a táblázatba
tbody.appendChild(table_row1) // és ezt is hozzáfüzöm a tbodyhoz amiben a táblázat van eltárolva

const td4 = document.createElement('td')//létre hozunk egy cellát
table_row1.appendChild(td4)// ezt a cellát hozzáfűzöm a sorhoz,figyelek rá hogy nem az elözőhöz
td4.innerHTML = "Móricz Zsigmond" // és megadom az értékét

const td5 = document.createElement('td')//létre hozunk egy cellát
table_row1.appendChild(td5)// ezt a cellát hozzáfűzöm a sorhoz
td5.innerHTML = "Nyugat I." // és megadom az értékét


const td6 = document.createElement('td')//létre hozunk egy cellát
table_row1.appendChild(td6)// ezt a cellát hozzáfűzöm a sorhoz
td6.colSpan= 2; // összeolvasztunk 2 cellát
td6.innerHTML = "Hét krajcár" // és megadom az értékét


const table_row2 = document.createElement('tr')//egy új sort létrehozunk a táblázatba,megint
tbody.appendChild(table_row2) // és ezt is hozzáfüzöm a tbodyhoz amiben a táblázat van eltárolva

const td7 = document.createElement('td')//létre hozunk egy cellát
table_row2.appendChild(td7)// ezt a cellát hozzáfűzöm a sorhoz
td7.innerHTML="Illyés Gyula" // és megadom az értékét

const td8 = document.createElement('td')//létre hozunk egy cellát
table_row2.appendChild(td8)// ezt a cellát hozzáfűzöm a sorhoz
td8.innerHTML = "Nyugat II." // és megadom az értékét

const td9 = document.createElement('td')//létre hozunk egy cellát
table_row2.appendChild(td9)// ezt a cellát hozzáfűzöm a sorhoz
td9.innerHTML = "Egy mondat a zsarnokságról" // és megadom az értékét

const td10 = document.createElement('td')//létre hozunk egy cellát
table_row2.appendChild(td10)// ezt a cellát hozzáfűzöm a sorhoz
td10.innerHTML = "Puszták népe" // és megadom az értékét

const table_row3 = document.createElement('tr')//egy új sort létrehozunk a táblázatba,megint megint
tbody.appendChild(table_row3) // és ezt is hozzáfüzöm a tbodyhoz amiben a táblázat van eltárolva

const td11 = document.createElement('td')//létre hozunk egy cellát
table_row3.appendChild(td11)// ezt a cellát hozzáfűzöm a sorhoz
td11.innerHTML = "Radnóti Miklós" // és megadom az értékét

const td12 = document.createElement('td')//létre hozunk egy cellát
table_row3.appendChild(td12)// ezt a cellát hozzáfűzöm a sorhoz
td12.innerHTML = "Nyugat III." // és megadom az értékét


const td13 = document.createElement('td')//létre hozunk egy cellát
table_row3.appendChild(td13)// ezt a cellát hozzáfűzöm a sorhoz
td13.innerHTML = "Pogány köszöntő" // és megadom az értékét


const td14 = document.createElement('td')//létre hozunk egy cellát
table_row3.appendChild(td14)// ezt a cellát hozzáfűzöm a sorhoz
td14.innerHTML = "Járkálj csak, halálraítélt" // és megadom az értékét




