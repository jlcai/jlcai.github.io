// BLOG UPDATING
// const blog_list = document.getElementById("blog-list");
// fetch('js/blog-list.json').then(res => res.json()).then(x => {
//     let items = "";
//     if (x.length <= 5) { // only view up to 5 most recent blog posts
//         items = x.reverse().map(item => `<li>${item.date} <a href="${item.url}">${item.title}</a></li>`).join('');
//     }
//     else { // if there's more, chop off the rest
//         items = x.slice(-5).reverse().map(item => `<li>${item.date} <a href="${item.url}">${item.title}</a></li>`).join('');
//     }
//     items += `<li><a href="https://s3gfault.dev/blog/archive" style="text-decoration: none">...</a></li>`;
//     blog_list.innerHTML = `${items}`;
// }).catch(err => console.error('Error:', err));

// // PROJECT UPDATING
// const projects_list = document.getElementById("projects-list");
// fetch('js/project-list.json').then(res => res.json()).then(x => {
//     let items = "";
//     if (x.length <= 5) {
//         items = x.reverse().map(item => `<li><a href="${item.url}">${item.title}</a></li>`).join('');
//     }
//     else {
//         items = x.slice(-5).reverse().map(item => `<li><a href="${item.url}">${item.title}</a></li>`).join('');
//     }
//     items += `<li><a href="https://s3gfault.dev/projects/archive" style="text-decoration: none">...</a></li>`;
//     projects_list.innerHTML += `${items}`; 
// }).catch(err => console.error('Error:', err));

// HISTORY LIST
const history_list = document.getElementById("history-list");
fetch('js/history-list.json').then(res => res.json()).then(x => {
    let items = "";
    if (x.length <= 20) {
        items = x.reverse().map(item => `<li>${item.date} ${item.description}</li>`).join('');
    }
    else {
        items = x.slice(-20).reverse().map(item => `<li>${item.date} ${item.description}</li>`).join('');
    }
    items += `<li><a href="https://s3gfault.dev/history/archive" style="text-decoration: none">...</a></li>`;
    history_list.innerHTML += `${items}`; 
}).catch(err => console.error('Error:', err));

// // PINNED UPATING
// const pinned_list = document.getElementById("pinned-list");
// fetch('js/blog-list.json').then(res => res.json()).then(x => {
//     let items = "";
//     let res = x.reverse().filter(item => item.pinned);
//     items = res.map(item => `<li><a href="${item.url}">${item.title}</a> ${item.description}</li>`).join('');
//     pinned_list.innerHTML = `${items}`;
// }).catch(err => console.error('Error:', err));

// fetch('js/project-list.json').then(res => res.json()).then(x => {
//     let items = "";
//     let res = x.reverse().filter(item => item.pinned);
//     items = res.map(item => `<li>[PROJ] <a href="${item.url}">${item.title}</a> ${item.description}</li>`).join('');
//     pinned_list.innerHTML += `${items}`;
// }).catch(err => console.error('Error:', err));