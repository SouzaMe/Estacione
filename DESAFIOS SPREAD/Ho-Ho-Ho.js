// a funcao fica dentro do sistema para ler as entradas(inputs) dos dados e a funcao print para imprimir a saida (saida) de dados e ja pula uma linha ("\n")
// Abaixo segue um exemplo de codigo que voce pode ou nao usar

deixe  linhas  =  obtem ( ) . split ( "\n" ) ;

//TODO: Complete os espacos em branco com uma solucao possivel para o desafio

deixe  N  =  parseInt ( linhas.shift ( ) ) ; _ _
frase = ""
for ( seja  i = 0 ; i < N ; i ++ ) {
  if ( i + 1 != N ) {
    frase += "Ho"
  } senao {
    frase += "Oi!"
  }
}
consola . log ( frase )