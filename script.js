const menuItems = document.querySelectorAll(".menuItem");
const notify = document.querySelector(".ntyPopUp");
const msgIcon = document.querySelector("#messages");
const msgSection = document.querySelector(".messages");
const messages = document.querySelectorAll(".message");
const msgSearch = document.querySelector("#msgSrch");
const theme = document.querySelector("#theme");
const themePanel = document.querySelector(".customTheme");
const fontSize = document.querySelectorAll(".chooseSize span");
const root = document.querySelector(":root");
const colorPallet = document.querySelectorAll(".chooseColor span");
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");

// code to add or remove active class on sidebar
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((menuItem) => {
      menuItem.classList.remove("active");
    });
    item.classList.add("active");
    if (item.id != "notification") {
      notify.style.display = "none";
    } else {
      notify.style.display = "block";
      document.querySelector(".ntyCount").style.display = "none";
    }
  });
});

// code to focuse on the message section when click on message icon
msgIcon.addEventListener("click", () => {
  msgSection.style.boxShadow = "0 0 1rem var(--color-primary)";
  document.querySelector("#msgCount").style.display = "none";
  setTimeout(() => {
    msgSection.style.boxShadow = "none";
  }, 1000);
});

// search for particular message in the message search box
const searchMsg = () => {
  let val = msgSearch.value.toLowerCase();
  messages.forEach((message) => {
    let name = message.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) !== -1) {
      message.style.display = "flex";
    } else {
      message.style.display = "none";
    }
  });
};

msgSearch.addEventListener("keyup", searchMsg);

// =========== code to customize theme ============

// function to open theme panel
const openPanel = () => {
  themePanel.style.display = "grid";
};

// funciton to close theme panel
const closePanel = (e) => {
  if (e.target.classList.contains("customTheme")) {
    themePanel.style.display = "none";
  }
};

theme.addEventListener("click", openPanel);
themePanel.addEventListener("click", closePanel);

// code to customize font
fontSize.forEach((size) => {
  let fontsize;
  size.addEventListener("click", () => {
    fontSize.forEach((i) => {
      i.classList.remove("active");
    });
    size.classList.add("active");
    if (size.classList.contains("fontSize-1")) {
      fontsize = "10px";
    } else if (size.classList.contains("fontSize-2")) {
      fontsize = "13px";
    } else if (size.classList.contains("fontSize-3")) {
      fontsize = "16px";
    } else if (size.classList.contains("fontSize-4")) {
      fontsize = "19px";
    } else if (size.classList.contains("fontSize-5")) {
      fontsize = "20px";
    }
    document.querySelector("html").style.fontSize = fontsize;
  });
});

// note --> as we know we used 'rem' for all our font sizes that is why we're albe to change all our font size at once just by changing that of our html element

// code to customize the primary color

colorPallet.forEach((color) => {
  color.addEventListener("click", () => {
    colorPallet.forEach((e) => e.classList.remove("active"));
    color.classList.add("active");
    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }
    root.style.setProperty("--primary-hue", primaryHue);
  });
});

//code to customize the background color
let ligthColor, darkColor, whiteColor;

const changeBG = () => {
  root.style.setProperty("--dark-color-lightness", darkColor);
  root.style.setProperty("--light-color-lightness", ligthColor);
  root.style.setProperty("--white-color-lightness", whiteColor);
};

bg1.addEventListener("click", () => {
  bg1.classList.add("active");
  bg2.classList.remove("active");
  bg3.classList.remove("active");
  window.location.reload();
});

bg2.addEventListener("click", () => {
  darkColor = "95%";
  whiteColor = "20%";
  ligthColor = "15%";
  bg2.classList.add("active");
  bg1.classList.remove("active");
  bg3.classList.remove("active");
  changeBG();
});

bg3.addEventListener("click", () => {
  darkColor = "95%";
  whiteColor = "10%";
  ligthColor = "0%";
  bg3.classList.add("active");
  bg1.classList.remove("active");
  bg2.classList.remove("active");
  changeBG();
});
