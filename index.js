const numberBull = document.querySelector("h3");
let number = 0;

const bubbleMaker = () => {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);

    // Ici on créer une variable afin de pouvoir donnée une taille à nos bulles
    // qui auront le même height & width afin d'avoir un cercle
    const size = Math.random() *  200 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;

    //Ici on définit son positionnement en left et en top
    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "%" ;

    //Ici on créer une variable afin de déterminer de quel coté la bulle va être généré
    const plusMinus = Math.random() > 0.5 ? 1 : -1;

    //Ici on définit le sens de direction
    bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

    //Ici on supprimer les bulles lors du click & on ajoute +1 au conteur
    bubble.addEventListener("click",() => {
        number++;
        //Ici on affecte la valeur à numberBull
        numberBull.textContent = number;
        bubble.remove();
        console.log(number)
    })
    // Ici on créer une fonction afin de supprimer les bulles au bout de 8s
    setTimeout(() => {
        bubble.remove();
    }, 8000);
};

//Ici on génère des bubbles illimité
//On appelant ma fonction en créant une bulle tout les 0.3s
setInterval(bubbleMaker, 100);






