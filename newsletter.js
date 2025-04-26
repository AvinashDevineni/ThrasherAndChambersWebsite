document.addEventListener('DOMContentLoaded', () => {
    // will fetch from DB later
    const dummyData = [
        {title: 'How to navigate the new financial landscape amidst tumulus times', date: '4/22/2025', imgUrl: 'public/road.jpg'},
        {title: 'How to navigate the new financial landscape amidst tumulus times', date: '4/22/2025', imgUrl: 'public/road.jpg'},
        {title: 'How to navigate the new financial landscape amidst tumulus times', date: '4/22/2025', imgUrl: 'public/road.jpg'},
        {title: 'How to navigate the new financial landscape amidst tumulus times', date: '4/22/2025', imgUrl: 'public/road.jpg'},
        {title: 'How to navigate the new financial landscape amidst tumulus times', date: '4/22/2025', imgUrl: 'public/road.jpg'},
        {title: 'How to navigate the new financial landscape amidst tumulus times', date: '4/22/2025', imgUrl: 'public/road.jpg'},
        {title: 'Another Example', date: '4/22/2025', imgUrl: 'public/road.jpg'},
    ]

    const newsletters = document.getElementById('newsletters-container');

    dummyData.forEach(data => {
        const newsletter = document.createElement('div');
        newsletter.className = 'newsletter';
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