document.addEventListener('DOMContentLoaded', function () {
    var projectItems = document.querySelectorAll('.project-items');
    projectItems.forEach(function (item) {
        item.addEventListener('click', function () {
            var companyName = item.getAttribute('data-pn');

            //var list = getDataLangValues(item);

            handleModal(companyName, item);
        });
    });
});

function handleModal(cn, item) {
    const overlay = document.createElement('div');
    const content = document.createElement('div');
    const picinner = document.createElement('div');
    const textinner = document.createElement('div');
    const closebtn = document.createElement('img');
    
    overlay.id = "project-modal";
    overlay.classList.add('blur');
    overlay.classList.add('fade-in');

    content.classList.add('project-modal-content');

    closebtn.id = "modalclose";
    closebtn.src = "public/assets/img/icons/x.png";

    picinner.style.flex = "1";
    textinner.style.flex = "1";
    textinner.style.color = "#fff";

    const modalContentContainer = getDataLangValues(item);

    const base = modalContentContainer[0];
    const detail = modalContentContainer[1];
    const modalContent = getContent(cn);

    base.appendChild(modalContent);
    base.appendChild(closebtn);

    picinner.appendChild(modalContent);
    textinner.appendChild(detail);
    content.appendChild(picinner);
    content.appendChild(textinner);

    base.appendChild(content);
    overlay.appendChild(base);

    document.body.appendChild(overlay);
    document.body.classList.add('no-scroll');

    document.getElementById('modalclose').addEventListener('click', () => {
        const modal = document.getElementById('project-modal');
        document.body.classList.remove('no-scroll');
        modal.remove();
    });
}

function getDataLangValues(pn) {
    var element = pn;

    var langElements = element ? element.querySelectorAll('[data-lang]') : [];
    
    const lang = getLanguage();

    const modalContentContainer = document.createElement('div');

    const modalDetails = document.createElement('div');
    modalDetails.id = "modalDetails";

    modalContentContainer.style.padding = '64px 32px';
    modalContentContainer.style.height = '100%';
    
    Array.from(langElements).forEach(function (el) {
        const text = document.createElement('span');

        if (el.getAttribute('data-lang').toUpperCase().includes('SUB')) {
            text.textContent = lang[el.getAttribute('data-lang')];
            text.classList.add("project-modal-subTitle");
            modalContentContainer.appendChild(text);
        } else if (el.getAttribute('data-lang').toUpperCase().includes('DETAIL')) {
            text.textContent = lang[el.getAttribute('data-lang')];
            text.classList.add("project-modal-detail");
            modalDetails.appendChild(text);
        } else {
            text.textContent = lang[el.getAttribute('data-lang')];
            text.classList.add("project-modal-title");
            modalContentContainer.appendChild(text);
        }
        //modalContentContainer.appendChild(modalDetails);
        
    });
    return [modalContentContainer, modalDetails];
}