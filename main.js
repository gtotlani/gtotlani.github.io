var imageNumber = 1

$('#next').on('click', function () {
    $('img').hide();

    if (imageNumber === 4) {
    	imageNumber = 1;
    } else {
    	imageNumber += 1;
    }

    $('img:nth-child(' + imageNumber + ')').fadeIn();
    console.log(imageNumber)
});

$('#previous').on('click', function () {
    $('img').hide();

    if (imageNumber === 1) {
    	imageNumber = 4;
    } else {
    	imageNumber -= 1;
    }

    $('img:nth-child(' + imageNumber + ')').fadeIn();
    console.log(imageNumber)
    
});
