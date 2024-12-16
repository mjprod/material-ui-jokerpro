document.querySelector('.opacityCopy').addEventListener('click', async () => {
    // Get the selected value
    const select = document.querySelector('.opacity-selector');
    const value = select.value;
    
    try {
        // Copy to clipboard
        await navigator.clipboard.writeText(value);
        
        // Visual feedback
        const button = document.querySelector('.opacityCopy');
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        
        // Reset button text after 2 seconds
        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);
    } catch (err) {
        console.error('Failed to copy:', err);
    }
});