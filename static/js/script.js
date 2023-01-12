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

        //Recorrer estos datos
        for (const i of Object.keys(JSONEspeado.data)) {
            var div = document.createElement("div")
            var img = document.createElement("img")


            div.className = "col-3"

            img.alt="Imagen "
            img.style.objectFit = "fill"
            img.setAttribute("onerror","this.onerror=null;this.src='static/img/onError.jpg';")
            img.src = i + ".jpg"


            div.appendChild(img)
            document.querySelector(".body").appendChild(div)
        }
    })

}