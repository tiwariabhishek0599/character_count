const inputBox = document.getElementById('inputBox');
    const charCounter = document.getElementById('charCounter');
    const remainingChars = document.getElementById('remainingChars');

    function updateCharacterCount() {
      const inputText = inputBox.value;
      const charCount = inputText.length;
      charCounter.textContent = charCount;

      if (charCount > 50) {
        inputBox.value = inputText.slice(0, 50);
        charCounter.textContent = 50;
      }

      const charsRemaining = 50 - charCount;
      remainingChars.textContent = charsRemaining + ' character' + (charsRemaining !== 1 ? 's' : '') + ' remaining';
    }