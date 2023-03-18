//SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');
// MESSAGES 
const messagesNotification = document.querySelector('#message-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messages_2 = document.querySelector('.messages-2');
const message_2 = messages_2.querySelectorAll('.message_2');
const sms = document.querySelector('.rigth-2');
const messageSearch = document.querySelector('#message-search');
const smsSearch = document.querySelector('#sms-search');

//THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');



// Récupère la liste des utilisateurs
const userList = document.getElementById('user-list');

// Récupère la section de la boîte de réception
const inboxSection = document.getElementById('.chat-global');

// Récupère l'élément qui affiche la boîte de réception
const inbox = document.getElementById('inbox');


//=============== SIDEBAR ==================

//renove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click',() => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display='none';
            
        }else{
            document.querySelector('.notifications-popup').style.display ='block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})


//==================== MESSAGE ===========================
// searches chats
const searchMessage = ()=>{
     const val = messageSearch.value.toLowerCase();
     message.forEach(user => {
         let name = user.querySelector('h5').textContent.toLowerCase();
         name.indexOf(val) != -1 ? user.style.display = 'flex' : user.style.display = 'none';
     })
}
// search chat
messageSearch.addEventListener('keyup', searchMessage);

// searches sms
const searchSms = ()=>{
     const val =  smsSearch.value.toLowerCase();
     message_2.forEach(users => {
         let name = users.querySelector('h2').textContent.toLowerCase();
         name.indexOf(val) != -1 ? users.style.display = 'flex' : users.style.display = 'none';
     })
}
// search sms
smsSearch.addEventListener('keyup', searchSms);


//hightlight messages card when messages menu item is clicked
messagesNotification.addEventListener('click',() => {
   
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
      messages.style.boxShadow = 'none';
 }, 2000);
})

//OPENS MESSAGE
const openSms = () => {
    sms.style.display = 'grid';
    inboxSection.style.display = 'grid';
}

//closes MESSAGE
const closeSms = (e) => {
    if(e.target.classList.contains('rigth-2')){
        sms.style.display = 'none';
    }
     
}



//close MESSAGE
sms.addEventListener('click', closeSms);

messagesNotification.addEventListener('click', openSms);

 
// THEME/DISPLAY CUSTOMIZATION

//OPENS MODAL
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

//closes modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
    
}



//close modal
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);

//remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
     size.classList.remove('active');
    })
 }

//======================= FONT ======================
fontSizes.forEach(size =>{
    
    
    size.addEventListener('click',() => {
        removeSizeSelector();
        let fontSizes;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSizes = '10px';
            root.style.setProperty('----sticky-top-left','5.4rem');
            root.style.setProperty('----sticky-top-rigth','5.4rem');
        }else if(size.classList.contains('font-size-2')){
            fontSizes = '13px';
            root.style.setProperty('----sticky-top-left','5.4rem');
            root.style.setProperty('----sticky-top-rigth','-7rem');
        }else if(size.classList.contains('font-size-3')){
            fontSizes = '16px';
            root.style.setProperty('----sticky-top-left','-2rem');
            root.style.setProperty('----sticky-top-rigth','-17rem');
        }else if(size.classList.contains('font-size-4')){
            fontSizes = '19px';
            root.style.setProperty('----sticky-top-left','-5rem');
            root.style.setProperty('----sticky-top-rigth','-25rem');
        }else if(size.classList.contains('font-size-5')){
            fontSizes = '20px';
            root.style.setProperty('----sticky-top-left','-12rem');
            root.style.setProperty('----sticky-top-rigth','-35rem');
        } 

        //change font size of the root html element
    document.querySelector('html').style.fontSize = fontSizes;
    })

    
})

// remove active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker =>{
        colorPicker.classList.remove('active');
    })
}
//change primery colors
colorPalette.forEach(color => {
    color.addEventListener('click', () =>{
        let primary;
        // remove active class from colors
        changeActiveColorClass();
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue',primaryHue);
    })
})

// theme BACKGROUND values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//change bacground color
function bgcolor() {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

//change background colors
Bg1.addEventListener('click', () => {
     // add active class
    Bg1.classList.add('active');
     // remove active class from the others
     Bg2.classList.remove('active');
     Bg3.classList.remove('active');
     // remove customized changes from local storage
     window.location.reload();

});

Bg2.addEventListener('click',() =>{
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';
    //add active class
    Bg2.classList.add('active');
    // remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
   
    bgcolor();
   
});

Bg3.addEventListener('click',() =>{
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    //add active class
    Bg3.classList.add('active');
    // remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    bgcolor();
})


// Ajoute un événement click à chaque élément de la liste des utilisateurs
userList.querySelectorAll('.message_2').forEach(user => {
  user.addEventListener('click', () => {
    // Récupère l'ID de l'utilisateur
    const userId = user.getAttribute('data-userid');
    
    // Modifie l'URL pour inclure l'ID de l'utilisateur
    window.history.pushState({userId: userId}, '', `/inbox/${userId}`);
    
    // Affiche la section de la boîte de réception
    inboxSection.style.display = 'block';
    
    // Charge la boîte de réception de l'utilisateur
    loadInbox(userId);
  });
});

// Charge la boîte de réception de l'utilisateur correspondant à l'ID
function loadInbox(userId) {
  // Code pour charger la boîte de réception de l'utilisateur
  // Vous pouvez utiliser des requêtes AJAX pour récupérer les messages
  // et les afficher dans la section de la boîte de réception.
}


//END