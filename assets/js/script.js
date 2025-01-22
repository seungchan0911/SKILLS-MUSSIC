async function fetchAlbums() {
    const response = await fetch('music_data.json');
    const data = await response.json();
    
    renderAlbums(data.data);
    
    function renderAlbums(albums) {
        const albumListContainer = document.querySelector('.contents'); // 기존 HTML에서 앨범 리스트가 있는 div
        albumListContainer.innerHTML = '';
        
        albums.forEach(album => {
            const albumItem = document.createElement('div');
            albumItem.classList.add('col-md-2', 'col-sm-2', 'col-xs-2', 'product-grid');
            
            albumItem.innerHTML += `
            <div class="product-items" id="${album.category}">
            <div class="project-eff">
            <img class="img-responsive" src="images/${album.albumJaketImage}" alt="${album.albumName}">
            </div>
            <div class="produ-cost">
            <h5>${album.albumName}</h5>
            <span><i class="fa fa-microphone"> 아티스트</i><p>${album.artist}</p></span>
            <span><i class="fa fa-calendar"> 발매일</i><p>${album.release}</p></span>
            <span><i class="fa fa-money"> 가격</i><p>${album.price}</p></span>
            <span class="shopbtn">
            <button class="btn btn-default btn-xs add-to-cart" data-album="${album.albumName}" data-price="${album.price}">
            <i class="fa fa-shopping-cart"></i> 쇼핑카트 담기
            </button>
            </span>
            </div>
            </div>
            `;
            
            albumListContainer.appendChild(albumItem);
        });
    }
    
    function addCategory() {
        const nav = document.querySelector('.nav');
        const menu = document.querySelectorAll('.nav span')
        
        menu.forEach(menues => {
            if (menues.innerText === "ALL") {
                menues.parentNode.classList.add('all')
            } else if (menues.innerText === "발라드") {
                menues.parentNode.classList.add('발라드')
            }
        });
        
        const categories = ['재즈', '랩힙합', '댄스', '트로트', '포크어코스틱', '락메탈', 'R&B'];
        
        categories.forEach(category => {
            nav.innerHTML += `
            <li>
            <a href="#" class="${category}"><i class="fa fa-youtube-play fa-2x"></i> <span>${category}</span></a>
            </li>
            `;
        });
    }
    
    addCategory();
    
    function category() {
        const menuButtons = document.querySelectorAll('.nav > li > a');
        
        menuButtons.forEach(button => {
            button.addEventListener('click', () => {
                menuButtons.forEach(item => item.classList.remove('active-menu'));
                
                button.classList.add('active-menu');
            });
        });
    }
    
    category();
    
    function chooseCategory() {
        const content = document.querySelectorAll('.product-items');
        const choosed = document.querySelectorAll('#발라드');

        const ballad = document.querySelector('.발라드');
        const jazz = document.querySelector('.재즈');
        
        content.forEach(contents => {
            choosed.forEach(SEX => {
                ballad.addEventListener('click', () => {
                    contents.style.display = 'none';
                    SEX.style.display = 'block';
                })
            });
        });
    }
    
    chooseCategory();   
}

fetchAlbums();
