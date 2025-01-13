/**
 * egy ciklussal megcsinálom a fejlécemet 
 */
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

/**
 * ciklussal megcsinálom a függvényemet
 * @param {array} array
 */
function rendetrable(){  //függvény bevezetése, nincs parametere
    
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
 * legenerálom lineárisan a formomat
 */
function generateform(){ //létrehozok egy függvényt
    const form1 = document.createElement('form') // létrehozok egy form html elemet
    form1.id = 'form' // megadom az idját
    document.body.appendChild(form1) // hozzáfűzöm a html törzséhez
    
    const div1 = document.createElement('div') //létrehozok egy divet
    div1.classList.add('field') //adok neki egy classt
    
    const label1 = document.createElement('label') //létrehozok egy labelt
    label1.htmlFor = "szerzo_nev" // megadom a forját
    label1.innerText = "Szerző neve:" //és az innertextjét
    div1.appendChild(label1) // hozzáfűzöm a divhez
    
    
    const input = document.createElement('input') //létrehozok egy inputot
    input.type = 'text' //megadom a típusát hogy text
    input.id = 'szerzo_nev' // az idját is megadom
    input.name = 'szerzo_nev' // és a name et is megadom
    div1.appendChild(input) // ezt hozzáadom a divemhez
    
    
    const span_error = document.createElement('span') //csinálok egy spant
    span_error.classList.add('error') //rárakok egy error classt
    div1.appendChild(span_error) //és hozzáadom a divemhez
    
    const div2 = document.createElement('div') //létrehozok egy divet
    div2.classList.add('field')//adok neki egy classt
    
    const label2 = document.createElement('label')//létrehozok egy labelt
    label2.htmlFor = "group"// megadom a forját
    label2.innerText = "Csapat"//és az innertextjét
    div2.appendChild(label2)// hozzáfűzöm a divhez
    
    
    const input1 = document.createElement('input')//létrehozok egy inputot
    input1.type = 'text'//megadom a típusát hogy text
    input1.id = 'group'// az idját is megadom
    input1.name = 'group'// és a name et is megadom
    div2.appendChild(input1)// ezt hozzáadom a divemhez
    
    
    const span_error1 = document.createElement('span')//csinálok egy spant
    span_error1.classList.add('error')//rárakok egy error classt
    div2.appendChild(span_error1)//és hozzáadom a divemhez
    
    
    const div3 = document.createElement('div')//létrehozok egy divet
    div3.classList.add('field')//adok neki egy classt
    
    const label3 = document.createElement('label')//létrehozok egy labelt
    label3.htmlFor = "mu1"// megadom a forját
    label3.innerText = "Elso mű: "//és az innertextjét
    div3.appendChild(label3)// hozzáfűzöm a divhez
    
    
    const input2 = document.createElement('input')//létrehozok egy inputot
    input2.type = 'text'//megadom a típusát hogy text
    input2.id = 'mu1'// az idját is megadom
    input2.name = 'mu1'// és a name et is megadom
    div3.appendChild(input2)// ezt hozzáadom a divemhez
    
    
    const span_error2 = document.createElement('span')//csinálok egy spant
    span_error2.classList.add('error')//rárakok egy error classt
    div3.appendChild(span_error2)//és hozzáadom a divemhez
    
    
    const div4 = document.createElement('div')//létrehozok egy divet
    div4.classList.add('field')//adok neki egy classt
    
    const label4 = document.createElement('label')//létrehozok egy labelt
    label4.htmlFor = "masodik"// megadom a forját
    label4.innerText = "Szeretnél megadni második művet is?"//és az innertextjét
    div4.appendChild(label4)// hozzáfűzöm a divhez
    
    
    const input3 = document.createElement('input')//létrehozok egy inputot
    input3.name = "masodik"// és a name et is megadom
    input3.id = 'masodik'// az idját is megadom
    input3.type = 'checkbox' //megadom a típusát hogy checkbox
    div4.appendChild(input3) //hozzáfűzöm a divemhez
    
    
    
    const div5 = document.createElement('div')//létrehozok egy divet
    div5.classList.add('field')//adok neki egy classt
    
    const label5 = document.createElement('label')//létrehozok egy labelt
    label5.htmlFor = "mu2"// megadom a forját
    label5.innerText = "Második mű: "//és az innertextjét
    div5.appendChild(label5)// hozzáfűzöm a divhez
    
    
    const input4 = document.createElement('input')//létrehozok egy inputot
    input4.type = 'text'//megadom a típusát hogy text
    input4.id = 'mu2'// az idját is megadom
    input4.name = 'mu2'// és a name et is megadom
    div5.appendChild(input4)//hozzáfűzöm a divemhez
    
    
    const span_error3 = document.createElement('span') //csinálok egy spant
    span_error3.classList.add('error') //adok neki egy error classt
    div5.appendChild(span_error3) //hozzáfűzöm a divemhez
    
    const button = document.createElement('button') //csinálok egy gombot
    button.type = 'submit' //megadom hogy mi a típusa
    button.innerText = 'Hozzáadás' //és az innertextjét is megadom
    
    
    form1.appendChild(div1) //a divjeimet hozzáadom a formomhoz
    form1.appendChild(div2)//a divjeimet hozzáadom a formomhoz
    form1.appendChild(div3)//a divjeimet hozzáadom a formomhoz
    form1.appendChild(div4)//a divjeimet hozzáadom a formomhoz
    form1.appendChild(div5)//a divjeimet hozzáadom a formomhoz
    form1.appendChild(button)// a gombot is hozzáadom a formomhoz
    
    
    
    }

    /**
 * ellenörzi az adatokat ha nincsenek megadva bekéri hogy adjad meg
 * @param {HTMLElement} szerzo_input 
 * @param {HTMLElement} csapatnev_input 
 * @param {HTMLElement} muelem_input 
 * @returns 
 */
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
/**
 * ha üres az értékem akkor rátesz egy error class és beirjuk a hiba uzit
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
