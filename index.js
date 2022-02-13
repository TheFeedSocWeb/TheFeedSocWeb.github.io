//SideBar
const menuItems = document.querySelectorAll('.menu-item');

const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');


//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        } else{
            document.querySelector('notifications-popup').style.display = 'grid';
            document.querySelector('#notifications . notification-count').style.display='none';
            
        }
    })
})

// Messages

messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})
