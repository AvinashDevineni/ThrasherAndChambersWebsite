document.addEventListener('DOMContentLoaded', () => {
    // will fetch from DB later
    const dummyData = [
        {title: 'How to navigate the new financial landscape', date: '4/22/2025', imgUrl: 'public/road.jpg'},
        {title: 'Prepare now for potential tax law changes', date: '4/22/2025', imgUrl: 'public/road.jpg'},
        {title: 'What to expect on Election Day and beyond', date: '4/22/2025', imgUrl: 'public/road.jpg'},
        {title: 'Politics and the economy: Could Washington derail a soft landing?', date: '4/22/2025', imgUrl: 'public/road.jpg'},
        {title: 'AI: The vast potential and looming questions of the new digital frontier', date: '4/22/2025', imgUrl: 'public/road.jpg'},
        {title: 'China today: How to invest in a complex time', date: '4/22/2025', imgUrl: 'public/road.jpg'},
        {title: 'Another Example', date: '4/22/2025', imgUrl: 'public/road.jpg'},
    ]

    const newsletters = document.getElementById('newsletters-container');

    dummyData.forEach(data => {
        const newsletter = document.createElement('div');
        newsletter.classList.add('newsletter', 'card-hover');
        // if (data.title === 'Another Example')
        //     newsletter.className = 'newsletter-v2';

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
        img.style.background = `url(${data.imgUrl})`;
        
        newsletter.appendChild(img);
        newsletter.appendChild(info);
        newsletters.appendChild(newsletter);
    });
});