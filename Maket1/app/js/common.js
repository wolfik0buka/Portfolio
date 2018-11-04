
const featuredProducts = [
    {
        category: 'print template',
        images:[
            {
                source:'images/PT1.jpg',
                alternative: 'Print Template1'
            },{
                source:'images/PT2.jpg',
                alternative: 'Print Template2'
            },{
                source:'images/PT3.jpg',
                alternative: 'Print Template3'
            },
        ]
    },{
        category: 'web template',
        images:[
            {
                source:'images/WT1.jpg',
                alternative: 'Web Template1'
            },{
                source:'images/WT2.jpg',
                alternative: 'Web Template2'
            },{
                source:'images/WT3.jpg',
                alternative: 'Web Template3'
            },
        ]
    },{
        category: 'user interface',
        images:[
            {
                source:'images/UI1.jpg',
                alternative: 'User interface1'
            },{
                source:'images/UI2.jpg',
                alternative: 'User interface2'
            },{
                source:'images/UI3.jpg',
                alternative: 'User interface3'
            },
        ]
    },{
        category: 'mock-up',
        images:[
            {
                source:'images/MU1.jpg',
                alternative: 'Mock-UP1'
            },{
                source:'images/MU2.jpg',
                alternative: 'Mock-UP2'
            },{
                source:'images/MU3.jpg',
                alternative: 'Mock-UP3'
            },
        ]
    },
];
const ourTeam = [
    {
        name: 'Jay Lee',
        foto : 'images/team/jay-lee.jpg',
        resume:'Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing\n' +
        'eiusmod tempor incididut labore Ui / Ux , print template.',
        contacts:[
            {
                name: 'Facebook',
                href: 'https://www.facebook.com/'
            },{
                name: 'Dribble',
                href: 'http://dribble.com/'
            },{
                name: 'Behance',
                href: 'https://www.behance.net/'
            },{
                name: 'Twitter',
                href: 'https://twitter.com/'
            },
        ]
    },    {
        name: 'Brooke Cagle',
        foto : 'images/team/brooke-cagle.jpg',
        resume:'Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing\n' +
        'eiusmod tempor incididut labore Ui / Ux , print template.',
        contacts:[
            {
                name: 'Facebook',
                href: 'https://www.facebook.com/'
            },{
                name: 'Dribble',
                href: 'http://dribble.com/'
            },{
                name: 'Behance',
                href: 'https://www.behance.net/'
            },{
                name: 'Twitter',
                href: 'https://twitter.com/'
            },
        ]
    },    {
        name: 'James Gillespie',
        foto : 'images/team/james-gillespie.jpg',
        resume:'Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing\n' +
        'eiusmod tempor incididut labore Ui / Ux , print template.',
        contacts:[
            {
                name: 'Facebook',
                href: 'https://www.facebook.com/'
            },{
                name: 'Behance',
                href: 'https://www.behance.net/'
            },{
                name: 'Twitter',
                href: 'https://twitter.com/'
            },
        ]
    },    {
        name: 'Ben Gun',
        foto : 'images/team/ben-gun.jpg',
        resume:'Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing\n' +
        'eiusmod tempor incididut labore Ui / Ux , print template.',
        contacts:[
            {
                name: 'Facebook',
                href: 'https://www.facebook.com/'
            },{
                name: 'Dribble',
                href: 'http://dribble.com/'
            },{
                name: 'Behance',
                href: 'https://www.behance.net/'
            },
        ]
    },    {
        name: 'Sonnie Hiles',
        foto : 'images/team/sonnie-hiles.jpg',
        resume:'Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing\n' +
        'eiusmod tempor incididut labore Ui / Ux , print template.',
        contacts:[
            {
                name: 'Dribble',
                href: 'http://dribble.com/'
            },{
                name: 'Behance',
                href: 'https://www.behance.net/'
            },{
                name: 'Twitter',
                href: 'https://twitter.com/'
            },
        ]
    },
];

function onVideoClicked() {
    console.log('video Clicked');
    document.getElementById('video-header-preview').style.zIndex='-1';
    const video = document.getElementById('header-video');
    video.setAttribute('controls', 'true');
    video.play();
}
function getFromAllCategory(numberEach) {
    const images = [];
    for (let i =0; i<numberEach;i++) {
        featuredProducts.map(item =>{
            images.push(item.images[i]);
        });
    }
    return images;
}
function createActiveFoto(profile) {
    const activeFoto = document.createElement('div');
    activeFoto.classList.add('active-foto');
    activeFoto.innerHTML = `<img src="${profile.foto}" alt="${profile.name}">`;
    return activeFoto;
}

