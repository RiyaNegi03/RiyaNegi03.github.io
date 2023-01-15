window.onscroll = function () {
    myFunction();
  };
  
  let navBar = document.querySelector(".navBar");
  let scrollBTN = document.querySelector(".scrollUpBtn");
  function myFunction() {
    if (window.scrollY > 20) {
      // console.log("akfsadf");
      navBar.classList.add("sticky");
    } else {
      navBar.classList.remove("sticky");
    }
    if (window.scrollY > 500) {
      scrollBTN.classList.add("show");
    } else {
      scrollBTN.classList.remove("show");
    }
  }
  
  scrollBTN.addEventListener("click", function () {
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, and firefox
  });
  
  var hamburgMenu = document.querySelector(".menuLinksBtn");
  var hamburgToggle = document.querySelector(".navBar .menuLinks");
  var hamburgClose = document.querySelector(".menuLinksBtn i");
  
  hamburgMenu.addEventListener("click", function () {
    hamburgToggle.classList.toggle("active");
    hamburgClose.classList.toggle("active");
  });
  
  GitHubCalendar(".calendar", "RiyaNegi03", {
    responsive: true,
  });
  
  let typingText = document.getElementById("typingText");
  const texts = [
    "I am an Aspiring Full Stack Developer.",
    "I Love Coding.",
    "I Love Problem Solving.",
  ];
  let currentText = [];
  let isRemoving = false;
  let End = false;
  let i = 0;
  let j = 0;
  
  function loop() {
    End = false;
    typingText.innerHTML = currentText.join("");
  
    if (i < texts.length) {
      if (!isRemoving && j <= texts[i].length) {
        currentText.push(texts[i][j]);
        j++;
        typingText.innerHTML = currentText.join("");
      }
  
      if (isRemoving && j <= texts[i].length) {
        currentText.pop(texts[i][j]);
        j--;
        typingText.innerHTML = currentText.join("");
      }
  
      if (j == texts[i].length) {
        End = true;
        isRemoving = true;
      }
  
      if (isRemoving && j === 0) {
        currentText = [];
        isRemoving = false;
        i++;
        if (i === texts.length) {
          i = 0;
        }
      }
    }
    const speedUp = Math.random() * (50 - 20) + 20;
    const normalSpeed = Math.random() * (50 - 20) + 50;
    const time = End ? 1000 : isRemoving ? speedUp : normalSpeed;
    setTimeout(loop, time);
  }
  loop();
  
  