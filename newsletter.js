document.addEventListener('DOMContentLoaded', () => {
    // will fetch from DB later
    const dummyData = [
        {title: 'This Is An Example', date: '4/22/2025', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quidem ratione sit consequatur adipisci esse suscipit modi pariatur obcaecati commodi perferendis officiis est ipsa, dicta, temporibus nisi sed id deleniti.', imgUrl: null},
        {title: 'This Is An Example', date: '4/22/2025', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quidem ratione sit consequatur adipisci esse suscipit modi pariatur obcaecati', imgUrl: 'public/road.jpg'},
        {title: 'Another Example', date: '4/22/2025', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quidem ratione sit consequatur adipisci esse suscipit modi pariatur obcaecati commodi perferendis officiis est ipsa, dicta, temporibus nisi sed id deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.', imgUrl: 'public/road.jpg'},
    ]

    const newsletters = document.getElementById('newsletters-list');

    dummyData.forEach(data => {
        const newsletter = document.createElement('div');
        newsletter.className = 'newsletter';
        // if (data.title === 'Another Example')
        //     newsletter.className = 'newsletter-v2';

        const title = document.createElement('h2');
        title.textContent = data.title;

        const date = document.createElement('p');
        date.textContent = data.date;
        
        const description = document.createElement('p')
        description.textContent = data.description;
        
        const info = document.createElement('div');
        info.className = 'newsletter-info';
        info.appendChild(title);
        info.appendChild(date);
        info.appendChild(description);

        if (data.imgUrl != null) {
            const img = document.createElement('img');
            img.src = data.imgUrl;
            newsletter.appendChild(img);
        }

        newsletter.appendChild(info);
        newsletters.appendChild(newsletter);
    });
});