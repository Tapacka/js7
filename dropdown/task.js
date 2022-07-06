const itemsHTML = document.getElementsByClassName('dropdown__link');
const items = Array.from(itemsHTML);

for (let i = 0; i < items.length; i++) { 
    const ul = items[i].closest('ul');
    const dropdown = ul.closest('.dropdown');
    const dropdown_value = dropdown.querySelector('.dropdown__value');
    dropdown.onclick = () => {        
        if (ul.className == 'dropdown__list') {
            ul.className = 'dropdown__list dropdown__list_active';
        } else {ul.className = 'dropdown__list'};
    }
    items[i].onclick = () => {        
        dropdown_value.textContent = items[i].textContent;        
        return false;
    }    
}