function createActiveProfile(activeProfile) {
    const profile = document.createElement('div');
    profile.classList.add('profile');
    profile.innerHTML = `<h3 class="h3">${activeProfile.name}</h3>
                         <p class="resume">${activeProfile.resume}</p>
                         `;
    const contactList = createProfileContactlist(activeProfile.contacts);
    profile.appendChild(contactList);
    return profile;
}
function createProfileContactlist(contacts) {
    const contactList = document.createElement('div');
    contactList.classList.add('contact-list');
    const list = contacts.map(item =>{
        return `<a href="${item.href}" target="_blank">${item.name}</a>`
    });
    contactList.innerHTML = list.join('');
    return contactList;
}
function onHumanClicked(event) {
    fillOurTeam(+event.target.parentNode.dataset.index);
    scrollToElement('present-team');
}
function scrollToElement(theElement) {
    if (typeof theElement === "string") theElement = document.getElementById(theElement);

    let selectedPosX = 0;
    let selectedPosY = 0;

    while (theElement != null) {
        selectedPosY += theElement.offsetTop;
        theElement = theElement.offsetParent;
    }
    window.scrollTo(selectedPosX, selectedPosY);
}


scrollToElement('myId');

function createHuman(human) {
    const element = document.createElement('div');
    const index = ourTeam.indexOf(human);
    element.classList.add('human');
    element.setAttribute('data-index', index);
    element.innerHTML = `
    <div class="rectangle-wraper" >
        <div class="content" data-index="${index}">
            <img src="${human.foto}" alt="${human.name}">
            <span class="name">${human.name}</span>
        </div>
    </div>`;
    element.addEventListener('click', onHumanClicked);
    return element;
}

function createOthers(others) {
    const list = document.createElement('div');
    list.classList.add('other');
        others.map((human, index) =>{
            return list.appendChild(createHuman(human, index));
        });
    return list;
}

function fillOurTeam(activeIndex){
    const parent = document.getElementById('present-team');
    parent.innerHTML = '';
    const activeProfile = ourTeam[activeIndex];
    const others = ourTeam.filter((item, index) =>{
        return index !== activeIndex;
    });

    const activeFoto = createActiveFoto(activeProfile);
    const profile = createActiveProfile(activeProfile);
    const listOther = createOthers(others);
    const wrap = document.createElement('div');
    wrap.classList.add('wrapper');
    wrap.appendChild(profile);
    wrap.appendChild(listOther);
    parent.appendChild(activeFoto);
    parent.appendChild(wrap);
}

function fillFeatureProducts(index) {
    const images = index === -1?
        getFromAllCategory(2):
        featuredProducts[index].images;
    const parrent = document.getElementById('feature-products-images');
    parrent.innerHTML = '';
    images.map(item =>{
        const newEl = document.createElement('div');
        newEl.classList.add('col-md-3','col-sm-6');
        newEl.innerHTML =
            `<div class="rectangle-wraper">
                <div class="content">
                    <img src="${item.source}" alt="${item.alternative}">
                </div>
            </div>`;
        parrent.appendChild(newEl);
    });
}

function onCategoryClick(e) {
    const active = document.getElementsByClassName('active-category');
    Array.prototype.map.call(active, (item)=>{
       item.classList.remove('active-category');
    });
    fillFeatureProducts(featuredProducts.findIndex((item) =>{
        return item.category === e.target.innerHTML;
    }));
    e.target.classList.add('active-category');
}

$(document).ready(()=>{
    const mmenu = $('#my-menu');
    mmenu.mmenu(
        {
            extensions : ['theme-black','position-front' ],
            navbar:{
                title:''
            },
            onClick : {
                close          : true,
                preventDefault : false,
            }
        }
    );
    fillOurTeam(0);
    let mmenuAPI = mmenu.data("mmenu");
    mmenuAPI.bind("open:start", ()=>{
        $('a.hamburger').addClass('is-active');
    });
    mmenuAPI.bind('close:after', ()=>{
        $('a.hamburger').removeClass('is-active');
    });

    document.getElementById('video-play-buttom').addEventListener('click', onVideoClicked);
    document.querySelector('#portfolio .products-menu').addEventListener('click', onCategoryClick)

});

