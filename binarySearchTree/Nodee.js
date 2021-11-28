class Nodee {
  constructor(nodeData) {
    this.data = nodeData.data,
    this.leftChild = nodeData.leftChild || null,
    this.rightChild = nodeData.rightChild || null;
  }
}

module.exports = Nodee;