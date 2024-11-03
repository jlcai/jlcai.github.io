let preview_list = document.getElementById("list_preview");
let divpreview = document.getElementsByClassName("divpreview");
const blog_button = document.getElementById("blog_button")
const project_button = document.getElementById("project_button");
// const research_button = document.getElementById("research_button");
const history_button = document.getElementById("history_button");
const rowlet_button = document.getElementById("rowlet_button");
const art_button = document.getElementById("art_button");
const reduce_animation_button = document.getElementById("reduce_motion");
const intro = document.getElementById("intro");

// TYPING ANIAMTION THING
let typingtext = document.getElementById("typing-demo-3");


let isAnimated = true;
// stop animation
reduce_animation_button.addEventListener('click', e => {
    if (isAnimated) {
        document.querySelectorAll('*').forEach((x) => {
            x.classList.add('reduce_motion');
        });
        isAnimated = false;
    } else {
        document.querySelectorAll('*').forEach((x) => {
            x.classList.remove('reduce_motion');
        });
        isAnimated = true;
    }
});

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
        let count = 10;
        if (x.length <= count) { // only view up to 5 most recent blog posts
            items = x.reverse().map(item => `<li>${item.date} <a href="${item.url}">${item.title}:</a> ${item.description}</li><br>`).join('');
        }
        else { // if there's more, chop off the rest
            items = x.slice(-count).reverse().map(item => `<li>${item.date} <a href="${item.url}">${item.title}:</a> ${item.description}</li><br>`).join('');
        }
        items += `<li><a href="https://s3gfault.dev/blog/archive" style="text-decoration: none">...(more)</a></li>`;
        
        preview_list.innerHTML = `${items}`;

        // handling the animation state
        if (!isAnimated) {
            document.querySelectorAll('*').forEach((x) => {
                x.classList.add('reduce_motion');
            });
        }
    }).catch(err => console.error('Error:', err));
});

// // PROJECT UPDATING
project_button.addEventListener('click', e => {
    typingtext.innerHTML = `cd ~/projects && ls -t`;
    typingtext.style.width = "22ch";

    // preview_list.innerHTML = `<li>dont look im not done yet</li>`
    fetch('js/project-list.json').then(res => res.json()).then(x => {
        let items = "";
        let count = 7;
        if (x.length <= count) {
            items = x.reverse().map(item => {
                let tmpfunc = function (obj) {
                    return Object.keys(obj).map(function (key) {
                        return obj[key];
                    });
                }
                    // item.links.map(e => [item.links[e]])[0];
                let tmp = tmpfunc(item.links);
                // console.log(tmp);
                if (tmp.length != 0) {
                    return `<li><a href="${tmp[0]}">${item.title}</a>: ${item.description}</li><br>`;
                } else {
                    return `<li><span style="color: #80baa1;">${item.title}</span>: ${item.description}</li><br>`;
                }
            }).join('');
        }
        else {
            items = x.slice(-count).reverse().map(item => `<li><span style="color: #80baa1;">${item.title}</span>: ${item.description}</li><br>`).join('');
        }

        items += `<li><a href="https://s3gfault.dev/projects/archive" style="text-decoration: none">...(more)</a></li>`;
        preview_list.innerHTML = `${items}`; 

        // handling the animation state
        if (!isAnimated) {
            document.querySelectorAll('*').forEach((x) => {
                x.classList.add('reduce_motion');
            });
        }
    }).catch(err => console.error('Error:', err));
});

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

        // handling the animation state
        if (!isAnimated) {
            document.querySelectorAll('*').forEach((x) => {
                x.classList.add('reduce_motion');
            });
        }
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
    // handling the animation state
    if (!isAnimated) {
        document.querySelectorAll('*').forEach((x) => {
            x.classList.add('reduce_motion');
        });
    }
});

// ART BUTTON
art_button.addEventListener('click', e => {
    typingtext.innerHTML = `'Art/Design Awards and Recognition'`;
    typingtext.style.width = "35ch";
    preview_list.innerHTML = `I used to do a lot of traditional painting (acrylic, etc.), traditional drawing (charcoal, pen/paper, etc.), and digital drawing (using Paint Tool SAI). More recently, I did a lot of graphic design for the extracurriculars I was in. Here is a list of various awards and places I've been seen in in the past:<br><br><ul><li>[2023-05-02] featured in the <i>AASA Magazine 2022 ed.</i></li><br><li>[2020-08-01] re-designed UMass Brazilian Jiu-Jitsu (UMBJJ) logo</li><br><li>[2020-01-24] designed UMass ACM Machine Learning Club Logo</li><br><li>[2020-06-11] <i>Algonquin Regional High School Fine & Performing Arts</i> Art Award</li><br><li>[2020-06-xx] featured in <a href='https://a69c3f1e-a86f-4dc1-9e97-c004302823b9.filesusr.com/ugd/5543f8_1ae53c061ef946b8920d6fedf7c693b0.pdf' style='text-decoration: none'><i>Sachem Magazine vol. 60 'Nostalgia'</i> on the Table of Contents page</a></li><br><li>[2020-04-29] featured in <a href='https://arhsharbinger.com/21841/profile/art-glow-up-hyperrealism-across-multiple-mediums/#photo' style='text-decoration: none'><i>The Harbinger</i></a> (interview)</li><br><li>[2020-01-24] awarded Scholastic Art and Writing Awards Regional Honorable Mention for 'The High Line'</li><br><li>[2018-10-22] featured in <a href='https://arhsharbinger.com/20017/feature/this-bites-eees-impact-on-algonquin/' style='text-decoration: none'><i>The Harbinger October 2019 Issue</i></a> (cover art)</li><br><li>[2018-06-xx] featured in <a href='https://a69c3f1e-a86f-4dc1-9e97-c004302823b9.filesusr.com/ugd/5543f8_2479ae4b8c324fc1bbbb13b4b0604a7c.pdf' style='text-decoration: none'><i>Sachem Magazine vol. 59 'Astral'</i></a> with 'Hand' (pg. 30)</li><br><li>[2018-06-09] featured in <a href='https://arhsharbinger.com/19119/feature/awareness-stops-stigma/' style='text-decoration: none'><i>The Harbinger</i> June 2019 Issue</a> (cover art)</li><br><li>[2018-04-25] featured in <i>Sachem Magazine vol. 58 'Parallels'</i> with 'Arms of Man'</li><br><li>[2017-05-20] awarded the Congressional Art Competition <i>'An Artistic Discovery'</i> Certificate of Special Congressional Recognition</li><br><li>[2017-05-18] featured in <i>Sachem Magazine vol. 57 'Orenda'</i> with five pieces of work</li><br></ul>`;
    // handling the animation state
    if (!isAnimated) {
        document.querySelectorAll('*').forEach((x) => {
            x.classList.add('reduce_motion');
        });
    }
});
    
