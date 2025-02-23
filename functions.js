/**
 * ez a függvény végig fut a kistömbön ami emgtalálható benne csinál egy új sort ami a fejléc sorom lesz
 *  és minden adatnál új cellába rakja ezeket és ha elér a művei adathoz elér akkor egyesit 2 cellát
 */
function fejlecgeneralas(thead) {  //ez egy funkcio
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

/**
 * függvényem végigmegy a tömbömön és mindegyik új elemnél csinál egy sort és minden
 * adatnál csinál egy ceellát amit eltárol abba és hogyha nincsen második mű akkor a cellákat egyesíti
 * @param {Array} array
 */
function rendetrable(array,tbody){  //függvény bevezetése, nincs parametere
    
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


/**
 * 
 * @param {Array} tablazat 
 * ezzel a függvénnyel egyessével generálom a formban lévő elemeket a divet a label a spant az inputot
 * megadom az idjukat for jukat name tagjuket és a típusait majd ezt hozzá adom a meglévo divhez amibe irtam
 */
function generateform(tablazat){ //létrehozok egy függvényt
    const form1 = document.createElement('form') // létrehozok egy form html elemet
    form1.id = 'form' // megadom az idját
    document.body.appendChild(form1) // hozzáfűzöm a html törzséhez
    
    for (const elem of tablazat) { //végigmegyek a formelemeken egy ciklussal
        
        const div = document.createElement('div') //létrehozok egy divet
        div.classList.add('field') //hozzáadok egy classt a divhez
        form1.appendChild(div) //hozzáadom a formhoz

        const label = document.createElement('label') //létrehozok egy labelt
        label.htmlFor = elem.htmlfor //megadom az idját
        label.innerHTML = elem.text //megadom a szövegét
        div.appendChild(label) //hozzáadom a divhez


        const input = document.createElement('input') //létrehozok egy inputot
        input.id = elem.htmlfor //megadom az idját
        input.name = elem.htmlfor //megadom a name tagját
        input.type = elem.inputType //megadom a típusát
        div.appendChild(input) //hozzáadom a divhez


        const span = document.createElement('span') //létrehozok egy spant
        span.classList.add('error') //hozzáadok egy classt
        div.appendChild(span) //hozzáadom a divhez

        const br1 = document.createElement('br') //létrehozok egy br-t
        label.appendChild(br1) //hozzáadom a divhez

        const br2 = document.createElement('br') //létrehozok egy br-t
        label.appendChild(br2) //hozzáadom a divhez

    }
    const button = document.createElement('button') //csinálok egy gombot
    button.type = 'submit' //megadom hogy mi a típusa
    button.innerText = 'Hozzáadás' //és az innertextjét is megadom
    form1.appendChild(button) //hozzáadom a formhoz
    
    }

/**
 * Ez a függvény arra szolgál hogy a három mezo a szero_input,csapatnev_input,
 * muelem_input ki van-e töltve, és ha nincsen kitöltve akkor hibaüzenetet ír
 * @param {HTMLElement} szerzo_input 
 * @param {HTMLElement} csapatnev_input 
 * @param {HTMLElement} muelem_input 
 * @returns 
 */
/**
 * ez a függvény ellenörzi hogy az inputhtmlelement üres e. Ha üres, akkor jelzi egy hibaüzenettel és rárak egy error classt
 * majd visszaad egy boolean értéket ami azt jelenti hogy trueval vagy falseal tér vissza
 * @param {HTMLElement} inputhtmlElement 
 * @param {string} errormessage 
 * @returns {boolean}
 */
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
