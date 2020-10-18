// Selectorscorner-text-back-wrapper
const blocks = Array.from(document.querySelectorAll('.side-block'));
const blockText = Array.from(document.querySelectorAll('.block-text text'));
const cornerText = Array.from(document.querySelectorAll('.corner-text'));
const cornerTextBack = Array.from(document.querySelectorAll('.corner-text-back'));
const cornerTextBackWrapper = document.querySelector('.corner-text-back-wrapper');
const line = document.querySelector('.line');

// Set initial mobile / desktop mode with 0sec animation duration
let mobile = false;
setOrientation(0);
window.addEventListener('resize', function() {
    setOrientation(0.3);
});

// Start line drawing animation
startAnimation(1.5);

// Show svg when everything is ready
TweenMax.to('svg', 0.1, { opacity: 1 });

// ---------------------------------------------------
// Line animation timeline
function startAnimation(speed) {
    
    // Looped timeline with adjustable speed
    let tl = new TimelineMax({repeat: -1}).timeScale(speed);

    // Color line drawing 
    tl.to('.line-animated', 10, {
        strokeDashoffset: '1100'
    });

    // Text animation while line appears
    tl.staggerTo(cornerText, 0.3, {
        opacity: 1
    }, 1.3, 0.6);
    tl.staggerTo(cornerTextBack, 0.4, {
        opacity: 0.9
    }, 1.3, 0.4);

    // Text animation while line disappears
    tl.staggerTo(cornerText, 0.3, {
        opacity: 0
    }, 1.3, 5.4);
    tl.staggerTo(cornerTextBack, 0.4, {
        opacity: 0
    }, 1.3, 5.6);
}

// ----------------------------------------------------
// Landscape <-> portrait switcher
function setOrientation(duration) {
    TweenLite.defaultEase = Linear.easeNone;

    TweenLite.to(cornerTextBackWrapper, duration, {
        opacity: window.innerWidth < 768 ? 1 : 0
    });
    
    // Portrait (mobile) mode
    if (window.innerWidth < 768 && !mobile) {
        mobile = true;
        
        // Move main text blocks,
        // Change text align from left to center
        TweenLite.to(blocks[0], duration, {
            x: 119, y: -160,
            scale: 1.4, transformOrigin: 'top'
        });
        TweenLite.to(blocks[1], duration, {
            x: -119, y: 130,
            scale: 1.4, transformOrigin: 'top'
        });
        TweenLite.to(blockText, duration, {
            attr: { 'text-anchor': 'middle' },
            x: 61
        });
        
        // Change position of text in the corner,
        cornerText.forEach(function (text, idx) {
            TweenLite.to(text, duration, {
                attr: {
                    'text-anchor': 'middle',
                    'x': idx % 2 ? 125 : 270,
                    'y': idx % 3 ? 175 : 30
                }
            });
        });
        
        // Change line orientation
        TweenLite.to(line, duration, {
            rotation: 90, transformOrigin: 'center'
        });
        
    // Landscape (desktop) mode
    } else if (window.innerWidth >= 768 && mobile) {
        mobile = false;

        // Get everything back to initial values
        TweenLite.to(blocks, duration, {
            x: 0, y: 0,
            scale: 1, transformOrigin: 'top'
        });
        TweenLite.to(blockText, duration, {
            attr: { 'text-anchor': 'start' },
            x: 0
        });
        TweenLite.to(cornerText, duration, {
            x: 0, y: 0,
            scale: 1, transformOrigin: 'center',
            attr: { 'text-anchor': 'start' },
        });
        cornerText.forEach(function (text, idx) {
            TweenLite.to(text, duration, {
                attr: {
                    'text-anchor': idx % 3 ? 'end' : 'start',
                    'x': idx % 3 ? 370 : 40,
                    'y': idx % 2 ? 200 : 4
                },
            });
        });
        TweenLite.to(line, duration, {
            rotation: 0, transformOrigin: 'center'
        });
    }
}