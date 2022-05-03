gsap.from('.header',{ duration: 1, y: '-100%', ease: 'bounce'})
gsap.from('.link', {duration: 1, opacity: 0, delay: 1, stagger: .5})
gsap.from('.right', {duration: 2, x: '-100vw'})

gsap.fromTo('.button', { opacity: 0 , scale: 0, rotation: 720}, {duration: 1, delay: 3.5, opacity: 1, scale: 1, rotation: 0})