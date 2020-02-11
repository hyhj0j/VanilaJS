const title = document.querySelector("h2");

const colors = ["#D6EBDA", "#0B7AA8", "#DD765D", "#F8A232"];

const superEventHandler = {
  in: function mouseIn() {
    title.innerHTML = "the mouse is here";
    title.style.color = colors[0];
  },
  out: function mouseOut() {
    title.innerHTML = "the mouse is gone";
    title.style.color = colors[1];
  },
  resize: function resize() {
    title.innerHTML = "you just resized";
    title.style.color = colors[2];
  },
  rightClick: function handleClick() {
    title.innerHTML = "i was clicked";
    title.style.color = colors[3];
  }
};

title.addEventListener("mousemove", superEventHandler.in);

title.addEventListener("mouseleave", superEventHandler.out);

window.addEventListener("resize", superEventHandler.resize);

title.addEventListener("contextmenu", superEventHandler.rightClick);
