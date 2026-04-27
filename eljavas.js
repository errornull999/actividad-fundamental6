function mostrarmemealeatorio() {
    let memes = [
        "https://i.pinimg.com/originals/bd/68/af/bd68af256a4c6fd0ada2f60183e88f39.jpg",
        "https://images7.memedroid.com/images/UPLOADED606/60688f3f3250e.jpeg",
        "https://heraldodemexico.com.mx/wp-content/uploads/2019/09/java_programador-932x1024.jpg",
        "https://images7.memedroid.com/images/UPLOADED763/650a995496bd2.jpeg",
        "https://images3.memedroid.com/images/UPLOADED175/65bbbf701ceed.jpeg"
    ];
    let memealeatorio = memes[Math.floor(Math.random() * memes.length)];
    document.querySelector("#meme").innerHTML = `<img src="${memealeatorio}" alt="Meme Aleatorio">`;
}
        let siButton = document.getElementById("sibutton");
        let noButton = document.getElementById("noButton");
        let resultado = document.getElementById("resultado");

        siButton.addEventListener("click", () => {
            resultado.textContent = "¡Gracias! 😁👍";
            resultado.style.color = "green";
        });

        noButton.addEventListener("click", () => {
            resultado.textContent = "Ok 😢👎";
            resultado.style.color = "blue";
        });
document.getElementById("avisoBtn").addEventListener("click", () => {
            Swal.fire("Aviso", "Estas avisado", "info");
        });

        document.getElementById("errorBtn").addEventListener("click", () => {
            Swal.fire("Error", "Este mensaje solo se debería mostrar en un error", "error");
        });

        document.getElementById("atencionBtn").addEventListener("click", () => {
            Swal.fire("Atención", "Gracias por su atención", "warning");
        });