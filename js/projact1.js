const generatmeneBtn = document.querySelector('.mene-generator')
const img = document.querySelector(".mene-generator img");
const title = document.querySelector(".mene-generator .mene-title");
const Author = document.querySelector(".mene-generator .mene-author");
const updateDetails = (url, title, author) => {
    img.setAttribute("src", url)
    title.innerHTML = title;
    Author.innerHTML = `mene by : ${author}`;
}
const generatmene = async () => {
  await fetch("https://meme-api.herokuapp.com/gimme/wholesomememes").then(
        (response) => response.json()).then(data => {
            updateDetails(data.url, data.title, data.author)
        })
};

generatmeneBtn.addEventListener("click", generatmene); 