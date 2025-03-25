const botaoAumentar = document.getElementById('botaoAumentar');
const botaoDiminuir = document.getElementById('botaoDiminuir');
const contador = document.getElementById('contador');
const campoTexto = document.getElementById('campoTexto');
const contadorCaracteres = document.getElementById('contadorCaracteres');
const tipoLista = document.getElementById('tipoLista');
const botaoAdicionarItem = document.getElementById('botaoAdicionarItem');
const botaoResetar = document.getElementById('botaoResetar');
const areaConteudo = document.getElementById('areaConteudo');

let numeroCliques = 0;
let numeroItemLista = 1;
let listaAtual = null;

botaoAumentar.onclick = function ()
{
    numeroCliques++;
    contador.textContent = numeroCliques;
};

botaoDiminuir.onclick = function ()
{
    if (numeroCliques > 0)
    {
        numeroCliques--;
        contador.textContent = numeroCliques;
    }
    else
    {
        alert('O contador já está em zero!');
    }
};

campoTexto.oninput = function ()
{
    const textoSemEspacos = campoTexto.value.replace(/ /g, '');
    contadorCaracteres.textContent = textoSemEspacos.length;
};

campoTexto.onkeypress = function (evento)
{
    if (evento.key === 'Enter' && campoTexto.value.trim() !== '')
    {
        const novoParagrafo = document.createElement('p');
        novoParagrafo.textContent = campoTexto.value;
        areaConteudo.appendChild(novoParagrafo);
        campoTexto.value = '';
        contadorCaracteres.textContent = '0';
    }
};

botaoAdicionarItem.onclick = function ()
{
    const tipo = tipoLista.value;

    if (!listaAtual || listaAtual.tagName.toLowerCase() !== tipo)
    {
        listaAtual = document.createElement(tipo);
        areaConteudo.appendChild(listaAtual);
    }

    const novoItem = document.createElement('li');
    novoItem.textContent = 'Item ' + numeroItemLista++;
    listaAtual.appendChild(novoItem);
};

botaoResetar.onclick = function ()
{
    numeroCliques = 0;
    contador.textContent = '0';
    campoTexto.value = '';
    contadorCaracteres.textContent = '0';
    areaConteudo.innerHTML = '';
    numeroItemLista = 1;
    listaAtual = null;
};
