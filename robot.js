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
    const tl = new TimelineMax();
    return tl;
}

const move = () => {
    const tl = new TimelineMax();
    return tl;
}

const master = new TimelineMax();
master.add(bars())