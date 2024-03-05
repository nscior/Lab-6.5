// const adjectiveArr = ["Silly", "Cool", "Wild", "Young", "Angry", "Bored", "Loud", "Quiet", "Silent", "Dissonant"];

// const modeArr =["Major", "Minor", "Dorian", "Locrian", "Phygrian", "Mixolydian", "Aeolian", "Diminished", "Pentatonic", "Chromatic"];

// this should take in two arrays and spit out one string object
function generate() {
    const adjectiveArr = ['Silly', 'Cool', 'Wild', 'Young', 'Angry', 'Bored', 'Loud', 'Quiet', 'Silent', 'Dissonant'];
    const modeArr =['Major', 'Minor', 'Dorian', 'Locrian', 'Phygrian', 'Mixolydian', 'Aeolian', 'Diminished', 'Pentatonic', 'Chromatic'];
    
    for (let i in adjectiveArr) {
        for (let j in modeArr) {
            joined = adjectiveArr[Math.floor(Math.random() * 9) + 1] + ' ' + modeArr[Math.floor(Math.random() * 9) + 1];
        }
    }

    return {
        get name() {
            return joined;
        }
    }
}