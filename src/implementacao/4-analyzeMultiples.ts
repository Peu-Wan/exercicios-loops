export function analyzeMultiples (numeros: number[]) {
  const multiplos2e5: number[] = [];
  const multiplos2e3: number[] = [];

  for(let i:number = 0; i < numeros.length; i++){
    if (numeros[i] % 2 == 0 && numeros[i] % 3 == 0) {
      multiplos2e3.push (numeros[i]);
    } 
    if(numeros[i] % 2 == 0 && numeros[i] % 5 == 0) {
      multiplos2e5.push(numeros[i]);
    }
  }

  return { multiplos2e5, multiplos2e3 };
}

