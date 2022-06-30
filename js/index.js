var lsProduto = getLsProdutos();
// var lsProduto = JSON.parse(localStorage.getItem("lsProduto"));
// localStorage.setItem("lsProduto", JSON.stringify(lsProduto));
// console.log(lsProduto)
contador = 0;
totalValor = 0;

function addProduto(i, qt) {
    produto = lsProduto[i];
    produto.qt += qt;
    (produto.qt < 0) ? produto.qt = 0: "";
    document.getElementById("cod-" + i).innerHTML = produto.qt;

    // Contador de produdos
    contador = contador + qt;
    (contador < 0) ? contador = 0: "";
    document.querySelector(".contador").innerHTML = contador;

    // Contador de produdos
    valorProduto = produto.valor * qt;
    totalValor = totalValor + valorProduto;
    (totalValor < 0) ? totalValor = 0: "";
    document.querySelector(".total").innerHTML = `R$ ${totalValor.toFixed(2)}`;
}

//document.getElementById("cod-" + i).innerHTML = `R$ ${(produto.valor * produto.qt).toFixed(1)} (x${produto.qt})`;

// Função Trio
function addProdutoT(i, qt) {
    produto = lsProduto[i];
    produto.qtTrio += qt;
    (produto.qtTrio < 0) ? produto.qtTrio = 0: "";
    document.getElementById("cod" + i).innerHTML = produto.qtTrio;

    // Contador de produdos
    contador = contador + qt;
    (contador < 0) ? contador = 0: "";
    document.querySelector(".contador").innerHTML = contador;

    // Contador de produdos
    valorProduto = produto.valorT * qt;
    totalValor = totalValor + valorProduto;
    (totalValor < 0) ? totalValor = 0: "";
    document.querySelector(".total").innerHTML = `R$ ${totalValor.toFixed(2)}`;
    // (x${produto.qt})
}

function criar() {
    g = "";
    f = "";
    p = lsProduto[1];
    for (i in lsProduto) {
        p = lsProduto[i];

        if (g != p.grupo) {
            var grupo = document.createElement("div");
            grupo.classList.add("grupo");
            grupo.innerHTML = `
            <div class="img-container" id="${p.grupo}">
                <a onclick="ativar()">
                    <img src="images/fish-salad-dish.jpg" alt="food pic">
                </a>
            </div>                    
            <div class="content-head">
                <div>
                    <a onclick="ativar()">
                    <h3 class="grupo">${p.grupo}</h3>
                </a>
                <ul class="rating">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star-half-alt"></i></li>
                </ul>
                <small>4.5 (122)</small>
            </div>`;
            document.getElementById("conteudo").appendChild(grupo);
            g = p.grupo;
        }

        // NavBar
        if (f != p.grupo) {
            const node = document.querySelector("#myList2 > a");
            var idValor = document.createAttribute("href");
            idValor.value = `#${p.grupo}`;
            node.setAttributeNode(idValor);
            const menu = p.grupo.toUpperCase()
            node.innerHTML = menu;
            const clone = node.cloneNode(true);
            document.getElementById("myList2").appendChild(clone);
            f = p.grupo;
        }

        if (p.cod != '') {
            var produto = document.getElementsByClassName("produtor")[0].cloneNode(true);
            produto.getElementsByClassName("descricao")[0].innerHTML = p.descricao;
            produto.getElementsByClassName("cod")[0].innerHTML = p.cod;
            produto.getElementsByClassName("valor")[0].innerHTML = `R$ ${p.valor.toFixed(1)}`;
            produto.getElementsByClassName("valor1")[0].innerHTML = `R$ ${p.valor.toFixed(1)}`;
            produto.getElementsByClassName("valor2")[0].innerHTML = `R$ ${p.valorT.toFixed(1)}`;
            setEvents(produto);
            setEventsT(produto);
            // document.getElementById("conteudo").appendChild(produto);
        } else {
            var produto = document.getElementsByClassName("outros")[0].cloneNode(true);
            produto.getElementsByClassName("outros-desc")[0].innerHTML = p.descricao;
            produto.getElementsByClassName("outros-valor")[0].innerHTML = `R$ ${p.valor.toFixed(1)}`;
            setEvents(produto);
            p.cod = p.descricao;

        }
        document.getElementById("conteudo").appendChild(produto);
    }

    none = document.createAttribute("style");
    none.value = `display: none`;
    document.getElementsByClassName("produtor")[0].setAttributeNode(none)
    document.getElementsByClassName("outros")[0].style.display = 'none';
    document.querySelector("#myList2 > a:nth-child(1)").style.display = 'none';
}
var pedido = '';

