function loadScript(url) {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.href = url;
    link.onload = resolve;
    link.onerror = reject;
    document.head.appendChild(link);
  });
}

// Usage
const cdnUrl = 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css';
const style = 'https://cdn.jsdelivr.net/gh/GeneralFreelancer/onlyfans-riderect-popup/style.css';
loadScript(cdnUrl);
loadScript(style);
  .then(() => {
    // Script loaded successfully
    // You can now use the functionality provided by the loaded script
  })
  .catch((error) => {
    // An error occurred while loading the script
    console.error('Failed to load script:', error);
  });



