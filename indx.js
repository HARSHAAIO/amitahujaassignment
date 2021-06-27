function btnClick() {
  let ele = document.getElementById("menuIcon");
  let nav = document.getElementById("menu");

  if (ele.innerText == "☰") {
    ele.innerHTML = "X";
    nav.style.visibility = "visible";
    nav.style.animation = "rtlslide 1s 1";
  } else {
    ele.innerHTML = "☰";
    nav.style.animation = "ltrslide 1s 1";
    setTimeout(() => {
      nav.style.visibility = "hidden";
    }, 800);
  }

  return true;
}
