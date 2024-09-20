// BLOG UPDATING
if (document.getElementById("blog-list")) {
    const blog_list = document.getElementById("blog-list");
    fetch('../js/blog-list.json').then(res => res.json()).then(x => {
        let items = x.reverse().map(item => `<li>${item.date} <a href="${item.url}">${item.title}</a> ${item.description}</li>`).join('');
        blog_list.innerHTML = `${items}`; 
    }).catch(err => console.error('Error:', err));
}


// HISTORY UPDATING
if (document.getElementById("history-list")) {
    const history_list = document.getElementById("history-list");
    fetch('../js/history-list.json').then(res => res.json()).then(x => {
        let items = x.reverse().map(item => `<li><b>${item.date}</b> ${item.long}</li><br>`).join('');
        history_list.innerHTML = `${items}`; 
    }).catch(err => console.error('Error:', err));
}

// // UMASS
// // BLOG UPDATING
// if (document.getElementById("umass-amherst-blog-list")) {
//     const blog_list = document.getElementById("umass-amherst-blog-list");
//     fetch('../../js/blog-list.json').then(res => res.json()).then(x => {
//         let items = x.reverse().map(item => {
//             if (item.tags.includes("UMass Amherst")) {
//                 console.log(item);
//                 return `<li>${item.date} <a href="${item.url}">${item.title}</a> ${item.description}</li>`;
//             }
//         }).join('');
//         console.log(`items: ${items}`)
//         blog_list.innerHTML = `${items}`; 
//     }).catch(err => console.error('Error:', err));
// }


// // EDU
// // BLOG UPDATING
// if (document.getElementById("education-blog-list")) {
//     const blog_list = document.getElementById("education-blog-list");
//     fetch('../../js/blog-list.json').then(res => res.json()).then(x => {
//         let items = x.reverse().map(item => {
//             if (item.tags.includes("education")) {
//                 console.log(item);
//                 return `<li>${item.date} <a href="${item.url}">${item.title}</a> ${item.description}</li>`;
//             }
//         }).join('');
//         console.log(`items: ${items}`)
//         blog_list.innerHTML = `${items}`; 
//     }).catch(err => console.error('Error:', err));
// }

// PROJECT UPDATING
if (document.getElementById("projects-list")) {
    const projects_list = document.getElementById("projects-list");
    fetch('../js/project-list.json').then(res => res.json()).then(x => {
        projects_list.innerHTML = "";

        let items = x.reverse().map(item => {
            
            if (Object.keys(item.links) === 0) {
                return `<div class='box'><b>${item.title}</b><div class='caption'><i>${item.tools}</i></div>${item.description}</div>`;
            } else {
                let linkstr = "";
                
                for (let k in item.links) {
                    linkstr += `<a href=${item.links[k]}>${k}</a> `;
                }

                return `<div class='box'><b>${item.title}</b><div class='caption'><i>${item.tools}</i></div>${item.description}<br><br>${linkstr}</div>`;
            }
            
        }).join('');
        projects_list.innerHTML = `${items}`; 
    }).catch(err => console.error('Error:', err));
}

// RESEARCH UPDATING
if (document.getElementById("research-list")) {
    const research_list = document.getElementById("research-list");
    fetch('../js/project-list.json').then(res => res.json()).then(x => {
        research_list.innerHTML = "";

        let items = x.reverse().map(item => {
            
            if (Object.keys(item.links) === 0) {
                return `<div class='box'><b>${item.title}</b><div class='caption'><i>${item.tools}</i></div>${item.description}</div>`;
            } else {
                let linkstr = "";
                
                for (let k in item.links) {
                    linkstr += `<a href=${item.links[k]}>${k}</a> `;
                }

                return `<div class='box'><b>${item.title}</b><div class='caption'><i>${item.tools}</i></div>${item.description}<br><br>${linkstr}</div>`;
            }
            
        }).join('');
        research_list.innerHTML = `${items}`; 
    }).catch(err => console.error('Error:', err));
}
