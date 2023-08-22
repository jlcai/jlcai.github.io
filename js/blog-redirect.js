const url = window.location.href;
console.log("blog-redirect.js working!")
const older = document.getElementById("oldpg");
const home = document.getElementById("mainpg");
const newer = document.getElementById("newpg");

let main_redirect =  `<a href="https://s3gfault.dev/" style="font-weight: bold; text-decoration: none;">Back to Main Page</a>`;

fetch('../js/blog-list.json')
.then(res => res.json())
.then(x => {
    const items = x.map(item => [item.url, item.title]);

    for (let i = 0; i < items.length; ++i) {
        // not oldest, not newest
        if (items[i][0].includes(url) && (i !== 0) && (i !== items.length-1)) {
            older.innerHTML = `« <a href="${items[i-1][0]}">${items[i-1][1]}</a>`;
            home.innerHTML = main_redirect;
            newer.innerHTML = `<a href="${items[i+1][0]}">${items[i+1][1]}</a> »`;
        }
        // oldest
        else if (items[i][0].includes(url) && (i === 0)) {
            home.innerHTML = main_redirect;
            newer.innerHTML = `<a href="${items[i+1][0]}">${items[i+1][1]}</a> »`;
        }
        // newest
        else if (items[i][0].includes(url)){
            older.innerHTML = `« <a href="${items[i-1][0]}">${items[i-1][1]}</a>`;
            home.innerHTML = main_redirect;
        }
    }
}).catch(err => console.error('Error:', err));