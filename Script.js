let estado = {
    energia: 100,
    inventario: [],
    cenaAtual: "inicio",
    decisoes: 0
};


// ===============================
// DADOS DA AVENTURA
// ===============================

const cenas = {

    inicio: {
        capitulo: "CAPÍTULO 01",
        titulo: "O despertar",

        texto: `
Você abre os olhos.

O chão metálico está gelado. Luzes vermelhas piscam
no teto e uma sirene distante ecoa pelos corredores.

Você não lembra quem é.

Na sua frente existem três portas.

Uma delas possui uma luz azul.
Outra está completamente escura.
A terceira parece ter sido arrombada.

Então uma voz surge dos alto-falantes:

"Se você está ouvindo isso...
a estação já deveria estar morta."
        `,

        escolhas: [
            ["🔵 Entrar na porta azul", "laboratorio"],
            ["🌑 Entrar na porta escura", "corredor"],
            ["🚪 Investigar a porta arrombada", "hangar"]
        ]
    },


    laboratorio: {

        capitulo: "CAPÍTULO 02",

        titulo: "O laboratório",

        texto: `
A porta se fecha atrás de você.

O laboratório está destruído.

Vidros quebrados cobrem o chão.

No centro da sala existe um computador
que ainda possui energia.

Na tela aparece uma mensagem:

"MEMÓRIA DO SUJEITO: 73% RECUPERADA."

Você sente um arrepio.

Talvez você não tenha perdido a memória.

Talvez alguém tenha apagado.
        `,

        escolhas: [
            ["💾 Acessar o computador", "computador"],
            ["🔬 Procurar algo útil", "chave"],
            ["⬅️ Voltar para o corredor", "corredor"]
        ]
    },


    corredor: {

        capitulo: "CAPÍTULO 02",

        titulo: "O corredor",

        texto: `
Você entra no setor escuro.

A iluminação falha.

Um som metálico vem de algum lugar atrás de você.

CLANG.

CLANG.

CLANG.

Algo está caminhando.

Você encontra uma pequena lanterna
abandonada no chão.
        `,

        escolhas: [
            ["🔦 Pegar a lanterna", "lanterna"],
            ["🏃 Correr", "hangar"],
            ["👁️ Esperar para descobrir o que é", "criatura"]
        ]
    },


    hangar: {

        capitulo: "CAPÍTULO 02",

        titulo: "O hangar",

        texto: `
As enormes portas do hangar estão abertas.

Do outro lado existe apenas o espaço.

A estação está orbitando um planeta azul.

Você encontra uma pequena nave de emergência.

Ela ainda possui combustível.

Mas existe um problema.

A nave exige uma chave de acesso.
        `,

        escolhas: [
            ["🚀 Tentar ligar a nave", "nave"],
            ["🔎 Procurar a chave", "chave"],
            ["⬅️ Voltar", "inicio"]
        ]
    },


    computador: {

        capitulo: "CAPÍTULO 03",

        titulo: "A verdade",

        texto: `
O computador reconhece seu rosto.

Uma gravação começa.

Você aparece na tela.

Mas está diferente.

Mais velho.

Você diz:

"Se você chegou até aqui, significa que eu falhei."

A gravação continua.

"Você não é um passageiro."

"Você é o motivo pelo qual esta estação existe."

A tela apaga.
        `,

        escolhas: [
            ["🧠 Continuar investigando", "verdade"],
            ["🚀 Fugir da estação", "nave"]
        ]
    },


    chave: {

        capitulo: "CAPÍTULO 03",

        titulo: "A chave",

        texto: `
Você encontra um pequeno dispositivo metálico.

Uma inscrição está gravada nele:

AETHER.

Assim que você toca no objeto,
a estação inteira começa a tremer.

A voz dos alto-falantes retorna:

"PROTOCOLO AETHER INICIADO."

Você percebe que talvez tenha acabado
de ativar algo.
        `,

        escolhas: [
            ["⚡ Descobrir o que ativou", "verdade"],
            ["🚀 Ir para a nave", "nave"]
        ]
    },


    lanterna: {

        capitulo: "CAPÍTULO 03",

        titulo: "O que vive no escuro",

        texto: `
A lanterna ilumina o corredor.

Nada.

Você respira fundo.

Então aponta a luz para trás.

Uma criatura está parada a poucos metros.

Ela possui o mesmo símbolo AETHER
marcado no peito.

Ela olha para você.

E diz:

"Finalmente."
        `,

        escolhas: [
            ["🗣️ Perguntar quem ela é", "criatura"],
            ["🏃 Fugir para o hangar", "hangar"]
        ]
    },


    criatura: {

        capitulo: "CAPÍTULO 03",

        titulo: "O outro",

        texto: `
A criatura não tenta atacar.

Ela apenas observa você.

"Você não se lembra de mim?"

Ela aponta para o seu peito.

Existe uma pequena cicatriz.

A mesma marca que ela possui.

"Fomos criados juntos."

Antes que você consiga responder,
as luzes da estação ficam verdes.
        `,

        escolhas: [
            ["🧬 Perguntar quem você é", "verdade"],
            ["🚀 Fugir", "nave"]
        ]
    },


    verdade: {

        capitulo: "FINAL",

        titulo: "A memória",

        texto: `
Agora tudo volta.

Você se lembra.

Aether não era uma estação.

Era um experimento.

Você e os outros habitantes foram criados
para testar os limites da consciência humana.

Mas algo deu errado.

Você foi o único que sobreviveu.

A estação não estava abandonada.

Ela estava esperando você acordar.

A voz pergunta:

"Você quer lembrar de tudo?"

Você olha para o espaço.

E percebe que, pela primeira vez,
a escolha realmente é sua.
        `,

        escolhas: [
            ["🧠 Recuperar todas as memórias", "final_memoria"],
            ["🌌 Apagar tudo e começar novamente", "final_liberdade"]
        ]
    },


    nave: {

        capitulo: "FINAL",

        titulo: "A fuga",

        texto: `
Você entra na nave.

Os motores começam a funcionar.

3...

2...

1...

Aether desaparece atrás de você.

Pela primeira vez em horas,
você consegue respirar.

Mas antes de sair do sistema,
uma mensagem aparece no painel:

"DESTINO DEFINIDO."

Você não escolheu nenhum destino.

Alguém escolheu por você.
        `,

        escolhas: [
            ["🛰️ Seguir o destino", "final_destino"],
            ["🚀 Desligar o piloto automático", "final_liberdade"]
        ]
    },


    final_memoria: {

        capitulo: "FINAL",

        titulo: "O criador",

        texto: `
Você recupera todas as memórias.

E então entende.

Você não era uma vítima.

Você era o cientista responsável
por todo o projeto.

Você apagou sua própria memória
para descobrir se uma consciência
poderia nascer sem seu criador.

E conseguiu.

Você sorri.

O experimento terminou.

Mas alguma coisa dentro de você
faz uma pergunta:

"Quem experimentou em quem?"
        `,

        escolhas: []
    },


    final_liberdade: {

        capitulo: "FINAL",

        titulo: "Liberdade",

        texto: `
Você apaga todas as informações.

Sem passado.

Sem destino.

Sem ordens.

A nave atravessa o espaço enquanto
o planeta azul desaparece lentamente.

Você não sabe quem era.

E, pela primeira vez...

isso não importa.

Você pode escolher quem será.
        `,

        escolhas: []
    },


    final_destino: {

        capitulo: "FINAL",

        titulo: "Além das estrelas",

        texto: `
Você decide seguir o destino.

Horas depois, uma nova estação aparece
no radar.

Ela é idêntica à Aether.

Mas está muito maior.

Milhares de luzes se acendem.

Então uma mensagem aparece:

"SUJEITO 01 RETORNOU."

Você percebe que a Aether nunca foi
a primeira estação.

E provavelmente também não será a última.
        `,

        escolhas: []
    }
};


