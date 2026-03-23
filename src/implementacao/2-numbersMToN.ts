export function showNumbersBetween(M: number, N: number): number[] {
    if (M >= N) {
        throw new Error("M deve ser menor que N");
    }

    const intervalo: number[] = []

    for (let i = 0; i <= N - M; i++) {
        intervalo[i] = M + i;
    }

    return intervalo;
}
