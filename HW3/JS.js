

// const url = 'htmlfile.html'
// const eleH1 = document.querySelector('h1')
// eleH1.addEventListener('click',fileData)


// function fileData(){
//     fetch(url)
//     .then((response)=>{
//         console.log(response)
//         if(response.status == 200){
//             return response.text()
//         }
//         else{
//             console.log("Error Message!")
//         }
//     })
//     .then((data)=>{
//         eleH1.innerHTML += data
//     })
// }

/*
'''
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
Source: https://leetcode.com/problems/diameter-of-binary-tree/
 

EXAMPLE(S)
    1
   / \
  2   3
 /   / \
4   5   6   
returns 5. The longest path would be [4, 2, 1, 3, 5] or [4, 2, 1, 3, 6].
 

FUNCTION SIGNATURE
def diameter(node: TreeNode) -> int
'''
*/

class Node{
    constructor(value, left, right){
        this.value = value
        this.left = left
        this.right = right
    }
}

let tree = new Node(1, new Node(2, new Node(4)), new Node(3, new Node(5), new Node(6)))
let root = new Node(1, new Node(2), new Node(3))
let root2 = new Node(10,
    new Node(5,
      new Node( 2), new Node(6)),
      new Node(15,
      new Node( 3), new Node(20))
        )

console.log(tree)
function validateBST(root){

    function validate(node, minValue, maxValue){
        if(!node){
            return true
        }
        if(node.value < minValue || node.value > maxValue){
            return false
        }

        return validate(node.left, minValue, node.value) && validate(node.right, node.value, maxValue)
    }
    return validate(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
}

function treediameter(tree){}

console.log(validateBST(tree))