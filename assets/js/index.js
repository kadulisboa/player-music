console.log('foi')

function sizeOfThings() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var screenWidth = screen.width;
    var screenHeight = screen.height;

    console.log(document.getElementsByClassName('window-size'))
    console.log(document.getElementsByClassName('screen-size'))

    document.getElementsByClassName('window-size').innerHTML = windowWidth + 'x' + windowHeight;
    document.getElementsByClassName('screen-size').innerHTML = screenWidth + 'x' + screenHeight;

};

setTimeout(sizeOfThings(), 100000)

window.addEventListener('resize', function() {
    sizeOfThings();
});