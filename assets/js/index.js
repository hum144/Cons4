let primeraSeccion = document.getElementById("primeraSeccion")
let segundaSeccion = document.getElementById("segundaSeccion")
let terceraSeccion = document.getElementById("terceraSeccion")


const fetchApi = async (id, seccion, color) => {
    try {
        let url = (`https://swapi.dev/api/people/${id}`)
        let res = await fetch(url)
        let personaje = await res.json()

        if (id) {
            seccion.innerHTML += `
                                    <div class="col-12 col-md-6 col-lg-4 ">
                                        <div class="single-timeline-content d-flex wow fadeInLeft 2021" data-wow-delay="0.3s"
                                            style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                                            <div class="timeline-icon" style="background-color: ${color};"><i class="fa fa-address-card" aria-hidden="true"></i>
                                            </div>
                                            <div class="timeline-text">
                                                <h6>${personaje.name}</h6>
                                                <p>Estatura: ${personaje.height}cm \n Peso:${personaje.mass}</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    
            `
        }
    } catch (error) {
        console.log(error)
    }
}


// 1
function* personajes1() {
    let i = 1
    while (i <= 5) {
        yield i++
    }
};

let idGen = personajes1();

primeraSeccion.addEventListener("mouseover", () => {
    let id = idGen.next().value;
    let primero = document.getElementById("primero")

    fetchApi(id, primero,"salmon")
})


//2

function* personajes2() {
    let i = 6
    while (i <= 11) {
        yield i++
    }
};

let idGen2 = personajes2();

segundaSeccion.addEventListener("mouseover", () => {
    let id = idGen2.next().value;
    let segundo = document.getElementById("segundo")

    fetchApi(id, segundo, "lightgreen")
})

//3
function* personajes3() {
    let i = 12
    while (i <= 17) {
        yield i++
    }
};

let idGen3 = personajes3();

terceraSeccion.addEventListener("mouseover", () => {
    let id = idGen3.next().value;
    let tercero = document.getElementById("tercero")

    fetchApi(id, tercero, "lightskyblue")
})