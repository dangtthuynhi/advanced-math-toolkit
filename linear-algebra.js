// linear-algebra.js

class Matrix {
    constructor(data) {
      this.data = data;
    }
  
    // Method to add two matrices
    add(matrix) {
      const result = [];
      for (let i = 0; i < this.data.length; i++) {
        const row = [];
        for (let j = 0; j < this.data[i].length; j++) {
          row.push(this.data[i][j] + matrix.data[i][j]);
        }
        result.push(row);
      }
      return new Matrix(result);
    }
  
    // Method to multiply two matrices
    multiply(matrix) {
      const result = [];
      for (let i = 0; i < this.data.length; i++) {
        const row = [];
        for (let j = 0; j < matrix.data[0].length; j++) {
          let sum = 0;
          for (let k = 0; k < this.data[i].length; k++) {
            sum += this.data[i][k] * matrix.data[k][j];
          }
          row.push(sum);
        }
        result.push(row);
      }
      return new Matrix(result);
    }
  }
  
  module.exports = {
    Matrix
  };
  