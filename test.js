function LetterCount(str) {
    const words = str.split(' ');
  
    let maxCount = 0;
    let maxWord = '';
  

    words.forEach(word => {
      const charCount = {};
      let count = 0;
      word.split('').forEach(char => {
        charCount[char] = (charCount[char] || 0) + 1;
        if (charCount[char] > 1) {
          count = Math.max(count, charCount[char]);
        }
      });
   
      if (count > maxCount) {
        maxCount = count;
        maxWord = word;
      }
    });
  
    return maxCount > 1 ? maxWord : -1;
  }


  