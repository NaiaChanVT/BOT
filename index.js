const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!'; // Prefijo para los comandos del bot

// Evento de inicio del bot

client.on('ready', () => {

  console.log(`El bot de Discord está listo. ¡Conectado como ${client.user.tag}!`);

});

// Evento de nuevo mensaje en un canal

client.on('message', message => {

  // Ignorar mensajes que no comiencen con el prefijo o que sean del propio bot

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  // Obtener el comando y los argumentos

  const args = message.content.slice(prefix.length).trim().split(/ +/);

  const command = args.shift().toLowerCase();

  // Manejar los comandos

  if (command === 'saludo') {

    message.channel.send(`¡Hola, ${message.author}! ¡Bienvenido/a al servidor!`);

  } else if (command === 'ping') {

    message.channel.send('Pong!');

  }

});

// Conectar al servidor de Discord

client.login('MTExNjA1MzA2MDU0NDkwOTQwMg.Gb43tq.QMFIK66dXx8e8Ym_KRRT6P_8bXL6C6a7SPFNyU');

