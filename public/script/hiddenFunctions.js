export function showAdmin(){
    const users = ['KevinGr','PatoVamp'];
    if (users.includes(localStorage.getItem('username'))) {
        const navLat = document.querySelector('#navLat');
        const itemHTML = `
            <div class="item">
                <h3 class="title-item">Temas</h3>
                <ul class="ul-item Temas">
                    <li class="li-item">Tema 1</li>
                    <li class="li-item">Tema 2</li>
                    <li class="li-item">Tema 3</li>
                </ul>
            </div>
        `;
        navLat.insertAdjacentHTML('beforeend', itemHTML);
    }
}

