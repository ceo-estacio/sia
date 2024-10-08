

#include <stdio.h>
#include <stdlib.h>


int main() {
   typedef struct {
      char primeiroNome[30];
      char sobrenome[30];
      int idade;
   } Person;
   
   Person person = {
      "Anselmo", "Sammarco Nunes", 39
   };
   
   printf(
      "== == == == == == == == ==\nAluno: %s %s, %d anos.\n== == == == == == == == ==",
      person.primeiroNome,
      person.sobrenome,
      person.idade
   ); 
}