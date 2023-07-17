// BLOG UPDATING
if (document.getElementById("blog-list")) {
    const blog_list = document.getElementById("blog-list");
    fetch('../js/blog-list.json').then(res => res.json()).then(x => {
        let items = x.map(item => `<li>${item.date} <a href="${item.url}">${item.title}</a> ${item.description}</li>`).join('');
        blog_list.innerHTML = `${items}`; 
    }).catch(err => console.error('Error:', err));
}

// PROJECT UPDATING
if (document.getElementById("projects-list")) {
    const projects_list = document.getElementById("projects-list");
    fetch('../js/project-list.json').then(res => res.json()).then(x => {
        let items = x.map(item => `<li><a href="${item.url}">${item.title}</a> ${item.description}</li>`).join('');
        projects_list.innerHTML = `${items}`; 
    }).catch(err => console.error('Error:', err));
}
