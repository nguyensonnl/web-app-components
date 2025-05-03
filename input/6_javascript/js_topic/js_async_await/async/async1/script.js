const btnElement = document.querySelector(".btn");
const divElement = document.querySelector(".list-user");

async function CallAPIUsers(url, callback) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Response status:" + res.status);
    }

    const users = await res.json();
    callback(users);
  } catch (error) {
    console.log(error);
  }
}

function getListUser() {
  let html = "";

  CallAPIUsers("https://jsonplaceholder.typicode.com/users", function (data) {
    if (data && data.length > 0) {
      data.map((item) => {
        html += `
                      <p>${item.name}</p>
                  `;
      });
    }

    divElement.innerHTML = html;
  });
}

btnElement.addEventListener("click", getListUser);
