const state = Boolean(localStorage.getItem('loged'));
console.log(state);
if(state){
    localStorage.setItem('history','/foro');
    window.location.href = '/login';
}