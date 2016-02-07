//JAVASCRIPT
$(document).ready(function (){
    console.log('can u see me...');

$('p').hide();
    
    
    //KEYS HOVER----------------------------
    $('img.keys').hover(function (){
        $('img.keys').attr('src', 'images/keys.jpg').attr('width', '300').attr('height', '250');
    }, function (){
        $('img.keys').attr('src', 'images/keyshover.png');
    });
    
     //MOUSE HOVER----------------------------
    $('img.mouse').hover(function (){
        $('img.mouse').attr('src', 'images/mouse.jpg').attr('width', '300').attr('height', '250');
    }, function (){
        $('img.mouse').attr('src', 'images/mousehover.png');
    });

    
     //GUM HOVER----------------------------
    $('img.gum').hover(function (){
        $('img.gum').attr('src', 'images/gum.jpg').attr('width', '300').attr('height', '250');
    }, function (){
        $('img.gum').attr('src', 'images/gumhover.png');
    });

    
    
     //SPRAY HOVER----------------------------
    $('img.spray').hover(function (){
        $('img.spray').attr('src', 'images/spray.jpg').attr('width', '300').attr('height', '250');
    }, function (){
        $('img.spray').attr('src', 'images/sprayhover.png');
    });

    
    
     //WALLET HOVER----------------------------
    $('img.wallet').hover(function (){
        $('img.wallet').attr('src', 'images/wallet.jpg').attr('width', '300').attr('height', '250');
    }, function (){
        $('img.wallet').attr('src', 'images/wallethover.png');
    });


    //KEYS CLICK-----------------------
    $('img.keys').click(function (){
        $('img.keys').attr('src', 'images/keys.jpg').attr('width', '300').attr('height', '250');

        $('p.keys').slideToggle();
        return false;
    });
    
    
    //MOUSE CLICK-----------------------
    $('img.mouse').click(function (){
        $('img.mouse').attr('src', 'images/mouse.jpg').attr('width', '300').attr('height', '250');

        $('p.mouse').slideToggle();
        return false;
    });
    
    
    //GUM CLICK-----------------------
    $('img.gum').click(function (){
        $('img.gum').attr('src', 'images/gum.jpg').attr('width', '300').attr('height', '250');

        $('p.gum').slideToggle();
        return false;
    });
    
    
    //SPRAY CLICK-----------------------
    $('img.spray').click(function (){
        $('img.spray').attr('src', 'images/spray.jpg').attr('width', '300').attr('height', '250');

        $('p.spray').slideToggle();
        return false;
    });

    
    //WALLET CLICK-----------------------
    $('img.wallet').click(function (){
        $('img.wallet').attr('src', 'images/wallet.jpg').attr('width', '300').attr('height', '250');

        $('p.wallet').slideToggle();
        return false;
    });



});