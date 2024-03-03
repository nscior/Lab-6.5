const adjectiveArr = ["Silly", "Cool", "Wild", "Young", "Angry", "Bored", "Loud", "Quiet", "Silent", "Dissonant"];

const modeArr =["Major", "Minor", "Dorian", "Locrian", "Phygrian", "Mixolydian", "Aeolian", "Diminished", "Pentatonic", "Chromatic"];

let joined = ''; // empty string

// this should take in two arrays and spit out one string object
function generate() {
    // randInt = Math.floor(Math.random() * 10) + 1;

    for (let i in adjectiveArr) {
        for (let j in modeArr) {
            joined = adjectiveArr[Math.floor(Math.random() * 10)] + ' ' + modeArr[Math.floor(Math.random() * 10)];
        }
    }

    return joined;
}