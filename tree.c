#include "stdio.h"
#include <stdlib.h>
struct node
{
    int data;
    struct node *left;
    struct node *right;
};

/* newNode() allocates a new node with the given data and NULL left and
   right pointers. */
struct node* newNode(int data)
{
  // Allocate memory for new node
  struct node* node = (struct node*)malloc(sizeof(struct node));

  // Assign data to this node
  node->data = data;

  // Initialize left and right children as NULL
  node->left = NULL;
  node->right = NULL;
  return(node);
}


int main()
{
  /*create root*/
  struct node *root = newNode(1);
  /* following is the tree after above statement

        1
      /   \
     NULL  NULL
  */


  root->left        = newNode(2);
  root->right       = newNode(3);
  /* 2 and 3 become left and right children of 1
           1
         /   \
        2      3
     /    \    /  \
    NULL NULL NULL NULL
  */


  root->left->left  = newNode(4);
  root->left->right  = newNode(5);
  /* 4 becomes left child of 2
           1
       /       \
      2          3
    /   \       /  \
   4     5  NULL  NULL
  /  \  /  \
NULL NULL  NULL
*/
  printf("\ninorder\n");
  inorder(root);
  printf("\npreorder\n");
  preorder(root);
  printf("\npostOrder\n");
  postOrder(root);
  printf("\nmaxSUMPath\n");
  maxSUMPath(root,0,-1);

  getchar();
  return 0;
}
int maxSUMPath(struct node *cNode, int sum, int maxValue) {
  if (cNode == NULL) {
    return ;
  }
  int cSumNode = cNode->data + sum;
  maxSUMPath(cNode->left, cSumNode, maxValue);
  if ((cNode->left == NULL) && (cNode->right == NULL)) {
    maxValue = maxValue < cSumNode ? cSumNode : maxValue;
    printf(" %d sum %d\n", cNode->data, cSumNode);
  }
  maxSUMPath(cNode->right, cSumNode, maxValue);
  return 0;
}

int inorder(struct node *cNode) {
  if (cNode == NULL) {
    return ;
  }
  inorder(cNode->left);
  printf(" %d ", cNode->data);
  inorder(cNode->right);
  return 0;
}

int preorder(struct node *cNode) {
  if (cNode == NULL) {
    return ;
  }
  printf(" %d ", cNode->data);
  preorder(cNode->left);
  preorder(cNode->right);
  return 0;
}
int postOrder(struct node *cNode) {
  if (cNode == NULL) {
    return ;
  }
  postOrder(cNode->left);
  postOrder(cNode->right);
  printf(" %d ", cNode->data);
  return 0;
}
