document.addEventListener('DOMContentLoaded', () => {
    // will fetch from DB later
    const dummyData = [
        {title: '5 Growth Themes For The Next 5 Years', date: '4/22/2025', imgExtension: 'png'},
        {title: 'How to Handle Market Declines', date: '4/22/2025', imgExtension: 'jpg'},
        {title: 'Understanding Tariffs in 5 Charts', date: '4/22/2025', imgExtension: 'jpg'},
        {title: 'What Can a 529 Be Used For', date: '4/22/2025', imgExtension: 'png'},
    ]

    const newsletters = document.getElementById('newsletters-container');

    dummyData.forEach(data => {
        const newsletter = document.createElement('a');
        newsletter.href = `public/newsletter/docs/${data.title}.pdf`;
        newsletter.target = '_blank';
        newsletter.classList.add('newsletter', 'card-hover');
        
        const title = document.createElement('p');
        title.className = 'newsletter-title';
        title.textContent = data.title;

        const date = document.createElement('p');
        date.className = 'newsletter-date';
        date.textContent = data.date;
        
        const info = document.createElement('div');
        info.className = 'newsletter-info';
        info.appendChild(title);
        info.appendChild(date);

        const img = document.createElement('div');
        img.className = 'newsletter-img';
        img.style.backgroundImage = `url('public/newsletter/imgs/${data.title}.${data.imgExtension}')`;
        
        newsletter.appendChild(img);
        newsletter.appendChild(info);
        newsletters.appendChild(newsletter);
    });
});