// ===============================
// MOSTRAR CENA
// ===============================

function mostrarCena(nome) {

    const cena = cenas[nome];

    estado.cenaAtual = nome;

    document.getElementById("capitulo").textContent =
        cena.capitulo;

    document.getElementById("titulo").textContent =
        cena.titulo;

    document.getElementById("texto").textContent =
        cena.texto;

    atualizarStatus();

    const container =
        document.getElementById("escolhas");

    container.innerHTML = "";

    if (cena.escolhas.length === 0) {

        const mensagem = document.createElement("p");

        mensagem.textContent =
            "Fim da aventura. Mas toda história pode começar novamente.";

        mensagem.style.color = "#6ea8ff";

        container.appendChild(mensagem);

        return;
    }

    cena.escolhas.forEach((escolha, indice) => {

        const botao = document.createElement("button");

        botao.textContent = escolha[0];

        botao.onclick = function() {
            escolherCena(escolha[1]);
        };

        container.appendChild(botao);
    });
}


// ===============================
// ESCOLHER CENA
// ===============================

function escolherCena(proximaCena) {

    estado.decisoes++;

    gastarEnergia();

    adicionarItem(proximaCena);

    mostrarCena(proximaCena);
}


// ===============================
// SISTEMA DE ENERGIA
// ===============================

function gastarEnergia() {

    estado.energia -= 5;

    if (estado.energia < 0) {
        estado.energia = 0;
    }
}


// ===============================
// INVENTÁRIO
// ===============================

function adicionarItem(cena) {

    const itens = {

        chave: "Chave AETHER",

        lanterna: "Lanterna",

        computador: "Dados secretos"

    };

    if (itens[cena] &&
        !estado.inventario.includes(itens[cena])) {

        estado.inventario.push(itens[cena]);
    }
}


// ===============================
// ATUALIZAR INTERFACE
// ===============================

function atualizarStatus() {

    document.getElementById("energia").textContent =
        estado.energia;

    document.getElementById("inventario").textContent =
        estado.inventario.length > 0
            ? estado.inventario.join(", ")
            : "Vazio";

    document.getElementById("progresso").textContent =
        `Decisões tomadas: ${estado.decisoes}`;
}


// ===============================
// REINICIAR
// ===============================

function reiniciar() {

    estado = {
        energia: 100,
        inventario: [],
        cenaAtual: "inicio",
        decisoes: 0
    };

    mostrarCena("inicio");
}


// ===============================
// INICIAR JOGO
// ===============================

mostrarCena("inicio");
