const url = window.location.href;
console.log("blog-redirect.js working!")
const older = document.getElementsByClassName("oldpg");
const home = document.getElementsByClassName("mainpg");
const newer = document.getElementsByClassName("newpg");

let main_redirect =  `<a href="https://s3gfault.dev/" style="font-weight: bold; text-decoration: none;">Back to Main Page</a>`;

fetch('../js/blog-list.json')
.then(res => res.json())
.then(x => {
    const items = x.map(item => [item.url, item.title]);

    for (let i = 0; i < items.length; ++i) {
        // not oldest, not newest
        if (items[i][0].includes(url) && (i !== 0) && (i !== items.length-1)) {
            for (let j=0; j<older.length; ++j) {
                older[j].innerHTML = `« <a href="${items[i-1][0]}">${items[i-1][1]}</a>`;
                home[j].innerHTML = main_redirect;
                newer[j].innerHTML = `<a href="${items[i+1][0]}">${items[i+1][1]}</a> »`;
            }
        }
        // oldest
        else if (items[i][0].includes(url) && (i === 0)) {
            for (let j=0; j<older.length; ++j) {
                home[j].innerHTML = main_redirect;
                newer[j].innerHTML = `<a href="${items[i+1][0]}">${items[i+1][1]}</a> »`;
            }
        }
        // newest
        else if (items[i][0].includes(url)){
            for (let j=0; j<older.length; ++j) {
                older[j].innerHTML = `« <a href="${items[i-1][0]}">${items[i-1][1]}</a>`;
                home[j].innerHTML = main_redirect;
            }
        }
    }
}).catch(err => console.error('Error:', err));