
let t1 = gsap.timeline()

t1.from("nav",{
    height:0,
    duration:.8,
    opecity:0
})
t1.from("nav a",{
    y:-40,
    opacity:0,
    stagger:0.1
})
t1.pause();


let isPlaying = false; // Initial state

function toggleAnimation() {

  if (!isPlaying) {
    // If currently not playing, start playing
    t1.play();
 // Reset the onClick attribute
  } else {
    // If currently playing, reverse the animation
    t1.reverse();
   // Reset the onClick attribute
  }
  isPlaying = !isPlaying; // Toggle the state
}