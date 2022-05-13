function mostrarLista() {
  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const noun = ["jogger", "racoon"];
  const extension = [".com", ".net", ".us", ".iu"];
  let lista = "";
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extension.length; l++) {
          lista +=
            "<li class = 'list-group-item  bg-warning text-primary fw-bolder'>" +
            pronoun[i] +
            adj[j] +
            noun[k] +
            extension[l] +
            "</li>";
          console.log(pronoun[i] + adj[j] + noun[k] + extension[l]);
        }
      }
    }
  }
  return lista;
}
document.querySelector("#listar").addEventListener("click", () => {
  document.querySelector("#lista").innerHTML = mostrarLista();
});

document.querySelector("#cerrar").addEventListener("click", () => {
  document.querySelector("#lista").innerHTML = "";
});
