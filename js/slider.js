$(document).ready(()=> {
    let x = -100;
    let w = 300;

    $('.controller i:nth-child(2)').click(()=> { 
        if(x>-w) {
            $('.images-container').animate({
                "left": `${x}%`
            });
            x-=100; 
        }   
    });

    $('.controller i:nth-child(1)').click(()=> {
        if(x<-100) {
            x+=100;
            $('.images-container').animate({
                "left": `${x+100}%`
            });
        } 
    });

    
});