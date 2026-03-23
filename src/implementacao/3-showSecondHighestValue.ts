export function showSecondHighestValue(numbers: number[]): number {
    if (numbers.length < 2) {
        throw new Error("O array deve conter pelo menos dois números.");
    }

    let maiorNum:number = 0 ;
    let segundoMaiorNum: number = 0;

    for (let i = 0; i< numbers.length; i++) {
        if(numbers[i]> maiorNum){
            segundoMaiorNum = maiorNum
            maiorNum = numbers[i]
        } else if(numbers[i]< maiorNum && numbers[i] > segundoMaiorNum){
            segundoMaiorNum = numbers[i]
        }
    }

    if (segundoMaiorNum === 0) {
        throw new Error("Não foi possível encontrar um segundo numero.");
    }

    return segundoMaiorNum;
}
