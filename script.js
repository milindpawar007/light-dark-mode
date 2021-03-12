const toggleSwitch= document.querySelector('input[type="checkbox"]');

// switch theme dynamically
function switchTheme(event){
    
    event.target.checked ? document.documentElement.setAttribute('data-theme','dark') :  document.documentElement.setAttribute('data-theme','light');
        
}

// Event Listenner
toggleSwitch.addEventListener("change",switchTheme);