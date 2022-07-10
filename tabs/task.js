const tab = document.getElementsByClassName('tab');
const tabArray = Array.from(tab);
const content = document.getElementsByClassName('tab__content');
const contentArray = Array.from(content);
tabArray.forEach((element, index) => {
    element.onclick = () => {
        tabArray.forEach(elem =>{elem.className = 'tab'})
        element.className = 'tab tab_active';
        contentArray.forEach(item => {item.className = 'tab__content'})
        contentArray[index].className = 'tab__content tab__content_active';
    }
});


