export function average(aluno1: number[],aluno2: number[],aluno3: number[]): string[] {
  const notas: number[][] = [ aluno1,aluno2,aluno3];
  const resultados:string[] = [];

  let notaF : number;
  let media : number;
  let status : string;

  notas.forEach((aluno,index) => {

    notaF = 0
    
    for (let i = 0; i < aluno.length; i++) {
      notaF += aluno[i];
    }

    media = notaF/3;

    if (media >= 7) {
      status = "Passou"
    }  else if (media > 4 && media < 7) {
      status = "Recuperação"
    } else {
      status = "Reprovado"
    }

    resultados.push(`Aluno ${index + 1}: ${status}`)
  });
    
  return resultados ;
}