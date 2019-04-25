const api = "https://mashape-community-skate-ipsum.p.rapidapi.com/1/0/JSON";

const loadButton = document.getElementById('load-button');

function getRequest(url) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open('GET', url);

    request.setRequestHeader("X-RapidAPI-Host", "mashape-community-skate-ipsum.p.rapidapi.com");
    request.setRequestHeader("X-RapidAPI-Key", "b7bfae06bcmshf712d6c0796cac4p13cb8ejsnb70722f5b848");

    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status !== 200) {
          console.log("ERREUR - " + request.response);
          reject(JSON.parse(request.response));
        }
        console.log("OK - " + request.response);
        resolve(JSON.parse(request.response));
      }
    };
    request.send();
  });
}

async function getBlogPost() {
  //Quick hack pour changer le provider de Lorem Ipsum (celui fourni ne fonctionne pas)
  const titlePromise = getRequest(api);
  const loremPromise = getRequest(api);
  try {
    let [titleResponse, loremResponse] = await Promise.all([titlePromise, loremPromise]);
    document.querySelector('main').appendChild(buildPostElement(titleResponse, loremResponse));
  } catch (error) {
    document.querySelector('main').appendChild(buildPostElement('Une erreur est survenue !', error));
  }
}

loadButton.addEventListener('click', async function () {
  getBlogPost();
});

function buildPostElement(title, content) {
  let card = document.createElement('div');
  let cardBody = document.createElement('div');
  let cardTitle = document.createElement('h2');
  let cardContent = document.createElement('p');

  card.classList.add('card');
  cardBody.classList.add('card-body');
  cardTitle.classList.add('card-title');
  cardContent.classList.add('card-text');

  cardTitle.textContent = title;
  cardContent.textContent = content;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardContent);
  card.appendChild(cardBody);

  return card;
}