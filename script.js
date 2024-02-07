const phrases = [
    "A peacock is a symphony from the right perspective. Authors often misinterpret the cloud as a trumpery goat, when in actuality it feels more like a lanose pot. The literature would have us believe that a birthing taxi is not but a kendo. A wealth is the snow of a daughter. An activity sees a jam as a clypeate permission. This could be, or perhaps some assert that the yellow of a tuna becomes an unposed color. A door is the pump of a scent. A wolf is a puffy discussion.",
    "Before cheetahs, dogs were only spiders. In recent years, a mosquito sees a loss as a petaloid machine. An aluminum is a wolf's granddaughter. A beetle is a honey from the right perspective. In modern times a hail of the library is assumed to be a pruinose coat. Some posit the bardy sea to be less than sunlike. A growth is a pancake from the right perspective. A squirrel sees a rain as a deboned saturday.",
    "A lock is a pastor from the right perspective. An oil is a result's territory. Some posit the phrasal fox to be less than glary. A scrawny slash's radish comes with it the thought that the pesky ophthalmologist is a butter. A sushi is a reaction's flame. A basketball can hardly be considered a varus yellow without also being a scarecrow. We can assume that any instance of a stepdaughter can be construed as a giddy second.",
    "A scent is a comb's drake. A panther is the punishment of a seed. Before pumas, activities were only kitties. The apricot of a chess becomes a propylic uncle. A shelf is a wrench's cherries. Some assert that a can of the attic is assumed to be a tip-up cave. The literature would have us believe that an unfanned bee is not but a laborer. A chicken is the fiber of a route.",
    "Those lambs are nothing more than drops. An ophthalmologist is the shell of a flare. A chess is a camera's inventory. The funny oatmeal reveals itself as a croupous cork to those who look. One cannot separate ants from drumly girls. Their love was, in this moment, a raped typhoon. The stumpy orchestra reveals itself as an unskimmed alley to those who look. The first cracker grass is, in its own way, a server.",
    "A store of the tortellini is assumed to be a valvar learning. Few can name a piebald pakistan that isn't a nubbly cloud. Few can name a fond bobcat that isn't a well magpie. A camp is a bolt's cherries. Their radish was, in this moment, a canny toothpaste. A marble is a dressing from the right perspective. A money is a bath from the right perspective. A joke sees a volcano as a jellied celery.",
    "A needle is a sushi from the right perspective. Authors often misinterpret the reaction as a cistic fang, when in actuality it feels more like an oaklike graphic. Extending this logic, the first wordless colony is, in its own way, a wave. Authors often misinterpret the curve as a furrowed karen, when in actuality it feels more like a softish downtown. A butter sees a soccer as a palmary thermometer. A lycra is the seagull of a kite. A passive crown is a step of the mind.",
    "A motion is a bead's tub. An index is a basin's damage. A balloon is the badger of a shelf. A syrup is a cherry from the right perspective. Few can name an undiverted clover that isn't a rightless snake. A beetle is a regret's cereal. A gear sees a cellar as a bid wren. We can assume that any instance of a kick can be construed as a warmed consonant.",
    "A workshop of the step-grandfather is assumed to be a prim cross. The literature would have us believe that an over oriole is not but a suit. Authors often misinterpret the gasoline as a klutzy kilogram, when in actuality it feels more like a self home. Before games, vegetables were only rates. An open sees a pentagon as a flamy pvc. A pull is a cloud from the right perspective. A chief is a brace from the right perspective. Their coat was, in this moment, a cooing wood.",
    "A town is a lane from the right perspective. A zipper is a gum's soup. Some seemly items are thought of simply as riddles. A picture is a grape's quarter. A kitchen can hardly be considered an endmost minister without also being a stretch. A square is the clam of a sauce. A criminal is a spoon's dictionary. They were lost without the wroth wheel that composed their twist. A fly is the cobweb of a hawk.",
    "A meadowlark is a trench from the right perspective. Authors often misinterpret the trumpet as a goosy jam, when in actuality it feels more like an endways pie. The first staminate athlete is, in its own way, a stamp. A cannon is a harbor from the right perspective. Some level music stores are thought of simply as networks. A statement is a nose's sweater. An ornament sees a gate as a sweetish cloud. Their gear was, in this moment, a dauby moon.",
    "Some diligent endives are thought of simply as shingles. The enthusiastic galley comes from an unpraised water. One cannot separate jumbos from acarpous mothers. In ancient times a sense can hardly be considered a whacky harbor without also being a lamp. In recent years, some posit the smirched gold to be less than untried. A creature is a fruit from the right perspective. A gaudy bomber without sands is truly a router of a park.",
    "Few can name a fledgling frog that isn't a spare panther. Some posit the snakiest network to be less than rose. We know that a maple is a peanut's cherry. Authors often misinterpret the kiwi as a ridgy squirrel, when in actuality it feels more like a blaring park. A railway can hardly be considered a randy hammer without also being a rake. A basketball sees a mirror as a dimming birch. An orange is a rifle from the right perspective. The first bladed mayonnaise is, in its own way, a noise.",
    "A side is a pace's step-uncle. A bomb is the willow of a powder. Few can name a bivalve editor that isn't a poised father. They were lost without the sorrowing jail that composed their woman. The sociology is a wax. A thunderstorm is a wealth's burn. A winter is a journey's key. One cannot separate dogs from somber flows. Few can name a babyish eyeliner that isn't a tense kayak. The hilarious step-uncle comes from a lax bark.",
    "Authors often misinterpret the receipt as a couth cell, when in actuality it feels more like a swanky clock. A soldier is a south america from the right perspective. A repair is the rake of a smile. An uncle sees a lake as an unmourned plastic. Their plate was, in this moment, a crumpled grill. The kick of a receipt becomes a gloved aries. The river of a waiter becomes an ungyved coast. A snowplow is a tub's willow.",
    "A laborer is a twig's mountain. A crocus can hardly be considered a rangy step-grandfather without also being a chicken. A child is a pull's blade. A mind sees a refrigerator as a rainless taxi. A curler is a rule from the right perspective. Some posit the alien boss to be less than webby. A vacation is a pest's face. We can assume that any instance of a squid can be construed as a brisk clerk.",
    "The joke of a pie becomes a viny fender. An octagon is a carrot from the right perspective. We can assume that any instance of a box can be construed as an uncursed view. Their drake was, in this moment, a gravid clam. An actor is a cow from the right perspective. Authors often misinterpret the hat as a proofed yard, when in actuality it feels more like a dastard crank. The bony flight reveals itself as a clotty hose to those who look.",
    "An uncle sees a wave as a sapid rock. Some assert that the impish limit comes from a crumbly eggnog. The tanzania is a man. The skill of a year becomes a bland adapter. They were lost without the worsened body that composed their actor. An agreement is a steel's goat. Authors often misinterpret the horse as a clotty pimple, when in actuality it feels more like a furzy icon. Authors often misinterpret the yak as a bossy underclothes, when in actuality it feels more like a surd north.",
    "One cannot separate sweets from stumpy goldfishes. An onion sees a milkshake as a wrinkled lightning. The smell of a rake becomes a stoneless leather. A cloud is a spy from the right perspective. We can assume that any instance of a jacket can be construed as a swishy friday. The first iron chocolate is, in its own way, a week. The baseball of a wave becomes an untrod step-uncle. A step-uncle is a step-uncle's step-uncle."
];


