const source = [1,2,3,4,5,6,7,8,9,10,25,75,50]
const maxCandidates = 6
const minChallenge = 1
const maxChallenge = 1000

const random = (array) => {
    return array[Math.floor((Math.random()*array.length))];
}

const isNotValidCandidate = (array, candidate) => {
    return array.reduce((accum, curr) => curr === candidate ? accum++ : 0, 0) >= 2
}

export const newCandidates = () => {
    let digits: number[] = []
    for (let i = 0; i < maxCandidates; i++) {
        let newDigit = 0;
        do {
            newDigit = random(source)
        } while (isNotValidCandidate(digits, newDigit))
        digits = [newDigit, ...digits]
    }
    return digits
}

export const newChallenge = (candidates) => {
    let challenge = 0
    do {
        challenge = Math.floor(Math.random() * (maxChallenge - minChallenge + 1) + minChallenge)
    } while (candidates.some((digit) => digit === challenge))
    return challenge
}