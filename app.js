'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == 'light-theme') {
        this.textContent = 'Switch';
    }
    else {
        this.textContent = 'Switch';
    }
});

console.log('current theme class name:'. className)