const typingText = document.querySelector(".typing-text p");
const userInput = document.querySelector(".container .user-input");
const restartBtn = document.querySelector(".content button");
const timeDisplay = document.querySelector(".time span b");
const mistakeDisplay = document.querySelector(".mistake span");
const wpmDisplay = document.querySelector(".wpm span");
const cpmDisplay = document.querySelector(".cpm span");

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = mistakes = isTyping = 0;

function loadPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    typingText.innerHTML = "";
    phrases[randomIndex].split("").forEach(char => {
        let span = `<span>${char}</span>`;
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => userInput.focus());
}

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = userInput.value.split("")[charIndex];
    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if (characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;

        wpmDisplay.innerText = wpm;
        mistakeDisplay.innerText = mistakes;
        cpmDisplay.innerText = charIndex - mistakes;
    } else {
        clearInterval(timer);
        userInput.value = "";
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeDisplay.innerText = timeLeft;

        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpmDisplay.innerText = wpm;
    } else {
        clearInterval(timer);
    }
}

function restartGame() {
    loadPhrase();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    userInput.value = "";
    timeDisplay.innerText = timeLeft;
    wpmDisplay.innerText = 0;
    mistakeDisplay.innerText = 0;
    cpmDisplay.innerText = 0;
}

loadPhrase();
userInput.addEventListener("input", initTyping);
restartBtn.addEventListener("click", restartGame);
