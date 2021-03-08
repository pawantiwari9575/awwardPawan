let tl = gsap.timeline();

tl.from("#overly h1", {
    opacity: 0,
    y: 8,
    duration:2,
    stagger: .1,
    ease: "Expo.easeInOut"
})
tl.from("#overly p", {
    opacity: 0,
    y: 8,
    duration:.3,
    ease: "Expo.easeInOut"
})

tl.from("#overly #rotimg", {
    opacity: 0,
    y: 8,
    duration:2,
    stagger: .1,
    ease: "Expo.easeInOut"
})




let tl2 = gsap.timeline();

tl2.from(" .fin, .te, #cre, .fst video ", {
    scrollTrigger: {
        stagger: .3,
        trigger: "#about",
        pin: true,
        duration: 1,
        start: "top top",
        scrub: 2,
        end: "+=100",
        ease: "power2.easeInOut",
    },
    rotation: 90,
    
})


tl2.from("#lab h5, #rab", {
    scrollTrigger: {
       
        trigger: "#dab",
        pin: true,
        duration: 1,
        start: "top top",
        scrub: 1,
        
        end: "+=100",
        ease: "power2.easeInOut",
    },
    opacity:0,
    y:-50
})


tl2.from("#img1", {
    scrollTrigger: {
       trigger: "#dab",
        pin: true,
        duration: 2,
        start: "top top",
        scrub: 2,
        
        end: "+=100",
        ease: "power2.easeInOut",
    },
    opacity:0,
    y:-60
})



tl2.from("#ccrl ", {
    scrollTrigger: {
       trigger: "#bg3",
        pin: true,
        duration: 5,
        start: "top top",
        scrub: 2,
        
        end: "+=100",
        ease: "power2.easeInOut",
    },
    opacity:0,
    y:-60
})



let tl3 = gsap.timeline();

tl3.from("#mai ", {
    scrollTrigger: {
       trigger: "#hof",
        pin: true,
        duration: 5,
        start: "top top",
        scrub: 2,
        
        end: "+=100",
        ease: "power2.easeInOut",
    },
    opacity:0,
    y:-60

})


gsap.utils.toArray()


