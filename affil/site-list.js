const cool_ppl_list = document.getElementById("cool-ppl-list");

fetch('cool-ppl-webring.json').then(res => res.json()).then(x => {
    const items = x.map(item => `<li><a href="${item.url}">${item.name}</a></li>`).join('');
        cool_ppl_list.innerHTML = `${items}`; 
}).catch(err => console.error('Error:', err));