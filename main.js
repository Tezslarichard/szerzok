const table = document.createElement('table') // létrehozunk egy table elemet
const thead = document.createElement('thead')// létrehozunk egy tablehead elemet
const tbody = document.createElement('tbody')// létrehozunk egy tbody elemet
document.body.appendChild(table) // table elemet hozzá adjuk a htmlhez
table.appendChild(thead) // a thead elemet a table elemhez füzőm
table.appendChild(tbody) // tbody elemet a tablehöz fűzöm

const th1ertek = "Szerző neve"  // thknak a tartalmát külön változóba raktam
const th2ertek = "Csapat"  // thknak a tartalmát külön változóba raktam
const th3ertek = "Művei" // thknak a tartalmát külön változóba raktam


const th_row = document.createElement('tr') // létrehozunk egy tr elemet, amibe tárolni fogjuk a fejléc elemeket
thead.appendChild(th_row) // th_row elemet hozzá füzzük a theadhez

const th = document.createElement('th')// létrehozunk egy th elemet ez a fejléc egyik eleme
thead.appendChild(th)// a th elemet hozzáfüzőm a fejléchez
th.innerHTML = th1ertek //megadom a thnak az értékét változoval 

const th1 = document.createElement('th')// létrehozunk egy th elemet ez a fejléc egyik eleme
thead.appendChild(th1)//a th elemet hozzáfüzőm a fejléchez
th1.innerHTML = th2ertek //megadom a thnak az értékét változoval 

const th2 = document.createElement('th')// létrehozunk egy th elemet ez a fejléc egyik eleme
thead.appendChild(th2)//a th elemet hozzáfüzőm a fejléchez
th2.colSpan = 2 // összevonunk 2 cellát
th2.innerHTML = th3ertek//megadom a thnak az értékét változoval 


const table_row = document.createElement('tr') // létrehozunk egy tablerow elemet ez lesz a táblázatom első sora
tbody.appendChild(table_row)//ezt hozzáfűzöm a tbodyhoz

const tartalom1 = "Vörösmarty Mihály" //táblázatba az értékeket változoba raktam
const td = document.createElement('td') //létre hozunk egy cellát
table_row.appendChild(td) // ezt a cellát hozzáfűzöm a sorhoz
td.innerHTML = tartalom1  //meghívom a változót amiben benne van az érték

const tartalom2 ="romantikus triász"//táblázatba az értékeket változoba raktam
const td1 = document.createElement('td')//létre hozunk egy cellát
table_row.appendChild(td1)// ezt a cellát hozzáfűzöm a sorhoz
td1.innerHTML = tartalom2 //meghívom a változót amiben benne van az érték

const tartalom3 = "Zalán futása"//táblázatba az értékeket változoba raktam
const td2 = document.createElement('td')//létre hozunk egy cellát
table_row.appendChild(td2)// ezt a cellát hozzáfűzöm a sorhoz
td2.innerHTML = tartalom3 //meghívom a változót amiben benne van az érték

const tartalom4 = "Szózat"//táblázatba az értékeket változoba raktam
const td3 = document.createElement('td')//létre hozunk egy cellát
table_row.appendChild(td3)// ezt a cellát hozzáfűzöm a sorhoz
td3.innerHTML =tartalom4  //meghívom a változót amiben benne van az érték

const table_row1 = document.createElement('tr')//egy új sort létrehozunk a táblázatba
tbody.appendChild(table_row1) // és ezt is hozzáfüzöm a tbodyhoz amiben a táblázat van eltárolva

const tartalom5 = "Móricz Zsigmond"//táblázatba az értékeket változoba raktam
const td4 = document.createElement('td')//létre hozunk egy cellát
table_row1.appendChild(td4)// ezt a cellát hozzáfűzöm a sorhoz,figyelek rá hogy nem az elözőhöz
td4.innerHTML = tartalom5 //meghívom a változót amiben benne van az érték

