// Função para carregar a lista de jogos da API e atualizar a interface
function loadGames() {
  axios
    .get("http://localhost:8000/games")
    .then((response) => {
      var games = response.data;
      var list = document.getElementById("games");
      list.innerHTML = ""; // Limpa a lista antes de preenchê-la novamente

      games.forEach((game) => {
        var item = document.createElement("li");

        item.setAttribute("data-id", game.id);
        item.setAttribute("data-title", game.title);
        item.setAttribute("data-year", game.year);
        item.setAttribute("data-price", game.price);

        item.innerHTML = game.id + " - " + game.title + " - $" + game.price;

        var deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Deletar";
        deleteBtn.addEventListener("click", function () {
          deleteGame(item);
        });

        var editBtn = document.createElement("button");
        editBtn.innerHTML = "Editar";
        editBtn.addEventListener("click", function () {
          loadForm(item);
        });

        item.appendChild(deleteBtn);
        item.appendChild(editBtn);

        list.appendChild(item);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

// Chama a função loadGames ao carregar a página
document.addEventListener("DOMContentLoaded", loadGames);

// As outras funções (createGame, deleteGame, loadForm, updateGame) chamam loadGames após realizar a operação
function createGame() {
  axios
    .post("http://localhost:8000/game", game)
    .then((response) => {
      if (response.status == 200) {
        alert("Game cadastrado!");
        loadGames(); // Atualiza a lista de jogos após criar um novo jogo
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function deleteGame(listItem) {
  axios
    .delete("http://localhost:8000/game/" + id)
    .then((response) => {
      if (response.status == 200) {
        alert("Game deletado!");
        loadGames(); // Atualiza a lista de jogos após deletar um jogo
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function updateGame() {
  axios
    .put("http://localhost:8000/game/" + id, game)
    .then((response) => {
      if (response.status == 200) {
        alert("Game atualizado!!");
        loadGames(); // Atualiza a lista de jogos após editar um jogo
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
