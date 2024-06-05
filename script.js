gsap.from(".mid-head-text",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".mid-head-text",
        scroller:"body",
        start:"top 80%",
        end:"top 55%",
        scrub:2
    }
})
gsap.from(".block",{
    scale:0.5,
    stagger:0.1,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".sem-block",
        scroller:"body",
        start:"top 55%",
        end:"top 35%",
        scrub:2
    }
})