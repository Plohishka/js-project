`use strict`





const root = document.querySelector('#root');


function imgLoadHandler({target}) {
    console.log('image successfully loaded');
    const parentWrapper = document.getElementById(`wrapper${target.id}`);
    parentWrapper.append(target);
}

function imgErrorHandler({target}) {
    target.remove();
    console.log('image loading has error');
}




function createCard(product) {
    const imgWrapper = createImgWrapper(product);

    const h2 = createElem('h2', { elemClass: ['title'] }, `${product.title}`);
    const p = createElem('p', { elemClass: ['description'] }, `${product.description}`);
    const price = createElem('p', { elemClass: ['price'] }, `${product.price}$`);
    price.style.color = stringToColor(`${product.brand} ${product.title} ${product.category}`);
    const rating = createElem('p', { elemClass: ['rating'] }, `Raiting: ${product.rating}`);
    const btn = createElem('button', { elemClass: ['add-product'] }, 'Add');
    btn.style.backgroundColor = stringToColor(`${product.brand} ${product.title} ${product.category}`);

    return createElem('article', { elemClass: ['card'] }, imgWrapper, h2, p, price, rating, btn);
}



function createElem(type, { elemClass }, ...childs) {
    const elem = document.createElement(type);

    elem.classList.add(...elemClass);
    elem.append(...childs);

    return elem;
}




function createImgWrapper(product) {
    const imgWrapper = createElem('div', { elemClass: ['img-wrapper'] })

    imgWrapper.setAttribute('id', `wrapper${product.id}`);
    imgWrapper.style.backgroundColor = stringToColor(`${product.brand} ${product.title} ${product.category}`);

    // const img = createImg(product);      /* ???? */

    return imgWrapper;
}


function createImg(product) {
    const img = document.createElement('img');

    const [{images}] = product;             /* ????? */

    img.setAttribute('src', images[0]);  /*  ??????? */
    img.setAttribute('alt', product.brand);
    img.setAttribute('id', `${product.id}`);
    img.classList.add('card-img');

    img.addEventListener('load', imgLoadHandler);
    img.addEventListener('error', imgErrorHandler);

    return img;
}

function stringToColor(str) {
    let hash = 0;
    str.split('').forEach(char => {
        hash = char.charCodeAt(0) + ((hash << 5) - hash)
    })
    let colour = '#'
    for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xff
        colour += value.toString(16).padStart(2, '0')
    }
    return colour
}




const prom = fetch('https://dummyjson.com/products')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        const { products } = data;
        const [{images}] = products;
        console.log(images);

        const productsArr = products.map((product) => { return createCard(product); })
        root.append(...productsArr);
    })










