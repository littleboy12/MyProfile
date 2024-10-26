header1 = document.querySelector("nav2");
        header1.style.opacity = "0"

function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 460,
        header1 = document.querySelector("nav2");
        if ((distanceY) > (shrinkOn)) {
            header1.style.opacity = "10000"
            $(header1).addClass("smaller");
        } else { 
            if ($(header1).hasClass("smaller")) {
                $(header1).removeClass("smaller");
                header1.style.opacity = "0"
            }
        }
    });
}
init();