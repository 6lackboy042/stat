class DescriptiveStatistics {
    constructor(data) {
      this.data = data;
    }
  
    calculateMean() {
      return this.data.length === 0 ? null : this.data.reduce((sum, val) => sum + val, 0) / this.data.length;
    }
  
    calculateMedian() {
      const sortedData = [...this.data].sort((a, b) => a - b);
      const middleIndex = Math.floor(sortedData.length / 2);
  
      if (this.data.length === 0) {
        return null;
      } else if (this.data.length % 2 === 0) {
        return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
      } else {
        return sortedData[middleIndex];
      }
    }
  
    calculateMode() {
      const counts = {};
      this.data.forEach((val) => (counts[val] = (counts[val] || 0) + 1));
  
      const highestOccurrence = Math.max(...Object.values(counts));
      return Object.keys(counts).filter((val) => counts[val] === highestOccurrence);
    }
  
    calculateRange() {
      return this.data.length === 0 ? null : Math.max(...this.data) - Math.min(...this.data);
    }
  
    calculateInterquartileRange() {
      const sortedData = [...this.data].sort((a, b) => a - b);
      const lowerQ = sortedData[Math.floor(sortedData.length / 4)];
      const upperQ = sortedData[Math.floor((3 * sortedData.length) / 4)];
  
      return this.data.length === 0 ? null : upperQ - lowerQ;
    }
  
    calculateMeanAbsoluteDeviation() {
      const mean = this.calculateMean();
      return this.data.length === 0
        ? null
        : this.data.reduce((sum, val) => sum + Math.abs(val - mean), 0) / this.data.length;
    }
  
    calculateVariance() {
      const mean = this.calculateMean();
      return this.data.length === 0
        ? null
        : this.data.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / this.data.length;
    }
  
    calculateStandardDeviation() {
      const variance = this.calculateVariance();
      return variance === null ? null : Math.sqrt(variance);
    }
  
    get mean() {
      return this.calculateMean();
    }
  
    get median() {
      return this.calculateMedian();
    }
  
    get mode() {
      return this.calculateMode();
    }
  
    get range() {
      return this.calculateRange();
    }
  
    get iqr() {
      return this.calculateInterquartileRange();
    }
  
    get mad() {
      return this.calculateMeanAbsoluteDeviation();
    }
  
    get variance() {
      return this.calculateVariance();
    }
  
    get std() {
      return this.calculateStandardDeviation();
    }
  }
  
  const examResults = [97, 98, 82, 72, 29, 72, 97, 63, 92, 97, 82, 92, 98, 100, 97];
  const stats = new DescriptiveStatistics(examResults);
  const meanValue = stats.mean;
  const stdVal = stats.std;
  console.log(`The mean is ${meanValue} and the standard deviation is ${stdVal}`);
  