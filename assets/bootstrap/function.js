
// function showAlert(){
//     alert("This is a choclate cake it is made choclate,egg,")
// }

// document.getElementById("#productimage").forEach(function(image){
//     image.addEventListener("click",function(){
//         let card = this.closest(".product-image");
//         let name = card.querySelector("h5").innerText;
//         let price = card.querySelector("p").innerText;

//         alert(
// "this is my name"
//         )
//     })
// }); 




document.querySelectorAll(".product-card").forEach(function(card){
card.querySelector("img").addEventListener("click",function(){
    alert(card.innerHTML)
});

card.querySelector("h5").addEventListener("click",function(){
    alert(card.innerHTML)
});
});



document.querySelectorAll(".product-card").forEach(function(card) {
let mainImage = card.querySelector(".main-img");
let thumbnails = card.querySelectorAll(".thumbails-images img");
thumbnails.forEach(function(thumbnail) {
thumbnail.addEventListener("click", function() {
mainImage.src = this.src;
 });
});
});
document.querySelectorAll('.bakery-faq-question').forEach(function (btn) {
btn.addEventListener('click', function () {
const currentItem = this.parentElement;
document.querySelectorAll('.bakery-faq-item').forEach(function (item) {
if (item !== currentItem) {
 item.classList.remove('active');
}
});
currentItem.classList.toggle('active');
});
});

document.getElementById('bakeryContactForm').addEventListener('submit', function (e) {
e.preventDefault();
const statusEl = document.getElementById('bakeryContactStatus');
statusEl.textContent = 'Thank you! Your message has been received.';
this.reset();
});
document.getElementById('bakeryNewsletterForm').addEventListener('submit', function (e) {
e.preventDefault();
document.getElementById('bakeryNewsletterMsg').textContent = 'Subscribed! Thank you for joining our newsletter.';
this.reset();
});


// sujetions

// slider(cake, pastries , cookies),

// add product detailing using javascript alert when user click on to specific product so it will open js default alert and show the product title innerhtml and price innerhtml

// add gallery images for specific product add (3)

// for feedback form create 2 sections in feedback section 

// create sitemap to define your all sections of your website 

// gallery section must be added with main heading of gallery and add all category images with link

// faq section , contact us section ,about us section  must be added

// footer must be added

// website must be responsive!!