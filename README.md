# Christmas at Gran's

"Christmas at Gran's" is a poem written by Michael Brennan at the age of ten. Due to the Covid-19 pandemic, 
Brennan was forced to return to England from his home of many years, Dublin. It is here that the Author of this 
site, Conor Carroll, resides. Carroll, on the side, is an artist and illustrator, and decided to create this site 
as a homage to his friend. 

The pair are aligned in the belief that there can never too many stories in the world, and so pushing this poem 
to the greater reaches of the internet is not just a present for a friend, but a light-hearted form of digital story 
telling. The resulting piece is aimed to be age appropriate, approachable, and enjoyable, while being completely accessible 
to all audiences.


## Code Accreditation 

The code presented in javascript.js as:

$(document).ready(function(){
    checkitem();
});

function checkitem()
{
var $this = $('#myCarousel');
    if($('.carousel-inner .item:first').hasClass('active')) {
        $this.children('.left.carousel-control').hide();
        $this.children('.right.carousel-control').show();
    } else if($('.carousel-inner .item:last').hasClass('active')) {
        $this.children('.left.carousel-control').show();
        $this.children('.right.carousel-control').hide();
    } else {
        $this.children('.carousel-control').show();
    } 
}

seemed to be the only way to use the Carousel feature of Bootstrap (as presented here in their documentation https://getbootstrap.com/docs/4.0/components/carousel/).
The identical nature of the code to this Stack Overflow response (https://stackoverflow.com/questions/20467666/bootstrap-carousel-hide-controls-on-first-and-last) is coincidental
in that no other code seemd to work for my purpose of hiding the left glyph on the first slide, and the right glyph on the last slide.

Nevertheless, I felt it important to highlight that I found the code after having worked through the Bootstrap documentation on performing the same actions, in relation
to the slide and slid events. Other than this the code follows basic if, else if, and else functions. 

A follow-up piece of code enables the carousel to restart without refreshing the page (to be built, as of 14:00 on 02/03/2021).

The deck.core.js JavaScript file was uploaded as I felt it could be of use, but the project is being built with the intention to not rely 
on outside sources.

