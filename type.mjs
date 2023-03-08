function type(textArray, typedTextSpans, typingDelay = 60, newTextDelay = 800, textArrayIndex = 0, charIndex = 0) {
    
    if(textArrayIndex < textArray.length) {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpans[textArrayIndex].textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(() => type(textArray, typedTextSpans, typingDelay, newTextDelay, textArrayIndex, charIndex), typingDelay);
        }
        else {
            charIndex = 0;
            textArrayIndex++;
            setTimeout(() => type(textArray, typedTextSpans, typingDelay, newTextDelay, textArrayIndex, charIndex), newTextDelay);
        }
    }
}

export default type;