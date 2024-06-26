// BLOG UPDATING
if (document.getElementById("blog-list")) {
    const blog_list = document.getElementById("blog-list");
    fetch('../js/blog-list.json').then(res => res.json()).then(x => {
        let items = x.reverse().map(item => `<li>${item.date} <a href="${item.url}">${item.title}</a> ${item.description}</li>`).join('');
        blog_list.innerHTML = `${items}`; 
    }).catch(err => console.error('Error:', err));
}

if (document.getElementById("history-list")) {
    const history_list = document.getElementById("history-list");
    fetch('../js/history-list.json').then(res => res.json()).then(x => {
        let items = x.reverse().map(item => `<li style="li:before { content: '<b>${item.date}</b>'; padding-right: 7px; }; margin-top:20px; "> <b>${item.date}</b> ${item.long}</li>`).join('');
        history_list.innerHTML = `${items}`; 
    }).catch(err => console.error('Error:', err));
}

// UMASS
// BLOG UPDATING
if (document.getElementById("umass-amherst-blog-list")) {
    const blog_list = document.getElementById("umass-amherst-blog-list");
    fetch('../../js/blog-list.json').then(res => res.json()).then(x => {
        let items = x.reverse().map(item => {
            if (item.tags.includes("UMass Amherst")) {
                console.log(item);
                return `<li>${item.date} <a href="${item.url}">${item.title}</a> ${item.description}</li>`;
            }
        }).join('');
        console.log(`items: ${items}`)
        blog_list.innerHTML = `${items}`; 
    }).catch(err => console.error('Error:', err));
}


// EDU
// BLOG UPDATING
if (document.getElementById("education-blog-list")) {
    const blog_list = document.getElementById("education-blog-list");
    fetch('../../js/blog-list.json').then(res => res.json()).then(x => {
        let items = x.reverse().map(item => {
            if (item.tags.includes("education")) {
                console.log(item);
                return `<li>${item.date} <a href="${item.url}">${item.title}</a> ${item.description}</li>`;
            }
        }).join('');
        console.log(`items: ${items}`)
        blog_list.innerHTML = `${items}`; 
    }).catch(err => console.error('Error:', err));
}

// PROJECT UPDATING
if (document.getElementById("projects-list")) {
    const projects_list = document.getElementById("projects-list");
    fetch('../js/project-list.json').then(res => res.json()).then(x => {
        let items = x.reverse().map(item => `<li><a href="${item.url}">${item.title}</a> ${item.description}</li>`).join('');
        projects_list.innerHTML = `${items}`; 
    }).catch(err => console.error('Error:', err));
}
