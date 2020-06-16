const box = document.querySelector('.typing')
const text = [
    "Cześć! Jak tam?!!!", 
    "Wow! Cieszę się, że jestesz. Lubię mówić do ludzi!",
    "Jak masz na imię? Może śtanisław? Był tu taki Stanisław kiedyś, spędziliśmy razem piękne wspólne chwile.",
    "Niestety żona kazała mu odejść od monitora o wrzucić węgiele do pieca. Mam nadzieję, że Ty nie masz pieca!",
];
let wordIndex = 0;
let textIndex = 0;
let oldTime = 0;
let speed = 100; // czym większa wartość tym wolniejszy typing

const typing = (newTime) => {
    if(newTime - oldTime > speed) {

        if(wordIndex === text[textIndex].length - 1) {
            if(textIndex === text.length - 1) {
                return;
            }
            
            return setTimeout(() => {
                box.textContent = "";
                textIndex ++;
                wordIndex = 0; 

                requestAnimationFrame(typing)

             }, 2000)
        }

        oldTime = newTime;
        const letter = text[textIndex].substr(wordIndex, 1);
        box.textContent += letter;
        wordIndex++;
    }

    requestAnimationFrame(typing)
};

typing();