const tartalom6 = "Nyugat I."//táblázatba az értékeket változoba raktam
const td5 = document.createElement('td')//létre hozunk egy cellát
table_row1.appendChild(td5)// ezt a cellát hozzáfűzöm a sorhoz
td5.innerHTML = tartalom6 //meghívom a változót amiben benne van az érték

const tartalom7 = "Hét krajcár"//táblázatba az értékeket változoba raktam
const td6 = document.createElement('td')//létre hozunk egy cellát
table_row1.appendChild(td6)// ezt a cellát hozzáfűzöm a sorhoz
td6.colSpan= 2; // összeolvasztunk 2 cellát
td6.innerHTML = tartalom7 //meghívom a változót amiben benne van az érték


const table_row2 = document.createElement('tr')//egy új sort létrehozunk a táblázatba,megint
tbody.appendChild(table_row2) // és ezt is hozzáfüzöm a tbodyhoz amiben a táblázat van eltárolva


const tartalom8 = "Illyés Gyula"//táblázatba az értékeket változoba raktam
const td7 = document.createElement('td')//létre hozunk egy cellát
table_row2.appendChild(td7)// ezt a cellát hozzáfűzöm a sorhoz
td7.innerHTML = tartalom8 //meghívom a változót amiben benne van az érték

const tartalom9 = "Nyugat II."//táblázatba az értékeket változoba raktam
const td8 = document.createElement('td')//létre hozunk egy cellát
table_row2.appendChild(td8)// ezt a cellát hozzáfűzöm a sorhoz
td8.innerHTML = tartalom9 //meghívom a változót amiben benne van az érték

const tartalom10 =  "Egy mondat a zsarnokságról"//táblázatba az értékeket változoba raktam
const td9 = document.createElement('td')//létre hozunk egy cellát
table_row2.appendChild(td9)// ezt a cellát hozzáfűzöm a sorhoz
td9.innerHTML = tartalom10 //meghívom a változót amiben benne van az érték

const tartalom11 =  "Puszták népe" //táblázatba az értékeket változoba raktam
const td10 = document.createElement('td')//létre hozunk egy cellát
table_row2.appendChild(td10)// ezt a cellát hozzáfűzöm a sorhoz
td10.innerHTML = tartalom11 //meghívom a változót amiben benne van az érték

const table_row3 = document.createElement('tr')//egy új sort létrehozunk a táblázatba,megint megint
tbody.appendChild(table_row3) // és ezt is hozzáfüzöm a tbodyhoz amiben a táblázat van eltárolva

const tartalom12 = "Radnóti Miklós"//táblázatba az értékeket változoba raktam
const td11 = document.createElement('td')//létre hozunk egy cellát
table_row3.appendChild(td11)// ezt a cellát hozzáfűzöm a sorhoz
td11.innerHTML = tartalom12//meghívom a változót amiben benne van az érték

const tartalom13 = "Nyugat III."//táblázatba az értékeket változoba raktam
const td12 = document.createElement('td')//létre hozunk egy cellát
table_row3.appendChild(td12)// ezt a cellát hozzáfűzöm a sorhoz
td12.innerHTML = tartalom13 //meghívom a változót amiben benne van az érték

const tartalom14 = "Pogány köszöntő"//táblázatba az értékeket változoba raktam
const td13 = document.createElement('td')//létre hozunk egy cellát
table_row3.appendChild(td13)// ezt a cellát hozzáfűzöm a sorhoz
td13.innerHTML = tartalom14 //meghívom a változót amiben benne van az érték

const tartalom15 = "Járkálj csak, halálraítélt"//táblázatba az értékeket változoba raktam
const td14 = document.createElement('td')//létre hozunk egy cellát
table_row3.appendChild(td14)// ezt a cellát hozzáfűzöm a sorhoz
td14.innerHTML = tartalom15 //meghívom a változót amiben benne van az érték


