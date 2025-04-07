const userExist = localStorage.getItem('nombre');
        if (userExist) {
            const login = document.getElementById('aLogin');
            const userLetter = document.getElementById('user-letter');
            login.style.display = 'none';
            userLetter.textContent = userExist.charAt(0).toUpperCase();
        }else{
            const login = document.getElementById('aLogin');
            const userLetter = document.getElementById('user-letter');
            login.style.display = 'inline-block';
            userLetter.style.display = 'none';
        }
const userOptions = document.getElementById('user-letter')
const menu = document.getElementById('menUser')
menu.style.top = "-10%";
localStorage.setItem('history',window.location.href);
userOptions.addEventListener('click', () => {
    if(menu.style.top != "10%"){
        menu.style.top = "10%";
    }else{
        menu.style.top = "-10%";
    }
})