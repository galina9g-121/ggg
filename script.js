function countLetters() {
    const selectElement = document.getElementById('wordSelect');
    const selectedWord = selectElement.value;
  
    const cleanedWord = selectedWord.replace(/[^а-яёА-ЯЁ]/g, '');
    const numberOfLetters = cleanedWord.length;
  
    const resultElement = document.getElementById('result');
    resultElement.textContent = `В слове "${selectedWord}" ${numberOfLetters} русских букв.`;
  }