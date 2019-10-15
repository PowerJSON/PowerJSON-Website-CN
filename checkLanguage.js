if (navigator.language !== 'zh-CN' && !localStorage.isAskRegion) {
    localStorage.isAskRegion = true;
    if (confirm('Your browser language is not set in Chinese. Do you want to jump to the English official website?')) {
        location.href = 'https://www.powerjson.org';
    }
}
