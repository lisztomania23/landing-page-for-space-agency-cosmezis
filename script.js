// Intersection Observer
const observer = new IntersectionObserver((entries) => {
    // Iterate through each entry
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            // Add 'show' class when element enters viewport
            entry.target.classList.add('show');
            entry.target.classList.remove('no-webkit-fill');
            if (entry.target.classList.contains('hidden-hero-text')) {
                setTimeout(() => {
                    entry.target.classList.add('no-webkit-fill');
                }, 1000);
            }
            // Stop observing
            observer.unobserve(entry.target);
        }
    });
});

// Select all elements with the specified classes
const hiddenElements = document.querySelectorAll('.hidden, .hidden-hero-text, .hiddenimg, .hiddenhero, .hidden-hero-btn');
// Observe each of these elements
hiddenElements.forEach((el) => observer.observe(el));



// music controls
const main = document.querySelector('main');
let audio;
let audioPlayed = false;

main.addEventListener('click', function () {
    if (!audioPlayed) {
        if (!audio) {
            audio = new Audio();
            audio.id = 'spaceMusic';
            main.appendChild(audio);
        }

        audio.src = "music/after-dark-pandora-cody-chillwithme.mp3";
        audio.play();
        audioPlayed = true;

        audio.addEventListener('ended', function () {
            audio.src = "music/KQEJO-emphasis.mp3";
            audio.play();
        });
    }
});



// for modal
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.btn, .xplore').forEach(function (element) {
        element.addEventListener('click', function () {
            document.querySelector('.modal-wrapper').classList.add('open');
        });
    });

    document.querySelector('.btn-close').addEventListener('click', function () {
        document.querySelector('.modal-wrapper').classList.remove('open');
    });

    document.querySelector('.modal-wrapper').addEventListener('click', function (event) {
        if (event.target === this) {
            this.classList.remove('open');
        }
    });
});



// $(document).ready(function () {
//     // Open the modal
//     $(".btn, .xplore").click(function () {
//         $(".modal-wrapper").addClass("open");
//     });

//     // Close the modal on clicking the close button
//     $(".btn-close").click(function () {
//         $(".modal-wrapper").removeClass("open");
//     });

//     // Close the modal when clicking outside of it
//     $(".modal-wrapper").click(function (event) {
//         if (event.target === this) {
//             $(this).removeClass("open");
//         }
//     });
// });


// Matrix Rain Animation

// function createMatrixRainAnimation() {
//     function r(from, to) {
//         return ~~(Math.random() * (to - from + 1) + from);
//     }

//     function pick() {
//         return arguments[r(0, arguments.length - 1)];
//     }

//     function getChar() {
//         return String.fromCharCode(pick(
//             r(0x3041, 0x30ff),
//             r(0x2000, 0x206f),
//             r(0x0020, 0x003f)
//         ));
//     }

//     function loop(fn, delay) {
//         let stamp = Date.now();
//         function _loop() {
//             if (Date.now() - stamp >= delay) {
//                 fn(); stamp = Date.now();
//             }
//             requestAnimationFrame(_loop);
//         }
//         requestAnimationFrame(_loop);
//     }

//     class Char {
//         constructor() {
//             this.element = document.createElement('dope');
//             this.mutate();
//         }
//         mutate() {
//             this.element.textContent = getChar();
//         }
//     }

//     class Trail {
//         constructor(list = [], options) {
//             this.list = list;
//             this.options = Object.assign(
//                 { size: 10, offset: 0 }, options
//             );
//             this.body = [];
//             this.move();
//         }
//         traverse(fn) {
//             this.body.forEach((n, i) => {
//                 let last = (i == this.body.length - 1);
//                 if (n) fn(n, i, last);
//             });
//         }
//         move() {
//             this.body = [];
//             let { offset, size } = this.options;
//             for (let i = 0; i < size; ++i) {
//                 let item = this.list[offset + i - size + 1];
//                 this.body.push(item);
//             }
//             this.options.offset =
//                 (offset + 1) % (this.list.length + size - 1);
//         }
//     }

//     class Rain {
//         constructor({ target, row }) {
//             this.element = document.createElement('p');
//             this.build(row);
//             if (target) {
//                 target.appendChild(this.element);
//             }
//             this.drop();
//         }
//         build(row = 20) {
//             let root = document.createDocumentFragment();
//             let chars = [];
//             for (let i = 0; i < row; ++i) {
//                 let c = new Char();
//                 root.appendChild(c.element);
//                 chars.push(c);
//                 if (Math.random() < .5) {
//                     loop(() => c.mutate(), r(1e3, 5e3));
//                 }
//             }
//             this.trail = new Trail(chars, {
//                 size: r(10, 30), offset: r(0, 100)
//             });
//             this.element.appendChild(root);
//         }
//         drop() {
//             let trail = this.trail;
//             let len = trail.body.length;
//             let delay = r(10, 100);
//             loop(() => {
//                 trail.move();
//                 trail.traverse((c, i, last) => {
//                     c.element.style = `
//               color: hsl(136, 100%, ${85 / len * (i + 1)}%)
//             `;
//                     if (last) {
//                         c.mutate();
//                         c.element.style = `
//                 color: hsl(136, 100%, 85%);
//                 text-shadow:
//                     0 0 .5em #fff,
//                     0 0 .5em currentColor;
//                 `;
//                     }
//                 });
//             }, delay);
//         }
//     }

//     const matrix = document.querySelector('matrix');
//     for (let i = 0; i < 50; ++i) {
//         new Rain({ target: matrix, row: 50 });
//     }
// }

// createMatrixRainAnimation();