function setEvents(produto) {
    var btSoma = produto.getElementsByClassName("bt-soma")[0];
    addP = document.createAttribute("onclick");
    addP.value = `addProduto(${i}, 1)`;
    btSoma.setAttributeNode(addP)

    var btSubtrai = produto.getElementsByClassName("bt-subtrai")[0];
    addS = document.createAttribute("onclick");
    addS.value = `addProduto(${i}, -1)`;
    btSubtrai.setAttributeNode(addS)

    var idValor = document.createAttribute("id");
    idValor.value = `cod-${i}`;
    produto.getElementsByClassName("parcial")[0].setAttributeNode(idValor);
}

// funcão Trio
function setEventsT(produto) {
    var btSoma = produto.getElementsByClassName("bt-somaT")[0];
    addP = document.createAttribute("onclick");
    addP.value = `addProdutoT(${i}, 1)`;
    btSoma.setAttributeNode(addP)

    var btSubtrai = produto.getElementsByClassName("bt-subtraiT")[0];
    addS = document.createAttribute("onclick");
    addS.value = `addProdutoT(${i}, -1)`;
    btSubtrai.setAttributeNode(addS)

    var idValor = document.createAttribute("id");
    idValor.value = `cod${i}`;
    produto.getElementsByClassName("parcialT")[0].setAttributeNode(idValor);
}

function contador() {
    contador = 0;
    for (i in lsProduto) {
        p = lsProduto[i]
        if (p.qt > 0) {
            contador = contador + p.qt;
            console.log(contador);

            document.querySelector(".contador").innerHTML = contador;
            contador = 0;
        }
    }
}

function enviar() {
    modal.style.display = "block";
    total = 0;
    extrato = "Pedido 001<br>";
    for (i in lsProduto) {
        p = lsProduto[i]
        if (p.qt > 0) {
            (p.cod.length > 3) ? extrato += '': extrato += '№ ';
            extrato += `${p.cod} (${p.qt}x R$${p.valor.toFixed(1)}) = R$${(p.qt * p.valor).toFixed(1)} <br>`;
            total += p.qt * p.valor;
        }
        // Função Trio
        if (p.qtTrio > 0) {
            (p.cod.length > 3) ? extrato += '': extrato += '№ ';
            extrato += `${p.cod} Trio (${p.qtTrio}x R$${p.valorT.toFixed(1)}) = R$${(p.qtTrio * p.valorT).toFixed(1)} <br>`;
            total += p.qtTrio * p.valorT;
        }
    }
    if (extrato != "") {
        extrato += `TOTAL PRODUTOS = R$${total.toFixed(1)}`;
        document.getElementById("complemeto").style.display = 'block';
        document.getElementById("bt-enviarws").style.display = 'block';
    } else {
        extrato = 'Necessário escolhor ao menos 1 produto.';
        document.getElementById("complemeto").style.display = 'none';
        document.getElementById("bt-enviarws").style.display = 'none';
    }

    document.getElementById("pedido").innerHTML = extrato;
    pedido = extrato;

}

function enviarWs() {
    fone = '556194214606';
    nome = document.getElementById("nome").value;
    endereco = document.getElementById("endereco").value;
    (endereco != '') ? pedido += `<br>Endereço: ${endereco}`: '';
    if (nome == '') { alert("Digite seu nome"); return; }
    if (endereco == '') { alert("Digite seu endereço"); return; }
    pedido += `<br>Nome: ${nome}`;
    pedido = pedido.replaceAll('<br>', '\n');
    pedido = encodeURI(pedido);
    console.log(pedido)
    link = `https://api.whatsapp.com/send?phone=${fone}&text=${pedido}`;
    window.open(link, '_blank');
    // window.location.href = link;
}


var btn = document.getElementById("btEnviar");
var modal = document.getElementById("modal");

btn.onclick = function() {
    enviar();
}

var btnX = document.getElementsByClassName("fechar")[0];
btnX.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {

    if (event.target == modal) {
        modal.style.display = "none";
    }
}

criar();