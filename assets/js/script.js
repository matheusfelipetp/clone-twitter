//CRIAR E PUBLICAR TWEET
const textarea = document.querySelector("textarea");
const tweetar = document.querySelector("button");
const feed = document.querySelector(".contentPrimary__listTweet");

function catchTweet(event) {
  event.preventDefault();

  const tweetTextarea = textarea.value;
  createTweet(tweetTextarea);
}

tweetar.addEventListener("click", catchTweet);

function createTweet(tweetText) {
  console.log(tweetText);

  let data = new Date();
  let hour = data.getHours();
  let minutes = data.getMinutes();

  const tweet = {
    name: "Matheus Felipe",
    photo: "assets/img/ProfilePic.png",
    user: "@matheusfelipetp",
    text: tweetText,
    time: `${hour}:${minutes}`,
  };

  listTweet(tweet);
}

function listTweet(tweet) {
  const { name, photo, user, text, time } = tweet;

  let li = document.createElement("li");
  li.classList.add("contentPrimary__tweet");

  let img = document.createElement("img");
  img.src = photo;
  img.classList.add("tweet__ProfilePic");

  let div = document.createElement("div");
  div.classList.add("tweet__content");

  let h2 = document.createElement("h2");
  h2.innerText = name;

  let span = document.createElement("span");
  span.innerText = ` ${user} - ${time}`;

  let p = document.createElement("p");
  p.innerText = text;

  div.appendChild(h2);
  div.appendChild(span);
  div.appendChild(p);

  li.appendChild(img);
  li.appendChild(div);

  feed.appendChild(li);

  textarea.value = "";
}

//DESABILITAR BOTÃO
document.getElementById("button").disabled = true;

document
  .getElementById("textTweet")
  .addEventListener("input", function (event) {
    let content = document.getElementById("textTweet").value;

    if (content !== null && content !== "") {
      document.getElementById("button").disabled = false;
    } else {
      document.getElementById("button").disabled = true;
    }
  });

//DARK MODE
const $html = document.querySelector("html");
const $checkbox = document.querySelector("#switch");

$checkbox.addEventListener("change", function () {
  $html.classList.toggle("dark-mode");
});
