fetch("data/produtos.json")
  .then(res => res.json())
  .then(produtos => {
    const top20 = document.querySelector("#top20 .grid");
    const personalizado = document.querySelector("#personalizado .grid");

    produtos.forEach(p => {
      const card = `
        <div class="card">
          <img src="${p.imagem}" alt="${p.nome}">
          <h3>${p.nome}</h3>
          <p>${p.preco}</p>
          <span>${p.plataforma}</span>
          <a href="${p.link}" target="_blank" class="btn">Ver oferta</a>
        </div>
      `;

      if (p.top && top20) {
        top20.innerHTML += card;
      }

      if (p.personalizado && personalizado) {
        personalizado.innerHTML += card;
      }
    });
  });
