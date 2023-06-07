export const utils = {
    normalNumber(num: string, n = 12): any {
        let numPlus = num?.slice(0, n)
        numPlus = numPlus?.startsWith("7") ? "+" + numPlus : numPlus
        return numPlus
    }
}