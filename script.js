const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const form = document.getElementById("form");
const uname = document.getElementById("name");
const email = document.getElementById("email");
const username = document.getElementById("username");
const submitbtn = document.getElementById("submit");
const userDetails = document.getElementById("user-details");
const greetUser = document.getElementById("greet-user");
const dice = document.getElementById("dice");
const random = document.getElementById("random");
const roll = document.getElementById("roll");
const coupon = document.getElementById("coupon");
const code = document.getElementById("code");
const congrats = document.getElementById("congrats");
const badluck = document.getElementById("badluck");
const gotoimg3 = document.getElementById("gotoimg3");
const getTokenL = document.getElementById("getTokenL");
const congMess = document.getElementById("congMess");
let sum = 0;
let tries = 0;

image1.addEventListener("click", () => {
  form.style.display = "block";
  image1.style.background = "grey";
  image1.style.pointerEvents = "none";
  image2.style.display = "block";
});

function nextimg() {
  image2.style.pointerEvents = "auto";
  alert("User Registered! Now click to 'Get Profile' Image!");
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

image2.addEventListener("click", (event) => {
  image3.style.pointerEvents = "auto";
  userDetails.style.display = "block";
  image2.style.background = "grey";
  greetUser.innerHTML = `Hello ${uname.value}, your email is ${email.value} and your username is: ${username.value}`;
  gotoimg3.innerText = "Now click to 'Roll Dice' Button";
  form.style.display = "none";
  image2.style.pointerEvents = "none";
});

image3.addEventListener("click", function () {
  gotoimg3.style.display = "none";
  dice.style.display = "block";
  image3.style.background = "grey";
});

roll.addEventListener("click", function () {
  let num = Math.floor(Math.random() * 6) + 1;
  random.innerHTML = num;
  sum += num;
  if (sum >= 10 && tries === 0) {
    dice.style.display = "none";
    image4.style.pointerEvents = "auto";
    tries++;
  } else if (sum >= 10 && tries === 1) {
    dice.style.display = "none";
    badluck.style.display = "none";
    image3.style.pointerEvents = "none";
    image4.style.pointerEvents = "auto";
    congrats.style.display = "block";
  } else if (tries === 0) {
    tries += 1;
  } else {
    dice.style.display = "none";
    badluck.style.display = "block";
  }
});

image4.addEventListener("click", function () {
  getTokenL.style.display = "none";
  image4.style.pointerEvents = "none";
  image4.style.background = "grey";
  coupon.style.display = "block";
  congrats.style.display = "block";
  congMess.style.display = "none";
  code.innerHTML =
    "Your token no. " +
    Math.floor(Math.random() * 999999999999)
      .toString()
      .padStart(12, "0");
});
