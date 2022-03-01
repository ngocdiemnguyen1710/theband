const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.modal');
const hideModal = document.querySelector('.modal-close');
const modalContainer = document.querySelector('.modal-container');

function showBuyTickets(){
    modal.classList.add('open');
}

function hideModalTicket() {
    modal.classList.remove('open');
}

for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyTickets);
}

hideModal.addEventListener('click', hideModalTicket);
modal.addEventListener('click', hideModalTicket);
modalContainer.addEventListener('click', function(event){
    event.stopPropagation();
})

// Script mobile
const header = document.getElementById('header');
const bars = document.querySelector('.mobile-menu-btn');
bars.onclick = function(){
    header.classList.toggle("show");
}
//Tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for(var i = 0; i < menuItems.length; i++){
    var menuItem = menuItems[i];

    menuItem.onclick = function(event){
        //Kiểm tra xem có anh chị em liền kề và anh chị em liền kề chứ class subnav
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu) {
            event.defaultPrevented();
        } else {
            header.classList.remove("show");
        }
    }
}