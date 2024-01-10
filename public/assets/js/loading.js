function onload() {
    const loadingIcon = document.createElement('span');
    const overlay = document.createElement('div');
    
    const fullContainer = document.getElementById('full-container');

    loadingIcon.classList.add('page-loader');
    loadingIcon.style.position = 'fixed';
    loadingIcon.style.top = '50%';
    loadingIcon.style.left = '50%';
    loadingIcon.style.zIndex = '10';
    document.body.appendChild(loadingIcon);

    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    //overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    overlay.style.backgroundColor = '#000000';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '9';
    document.body.appendChild(overlay);
    
    overlay.remove();
        loadingIcon.remove();
        
        fullContainer.style.display = 'initial';
        fullContainer.classList.add('fade-in');
    // setTimeout(() => {
    //     overlay.remove();
    //     loadingIcon.remove();
        
    //     fullContainer.style.display = 'initial';
    //     fullContainer.classList.add('fade-in');
    // }, 2500);
}