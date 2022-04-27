const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootTree = null;
}

// root — return root node of the tree
root = () => {
    return this.rootTree;
}

// add node with data to the tree
add = (data) => {
    let newTreeEl = new ListNode(data, null, null);

    return (!this.rootTree)
        ? this.rootTree = newTreeEl
        : this._searchNullElForAdd(this.rootTree, newTreeEl);
}

_searchNullElForAdd = (node, newTreeEl) => {
    if (node.data < newTreeEl.data) {
        (node.right == null)
            ? node.right = newTreeEl
            : this._searchNullElForAdd(node.right, newTreeEl);
    } else {
        (node.left == null)
            ? node.left = newTreeEl
            : this._searchNullElForAdd(node.left, newTreeEl);
    }
}

// returns true if node with the data exists in the tree and false otherwise
has = (data) => {
    return this.find(data) !== null;
}

// returns node with the data if node with the data exists in the tree and null otherwise
find = (data, node = this.rootTree) => {
    if (node == null) {
        return null;
    } else if (data > node.data) {
        return this.find(data, node.right);
    } else if (data < node.data) {
        return this.find(data, node.left);
    } else {
        return node;
    }
}

// removes node with the data from the tree if node with the data exists
remove = (data) => {
    this.rootTree = this.removeNode(this.rootTree, data); // helper method below
}

// returns minimal node
minNode = (node) => {
    return (node.left === null)
        ? node
        : this.minNode(node.left);
}

removeNode = (node, data) => {
    if (node === null) return null;

    if (data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node;
    } else if (data > node.data) {
        node.right = this.removeNode(node.right, data);
        return node;
    } else {
        // remove without children
        if (node.left === null && node.right === null) {
            node = null;
            return node;
        }

        // remove with one children
        if (node.left === null) {
            node = node.right;
            return node;
        } else if (node.right === null) {
            node = node.left;
            return node;
        }

        // remove with both children
        // minNode правого поддерева хранится в новом узле
        let newNode = this.minNode(node.right);
        node.data = newNode.data;
        node.right = this.removeNode(node.right, newNode.data);
        return node;
    }
}

// returns minimal value stored in the tree (or null if tree has no nodes)
min = (node = this.rootTree) => {
    return (node.left === null)
      ? node.data
      : this.min(node.left);
}

// returns maximal value stored in the tree (or null if tree has no nodes)
max = (node = this.rootTree) => {
    return (node.right === null)
        ? node.data
        : this.max(node.right);
}
}

module.exports = {
  BinarySearchTree
};