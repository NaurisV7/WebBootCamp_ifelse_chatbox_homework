let input = document.getElementById("name");
let input2 = document.getElementById("kajuties");
let div = document.getElementById("labi");

function juties () {
    if (input.value !== "") {
        let jautajums1 = document.getElementById("jautajums1");
        jautajums1.innerHTML = "Sveiks/a " + input.value + ", kā Tu šodien jūties?";
        document.getElementById("divjautajums1").classList.remove("hidden");
        if (input2.value === "labi" || input2.value === "Labi") {
            let p = document.createElement("p")
            div.appendChild(p);
            p.innerHTML = "Forši, ka Tu labi jūties, jo es arī tā jūtos!";
            p.classList.add("margin")
        } else if (input2.value === "ļoti labi" || input2.value === "loti labi" || input2.value === "Ļoti labi" || input2.value === "Loti labi") {
            let p = document.createElement("p")
            div.appendChild(p);
            p.innerHTML = "Izcili, es arī jūtos fantastiski!";
            p.classList.add("margin")
        } else if (input2.value === "slikti" || input2.value === "Slikti") {
            let p = document.createElement("p")
            div.appendChild(p);
            p.innerHTML = "Cik žēl, ka Tu tā jūties, iesaku atrast kādu ar ko izrunāties, lai labāk justos!";
            p.classList.add("margin")
        } else if (input2.value === "normāli" || input2.value === "normali" || input2.value === "Normāli" || input2.value === "Normali") {
            let p = document.createElement("p")
            div.appendChild(p);
            p.innerHTML = "Lielākā daļa cilvēku tā jūtās, bet labāk, tā, nekā slikti!";
            p.classList.add("margin")
        }/* Izkomentēju, jo nepatika, kā izskatās ar šo
        else {
            let ievadiet = document.createElement("p");
            div.appendChild(ievadiet);
            ievadiet.innerHTML = "Lūdzu ievadiet kā Jūs jūtaties!";
        } */
    } /* šis man arī nepatika, bet else statements ir iznamtots! :D
    else {
        let vardu = document.createElement("p");
        div.appendChild(vardu);
        vardu.innerHTML = "Lūdzu ievadiet savu vārdu!";
    }
    */
}
