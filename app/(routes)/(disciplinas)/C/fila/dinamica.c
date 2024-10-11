

#include <stdlib.h>
#include <stdio.h>

typedef struct ITEM{
   int item;
   struct ITEM *NEXT;
} *QUEUE;


QUEUE criarItem( int valor ) {

   QUEUE novoItem = ( QUEUE ) malloc( sizeof( QUEUE ) );

   if( novoItem == NULL ) {
      printf( "\nErro ao criar item!\n" );
      return NULL;
   } else {
      novoItem->item = valor;
      novoItem->NEXT = NULL;
      return novoItem;
   }

}

QUEUE Enqueue( int valor, QUEUE fila ) {
   QUEUE novoItem = criarItem(valor);
   if (fila == NULL)
   {
      //novoItem->NEXT = fila;
      return novoItem;
   }else{
   
   QUEUE filaAuxiliar = fila;

   while(filaAuxiliar->NEXT != NULL){
      filaAuxiliar = filaAuxiliar->NEXT;
   }

   filaAuxiliar->NEXT = novoItem;
   
      return fila;
   }

   
}

QUEUE remover(QUEUE fila){
   
   if(fila==NULL){
      printf("\nVazia!\n");
   }else{

   QUEUE filaAuxiliar;
   filaAuxiliar = fila;
   fila = fila->NEXT;

   free(filaAuxiliar);
   filaAuxiliar = NULL;
   }
   return fila;
}

void exibir(QUEUE fila){

   printf("\n---Fila atual---\n");

   if(fila==NULL){
      printf("\nVazia!\n");
   }else{

   QUEUE filaAuxiliar = fila;

   while(filaAuxiliar != NULL){
      printf("[%d] ",filaAuxiliar->item);
      filaAuxiliar = filaAuxiliar->NEXT;
   }

   }

}

void exibirPrimeiro(QUEUE fila){

   if(fila==NULL){
      printf("\nVazia!\n");
   }else{

   printf("\nO valor do primeiro eh %d\n",fila->item);

   }

}

void pesquisar(int valor, QUEUE fila){

   int contador=0;
   QUEUE filaAuxiliar = fila;
   while(filaAuxiliar != NULL){

      if( filaAuxiliar->item == valor ){
            contador++;
      }
   filaAuxiliar = filaAuxiliar->NEXT;
   }
      printf("\nHouve %d ocorrencia(s) do valor %d\n",contador,valor);
}

int main(){

   int opcao=-1;
   int valor=0;
   QUEUE fila = NULL;

   while (opcao!=0)
   {
      exibir(fila);
      valor=0;
      
      printf("\nDIGITE 0 PARA SAIR\n");
      printf("1: Enqueue\n");
      printf("2: Remover\n");
      printf("3: Pesquisar\n");
      printf("4: Exibir primeiro\n");
      scanf("%d",&opcao);

      switch(opcao)
      {
      case 1:
            printf("Digite um valor\n");
            scanf("%d",&valor);
            fila = Enqueue(valor,fila);
            break;

      case 2:
         fila = remover(fila);
            break;

      case 3:
            printf("Digite um valor\n");
            scanf("%d",&valor);
            pesquisar(valor,fila);
            break;

      case 4:
            exibirPrimeiro(fila);
            break;

      case 0:
            printf("Tchau! Ate a proxima\n");
            break;

      default:
            printf("Opcao invalida!\n");
            break;
      }
   }
   return 0;
}