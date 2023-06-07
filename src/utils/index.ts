export const utils = {
    normalNumber(num: string): any {
        let numPlus = num?.slice(0, 11)
        numPlus = numPlus?.startsWith("7") ? "+" + numPlus : numPlus
        return numPlus
    }
}