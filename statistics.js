// statistics.js

function mean(data) {
    const sum = data.reduce((acc, val) => acc + val, 0);
    return sum / data.length;
  }
  
  function standardDeviation(data) {
    const meanValue = mean(data);
    const sumSquaredDiffs = data.reduce((acc, val) => acc + Math.pow(val - meanValue, 2), 0);
    return Math.sqrt(sumSquaredDiffs / data.length);
  }
  
  module.exports = {
    mean,
    standardDeviation
  };
  