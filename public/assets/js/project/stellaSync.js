function stellaSyncContent() {
    // debugger;
    const full = document.createElement('div');
    const inner = document.createElement('div');
    const picinner = document.createElement('div');
    const textinner = document.createElement('div');
    const text = document.createElement('span');
    const img1 = document.createElement('img');
    
    // inner.style.display = 'flex';
    // inner.style.alignContent = 'center';

    // picinner.id = "picinner";
    // picinner.style.flex = '1';
    // textinner.id = "textinner";
    // textinner.style.flex = '1';

    img1.src = "public/assets/img/snapshot/ticketSolution/home.png";
    img1.style.width = '100%';
    

    picinner.appendChild(img1);
    
    // inner.appendChild(picinner);
    // inner.appendChild(textinner);

    // full.appendChild(inner);
    
    return picinner;
}