const url = window.location.href;

const older = document.getElementById("oldpg");
const main = document.getElementById("mainpg");
const newer = document.getElementById("newpg");

fetch('../js/blog-list.json').then(res => res.json()).then(x => {
    let items = [];
    items = x.map(item => [item.url, item.title]);

    for (let i = 0; i < items.length; i++) {
        // not oldest, not newest
        if (items[i][0].includes(url) && (i!==0) && (i!==items.length)) {
            older.innerHTML = `« <a href="${items[i-1][0]}">${items[i-1][1]}</a>`;
            main.innerHTML = `<a href="https://s3gfault.dev/" style="font-weight: bold; text-decoration: none;">Back to Main Page</a>`;
            newer.innerHTML = `<a href="${items[i+1][0]}">${items[i+1][1]}</a> »`;
        }
        // oldest
        else if (items[i][0].includes(url) && (i===0)) {
            older.innerHTML = " ";
            main.innerHTML = `<a href="https://s3gfault.dev/" style="font-weight: bold; text-decoration: none;">Back to Main Page</a>`;
            newer.innerHTML = `<a href="${items[i+1][0]}">${items[i+1][1]}</a> »`;
        }
        // newest
        else {
            older.innerHTML = `« <a href="${items[i-1][0]}">${items[i-1][1]}</a>`;
            main.innerHTML = `<a href="https://s3gfault.dev/" style="font-weight: bold; text-decoration: none;">Back to Main Page</a>`;
            newer.innerHTML = ` `;
        }
    }
}).catch(err => console.error('Error:', err));