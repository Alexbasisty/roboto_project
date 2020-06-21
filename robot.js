const scale = () => {
    return Math.random() * 3;
}
const color = () => {
    const colors = ['green', 'red', 'blue', 'yellow'];
    return colors[Math.floor(Math.random() * 4)];
}

const bars = () => {
    const tl = new TimelineMax({
        onComplete: bars
    });
    // const voiceBars = document.querySelector("#voice-bars");
    const barsEl = document.querySelectorAll("#voice-bars > *");

    tl.set(barsEl, { y: -30, transformOrigin: '50% 50%' })
    tl.to(barsEl, .7, { 
        scaleY: scale,
        fill: color, 
        ease: Bounce.easeIn,
        stagger: { each: 0.1, repeat: 1, yoyo: true }
     });

    return tl;
}

const blink = () => {
    const tl = new TimelineMax({ repeat: -1, repeatDelay: 3, delay: 2 });
    const eyes = document.querySelectorAll('#eye-left, #eye-right');

    tl
     .set(eyes, { transformOrigin: '50% 50%' })
     .to(eyes, .1, { scaleY: 0, fill: "#231f20" })
     .to(eyes, .12, { scaleY: 1, fill: "#48b3e6" })
     .to(eyes, .1, { scaleY: 0, fill: "#231f20" }, "+=0.5")
     .to(eyes, .1, { scaleY: 1, fill: "#48b3e6" })
     .to(eyes, .08, { scaleY: 0, fill: "#231f20" }, "+=1.5")
     .to(eyes, .08, { scaleY: 1, fill: "#48b3e6" })

    return tl;
}

const move = (elements) => {
    const tl = new TimelineMax();
    tl.to(elements, .5, {
        y: -60,
        ease: "none",
        stagger: { each: 0.5, repeat: -1, yoyo: true }
    })

    return tl;
}

const master = new TimelineMax();
master.add('start')
master.add(bars(), 'start')
master.add(move(document.querySelectorAll('#leg-right, #leg-left')), 'start')
master.add(blink(), 'start')