var urlBase = "";
var JSONEspeado = {
    "data": {
        "propiedades-opticas": "Propiedades opticas",
        "grupos-minerales": "Grupos-minerales",
        "1": "1",
        "2": "1",
        "3": "1",
        "4": "1",
        "5": "1"
    }
}

window.onload = () => {
    var BtnURLBase = document.querySelector("#BtnURLBase")
    BtnURLBase.addEventListener("click", () => {
        urlBase = document.querySelector("#campoURLBase").value
        //Pedir los datos del servidor

        //Recorrer estos datos y crear cartas en bootstrap
        for (const i of Object.keys(JSONEspeado.data)) {
            var card = document.createElement("div")
            var cardbody = document.createElement("div")
            var img = document.createElement("img")
            var titulo = document.createElement("h5")
            var link = document.createElement("a")




            card.className = "card"
            card.style.width= "18rem"

            cardbody.className = "card-body"

            img.className = "card-img-top img-fluid"
            img.setAttribute("alt",JSONEspeado.data[i])
            img.style.objectFit = "cover"
            img.setAttribute("onerror","this.onerror=null;this.src='static/img/onError.jpg';")
            img.src = "static/img/"+i + ".jpg"

            titulo.className = "card-title"
            titulo.innerHTML = JSONEspeado.data[i]

            link.className = "btn btn-primary"
            link.innerHTML = JSONEspeado.data[i]


            cardbody.appendChild(titulo)
            cardbody.appendChild(link)


            card.appendChild(img)
            card.appendChild(cardbody)
            document.querySelector(".body").appendChild(card)
        }
    })

}


