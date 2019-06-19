const projectswrap = document.querySelector(".projectswrap");
const basic_web = document.querySelector(".basic_web");
const webB = document.querySelector("#web");
const basic_animation = document.querySelector(".basic_animation");
const basic_content = document.querySelector(".basic_content");
const basic_ux = document.querySelector(".basic_ux");

webB.addEventListener("click", showBasicWeb);

function showBasicWeb() {
  projectswrap.style.display = "none";
  basic_web.style.display = "grid";
}

document.querySelector("#projectsB").addEventListener("click", showProjects);
document.querySelector("#projectsB1").addEventListener("click", showProjects);

function showProjects() {
  basic_web.style.display = "none";
  basic_ux.style.display = "none";
  projectswrap.style.display = "block";
}

document.querySelector("#anim").addEventListener("click", showAnimation);

document.querySelector("#animB").addEventListener("click", showAnimation);

function showAnimation() {
  basic_web.style.display = "none";
  projectswrap.style.display = "none";
  basic_animation.style.display = "grid";
}

document.querySelector("#mobileB").addEventListener("click", showMobile);

function showMobile() {
  basic_animation.style.display = "none";
  basic_web.style.display = "grid";
}

document.querySelector("#content").addEventListener("click", showContent);

document.querySelector("#contentB").addEventListener("click", showContent);
document.querySelector("#contentB1").addEventListener("click", showContent);

function showContent() {
  basic_animation.style.display = "none";
  projectswrap.style.display = "none";
  basic_ux.style.display = "none";
  basic_content.style.display = "grid";
}

document.querySelector("#animB1").addEventListener("click", showAnimation1);

function showAnimation1() {
  basic_content.style.display = "none";
  basic_animation.style.display = "grid";
}

document.querySelector("#ux").addEventListener("click", showUx);
document.querySelector("#uxB").addEventListener("click", showUx);

function showUx() {
  projectswrap.style.display = "none";
  basic_content.style.display = "none";
  basic_ux.style.display = "grid";
}
