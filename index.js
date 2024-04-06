const qrcode = require("qrcode-terminal");

const { Client, LocalAuth } = require("whatsapp-web.js");

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", async (message) => {
  if (message.body === "!ping") {
    await message.reply("pong");
  }
});

let menu =
  "Olá, segue menu: \n" +
  "1. !contact \n" +
  "2. !projects \n" +
  "3. !books \n" +
  "4. !tada \n" +
  "É só enviar a mensagem conforme exemplo *!contact* ";

let contact = "Me mande um email: \n" + "lucasimonmendes@gmail.com";

let projects =
  "Meus projetos: \n" +
  "\n *osimnao:* https://bit.ly/linktreEMO \n" +
  "\n *melhorqnada:* https://bit.ly/linktreemqn \n" +
  "\n *DEV:* https://bit.ly/simonlinks ";

let books =
  "Adquira meus livros: \n" +
  "\n *41:Fragmentos Poéticos:* https://clubedeautores.com.br/livro/41-fragmentos-poeticos \n" +
  "\n *Cicatrizes Poéticas:* https://clubedeautores.com.br/livro/cicatrizes-poeticas";

let tada = "🎉tadaaaa";

client.on("message", async (message) => {
  if (message.body === "!menu") {
    await message.reply(menu);
  }
});

client.on("message", async (message) => {
  if (message.body === "!contact") {
    await message.reply(contact);
  }
});

client.on("message", async (message) => {
  if (message.body === "!projects") {
    await message.reply(projects);
  }
});

client.on("message", async (message) => {
  if (message.body === "!books") {
    await message.reply(books);
  }
});

client.on("message", async (message) => {
  if (message.body === "!tada") {
    await message.reply(tada);
  }
});

client.initialize();
