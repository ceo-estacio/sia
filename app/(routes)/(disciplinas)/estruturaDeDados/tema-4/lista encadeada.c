

#include <stdio.h>


// Busca em lista encadeada ordenada
Node *buscar( Node *head , Node **aux, int key ) {
   Node *atual = head -> prox;
   *aux = head;

   while( atual != NULL ) {
      if( atual->key < key ) {
         *aux = atual;
         atual = atual->prox; }
      else if( atual->key == key ) {
         //elemento encontrado
         return atual;
      } else {
         //elemento não encontrado
         return NULL;
      }
      //lista vazia 
      return NULL;
   } 
}

// Inserção em lista encadeada
int inserir ( No *no_ant , Elemento novo_elemento , int chave ) {
   No *aux , *anterior = no_cabeca;
   No *novo_no = ( No * ) calloc ( 1 , sizeof ( No ) );
   aux = buscar ( no_cabeca , &anterior , chave );
   if ( ( novo_no == NULL ) || ( aux != NULL ) )
      return 0; //falha na inserção
   else {
      novo_no -> elemento = novo_elemento;
      novo_no -> chave = chave;
      novo_no -> prox = anterior -> prox;
      anterior -> prox = novo_no;
      return 1; //inserção bem sucedida }
   }
}

// Remoção em lista encadeada.
remover( No *no_cabeca , int chave ) {
   No *aux , *anterior = no_cabeca;
   aux = buscar( no_cabeca , &anterior , chave );
   if( aux != NULL ) {
      anterior -> prox = aux -> prox;
      free( aux );
      return 1; //remoção bem sucedida
   } else {
      return 0; //falha remoção
   }
}
 

// Definição de um nó para lista duplamente encadeada.
struct No {
   int chave;
   Elemento elemento;
   No *prox;
   No *ant; 
}