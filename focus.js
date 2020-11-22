var items = document.querySelectorAll('item');
for(let i = 0; i< items.length; i++){
    items[i].addEventListener = ('focus', function(){
        this.style.border = '2px solid green';
    });
}
