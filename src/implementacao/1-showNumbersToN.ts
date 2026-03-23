export function showNumbersToN(N: number): number[] {
    const numeros: number[] = []

    for (let i = 0; i <= N; i++) {
        numeros[i] = i;
    }

    return numeros;
}
