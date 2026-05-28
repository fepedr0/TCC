const form = document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault(); 

    const nome = document.getElementById("name").value.trim();
    const celular = document.getElementById("cellphone").value.trim();
    const segmento = document.getElementById("segment").value.trim();
    const consumo = document.getElementById("type").value;

    if (!nome || !celular || !segmento || !consumo) {
        alert("Por favor, é necessário preencher todos os dados");
        return;
    }

    let consumokWh;

    switch (consumo) { 
        case "first": consumokWh = 150; break;
        case "second": consumokWh = 250; break;
        case "third": consumokWh = 400; break;
        case "fourth": consumokWh = 650; break;
        case "fifth": consumokWh = 1500; break;
        default:      consumokWh = 4000; break;
    }

    // Correção: Troquei a vírgula por ponto (0.8)
    const geracaoPorPlaca = 75;
    const custoPorPlaca   = 1200;
    const tarifaMedia     = 0.80;

    const placas = Math.ceil(consumokWh / geracaoPorPlaca);
    const precoTotal = placas * custoPorPlaca;
    
    // Correção: Uso de ponto para decimal
    const economiaMensal = (consumokWh * tarifaMedia * 0.8).toFixed(2);
    
    const retornoMeses = Math.ceil(precoTotal / economiaMensal);
    const retornoAnos = (retornoMeses / 12).toFixed(1);
    const precoComMdO = precoTotal * 1.20;

    const formatarReais = (valor) => 
        new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valor);
    
    // Pega o ID (certifique-se de ter apenas um no HTML)
    const container = document.getElementById('container');

    container.innerHTML = `
      <div class="resultado">
        <h2>Olá, ${nome}! Veja sua estimativa!</h2> <h4> (Os valores podem sofrer ajustes) </h4>
        <div class="card-resultado">
          <div class="item"> </br>
            <span class="label">Consumo estimado</span>
            <span class="valor">${consumokWh} kWh/mês</span>
          </div> </br>
          <div class="item">
            <span class="label">Placas necessárias</span>
            <span class="valor">${placas} placas (550W cada)</span>
          </div> </br>
          <div class="item">
            <span class="label">Investimento estimado</span>
            <span class="valor">${formatarReais(precoTotal)}</span>
          </div> </br>
          <div class="item">
            <span class="label">Economia mensal estimada</span>
            <span class="valor">${formatarReais(economiaMensal)}</span>
          </div> </br>
          <div class="item">
            <span class="label">Retorno do investimento</span>
            <span class="valor">~${retornoAnos} anos (${retornoMeses} meses)</span>
          </div>
        </div> </br>
        <p class="aviso">
          Valores estimados com base em médias nacionais. 
          Entre em contato para um orçamento personalizado.
        </p> </br>
        <button class="btn-refazer" onclick="location.reload()">
          Refazer simulação
        </button>
      </div>
    `;
  });