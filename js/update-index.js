// BLOG UPDATING
const blog_list = document.getElementById("blog-list");
fetch('js/blog-list.json').then(res => res.json()).then(x => {
    let items = x.map(item => `<li>${item.date} <a href="${item.url}">${item.title}</a> ${item.description}</li>`).join('');
    items += `<li><a href="https://s3gfault.dev/blog/archive" style="text-decoration: none">...</a></li>`;
    blog_list.innerHTML = `<ul>${items}</ul>`; 
}).catch(err => console.error('Error:', err));

// PROJECT UPDATING
const projects_list = document.getElementById("projects-list");
fetch('js/project-list.json').then(res => res.json()).then(x => {
    let items = x.map(item => `<li><a href="${item.url}">${item.title}</a> ${item.description}</li>`).join('');
    items += `<li><a href="https://s3gfault.dev/projects/archive" style="text-decoration: none">...</a></li>`;
    projects_list.innerHTML = `<ul>${items}</ul>`; 
}).catch(err => console.error('Error:', err));