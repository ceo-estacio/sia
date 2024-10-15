
// https://www.youtube.com/watch?v=Mu9ikK6EGSM&list=PLqJK4Oyr5WShBuC5rqt9I0fMVNnaVTpeo&index=2
#include <stdio.h>
#include <stdlib.h>

#define tree1Size 9

/* estrutura de um nó */
typedef struct node /*nick*/ {
   int item;
   struct node *LEFT, *RIGHT;
} Node;

/* árvore binária TreeBn */
typedef struct {
   Node *root;
} TreeBn;

/**
 * == [ tree properties ] 
 * == == == == == == == == == */
void Insert( TreeBn *tree ) {}