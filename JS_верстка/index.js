const API_KEY = "8dbRKY5VfEHMwvHv3mEOiJvKtjnq9qJm"

const URL=`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=50&lang=en&q=love`
const giphyWrap = document.querySelector(".giphyWrap")

const giphyFetch = async ()=>{
    try{
        const res = await fetch(URL)
        const data = await res.json()
        console.log(data)

        data.data.forEach((item)=>{

            giphyWrap.innerHTML += `
            <div class="giphyItem"> 
            <img src="${item.images.original.url}" alt="giphy">
            </div>    
            `
        })

    }catch (e) {
        console.log(e)
    }
}

giphyFetch()

const URL_SEARCH = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=50&lang=en&q=`;

// Получаем элементы
const inputField = document.querySelector('input');
const searchButton = document.querySelector('button');

// Функция для поиска GIF
const searchFetch = async () => {
    const query = inputField.value.trim();  // Получаем значение из поля ввода
    if (!query) return;  // Если поле пустое, не выполняем поиск
    const url = `${URL_SEARCH}${query}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        giphyWrap.innerHTML=``
        data.data.forEach((item)=>{
            giphyWrap.innerHTML += `
            <div class="giphyItem"> 
            <img src="${item.images.original.url}" alt="giphy">
            </div>    
            `

        })
    } catch (e) {
        console.error(e);
    }
};

// Обработчик клика по кнопке
searchButton.addEventListener('click', () => {
    searchFetch();  // Запуск поиска
});

//
// const inputSearch = document.querySelector("input")
// const btnSearch = document.querySelector("button")
// console.log(inputSearch, btnSearch)



//
// const URL_SEARCH=`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=50&lang=en&q=${inputSearch.target.value}`
//
// const searchFetch = async ()=>{
//     try{
//         const res = await fetch(URL_SEARCH)
//         const data = await res.json()
//         console.log(data)
//
//     }catch (e) {
//         console.log(e)
//     }
// }
//
// const handleClick = ()=>{
//     searchFetch()
//
// }