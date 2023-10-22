import {DigitType} from "../components/digit/digit.type.ts";

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 25, 75, 50, 100]
const maxCandidates = 6
const minChallenge = 1
const maxChallenge = 1000

const random = (array) => {
    return new DigitType(array[Math.floor((Math.random() * array.length))])
}

const isNotValidCandidate = (array, candidate) => {
    const count = array.filter((number) => number.value === candidate.value).length
    return count === 2
}

export const newCandidates = () => {
    let digits: DigitType[] = []
    for (let i = 0; i < maxCandidates; i++) {
        let newDigit: DigitType;
        do {
            newDigit = random(source)
        } while (isNotValidCandidate(digits, newDigit))
        digits = [newDigit, ...digits]
    }
    return digits.sort((a, b) => a.value - b.value)
}

export const newChallenge = (candidates) => {
    let challenge = 0
    do {
        challenge = Math.floor(Math.random() * (maxChallenge - minChallenge + 1) + minChallenge)
    } while (candidates.some((digit) => digit === challenge))
    return challenge
}