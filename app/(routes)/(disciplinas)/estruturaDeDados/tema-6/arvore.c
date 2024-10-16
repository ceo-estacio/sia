
// https://www.youtube.com/watch?v=Mu9ikK6EGSM&list=PLqJK4Oyr5WShBuC5rqt9I0fMVNnaVTpeo&index=2
#include <stdio.h>
#include <stdlib.h>

#define tree1Size 9

/* estrutura de um nó */
typedef struct node /*nick*/ {
   int item;
   struct node *LEFT, *RIGHT;
} Node;

/* árvore binária BST */
typedef struct {
   Node *root;
} BST;

/**
 * == [ tree properties ] 
 * == == == == == == == == == */
void InsertLeft( Node *node, int value ) {
   if( node->LEFT == NULL ) {
      Node *newNode = ( Node* )malloc( sizeof( Node ) );
      newNode->item = value;
      newNode->LEFT = NULL;
      newNode->RIGHT = NULL;
      node->LEFT = value;
   } else {
      if( value < node->LEFT->item ) {
         InsertLeft( node->LEFT, value );
      }
   }
}

void InsertRight( Node *node, int value ) {}


void Insert( BST *tree, int value ) {
   if( tree->root == NULL ) {
      Node *newNode = ( Node* )malloc( sizeof( Node ) );
      newNode->item = value;
      newNode->LEFT = NULL;
      newNode->RIGHT = NULL;
      tree->root = newNode;
   } else {
      if( value < tree->root->item ) {
         InsertLeft( tree->root, value );
      } else {
         InsertRight( tree->root, value );
      }
   }
}