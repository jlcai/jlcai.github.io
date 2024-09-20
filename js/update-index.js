let preview_list = document.getElementById("list_preview");
let divpreview = document.getElementsByClassName("divpreview");
const blog_button = document.getElementById("blog_button")
const project_button = document.getElementById("project_button");
// const research_button = document.getElementById("research_button");
const history_button = document.getElementById("history_button");
const rowlet_button = document.getElementById("rowlet_button");

// TYPING ANIAMTION THING
let typingtext = document.getElementById("typing-demo-3");

// function checkOverflow(el)
// {
//    let curOverflow = divpreview.style.overflow;
//    var isOverflowing = 0

//    if ( !curOverflow || curOverflow === "visible" )
//     divpreview.style.overflow = "hidden";

//    if (el.style.height > divpreview.style.height) {
//     var isOverflowing = 1;
//    }

//    divpreview.style.overflow = curOverflow;

//    console.log(isOverflowing);
//    return isOverflowing;
// }

// BLOG BUTTON
blog_button.addEventListener('click', e => {
    fetch('js/blog-list.json').then(res => res.json()).then(x => {
        typingtext.innerHTML = `cd ~/blog && ls -t`;
        typingtext.style.width = "18ch";

        let items = "";
        
        let count = 8;
        if (x.length <= count) { // only view up to 5 most recent blog posts
            items = x.reverse().map(item => `<li>${item.date} <a href="${item.url}">${item.title}:</a> ${item.description}</li><br>`).join('');
        }
        else { // if there's more, chop off the rest
            items = x.slice(-count).reverse().map(item => `<li>${item.date} <a href="${item.url}">${item.title}:</a> ${item.description}</li><br>`).join('');
        }
        items += `<li><a href="https://s3gfault.dev/blog/archive" style="text-decoration: none">...(more)</a></li>`;
        
        preview_list.innerHTML = `${items}`;

        // if (checkOverflow(preview_list)) {
        //     items = x.slice(-2).reverse().map(item => `<li>${item.date} <a href="${item.url}">${item.title}:</a> ${item.description}</li><br>`).join('');
        //     preview_list.innerHTML = `${items}`;
        // }
        
        
    }).catch(err => console.error('Error:', err));
});

// // PROJECT UPDATING
project_button.addEventListener('click', e => {
    typingtext.innerHTML = `cd ~/projects && ls -t`;
    typingtext.style.width = "22ch";

    // preview_list.innerHTML = `<li>dont look im not done yet</li>`
    fetch('js/project-list.json').then(res => res.json()).then(x => {
        let items = "";
        if (x.length <= 5) {
            items = x.reverse().map(item => `<li><span style="color: #80baa1;">${item.title}</span>: ${item.description}</li><br>`).join('');
        }
        else {
            items = x.slice(-5).reverse().map(item => `<li><span style="color: #80baa1;">${item.title}</span>: ${item.description}</li><br>`).join('');
        }
        items += `<li><a href="https://s3gfault.dev/projects/archive" style="text-decoration: none">...(more)</a></li>`;
        preview_list.innerHTML = `${items}`; 
    }).catch(err => console.error('Error:', err));
});

// // RESEARCH UPDATING
// research_button.addEventListener('click', e => {
//     typingtext.innerHTML = `cd ~/research && ls -t`;
//     typingtext.style.width = "22ch";

//     preview_list.innerHTML = `<li>dont look im not done yet</li>`
    // fetch('js/project-list.json').then(res => res.json()).then(x => {
    //     let items = "";
    //     if (x.length <= 5) {
    //         items = x.reverse().map(item => `<li><a href="${item.url}">${item.title}</a></li><br>`).join('');
    //     }
    //     else {
    //         items = x.slice(-5).reverse().map(item => `<li><a href="${item.url}">${item.title}</a></li><br>`).join('');
    //     }
    //     items += `<li><a href="https://s3gfault.dev/projects/archive" style="text-decoration: none">...(more)</a></li>`;
    //     preview_list.innerHTML = `${items}`; 
    // }).catch(err => console.error('Error:', err));
// });

// HISTORY LIST
let history_default = e => {
    fetch('js/history-list.json').then(res => res.json()).then(x => {
        typingtext.innerHTML = `cd ~/history && ls -t`;
        typingtext.style.width = "21ch";

        let items = "";
        let count = 7;
        if (x.length <= count) {
            items = x.reverse().map(item => `<li>${item.date} ${item.long}</li><br>`).join('');
        }
        else {
            items = x.slice(-count).reverse().map(item => `<li>${item.date} ${item.long}</li><br>`).join('');
        }
        items += `<li><a href="https://s3gfault.dev/history/archive" style="text-decoration: none">...(more)</a></li>`;
        preview_list.innerHTML = `${items}`; 
    }).catch(err => console.error('Error:', err));
};

history_button.addEventListener('click', history_default, false);
window.addEventListener("load", function() {
    history_default();
});

// ROWLET BUTTON :)
rowlet_button.addEventListener('click', e => {
    typingtext.innerHTML = `xdg-open rowlet_spin.gif`;
    typingtext.style.width = "24ch";
    preview_list.innerHTML = `<img src="../images/rowlet_spin.gif">`;
});