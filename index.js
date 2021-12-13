const Discord = require('discord.js');
const bot = new Discord.Client();
const token = '';
const { MessageAttachment } = require("discord.js");
const imagemBot = new MessageAttachment("./eva.jpeg");
const audioMarcola = new MessageAttachment("./marcola_idiota.wav"); 

bot.login(token)
bot.on('ready', ()=>{
    console.log('estou pronto')
})

bot.on('message', (msg) =>  {
    if (msg.content === 'Paulo') {
        msg.reply('E a Giulia?')
    }if (msg.content === 'Marcola') {
        msg.channel.send(audioMarcola);
    }if (msg.content === 'Marcos') {
        msg.reply('E as namoradinha?')
    }if (msg.content === 'Akira') {
        msg.reply('Ja passou a saudade??')
    }if (msg.content === 'Guilherme') {
        msg.reply('E a noia fumante????')
    }if (msg.content === 'Anthony') {
        msg.reply('Au auuu 🐶')
    }if (msg.content === 'oq o marcola quer?') {
        msg.reply('🍆💦')
    }if (msg.content === 'Thay') {
        msg.reply('E o tererê???')
    }if (msg.content === 'Nicolly') {
        msg.reply('Bah, bora toma um chimas')
    }if (msg.content === 'Iago') {
        msg.reply('Skin de pobre')
    }if (msg.content === 'nome japones'){
        msg.reply('TU E MONGOL FILHO(A) DA PUTA? TU ME ADICIONA COM UM NOME NORMAL, DAI EU VIRO TEU AMIGO, PAPO VAI PAPO VEM E DO NADA TU MUDA TEUS NOME NA REDE SOCIAL E COLOCA UM NOME JAPONÊS FUDIDO? VAI TOMAR NO CU SEU ARROMBADO REPARA QUE EU E VOCE TODO MUNDO AQUI QUE VIVE NO BRASIL E BRASILEIRO SEU FILHO DA PUTA ENFIA ESSE NOME JAPONÊS NO SEU CU, JUNTO COM ESSA FOTO DE ANIME CARALHO, ISSO AI E COISA DE MONGOL, COISA DE BAITOLA, SE TU QUERIA FAZER ISSO NAO ERA NEM PRA TER ME ADICIONADO NESSA MERDA, UMA VEZ FUI TE MARCAR NUM BAGULHO, FUI ESCREVER TEU NOME FUDIDO EM JAPONÊS E ACABEI MARCANDO A BANDA DE BTS TODINHA NO MEU COMENTÁRIO, ISSO TUDO POR CAUSA DE VOCÊ SEU FILHO DA PUTA.')
    }if (msg.content === 'lacre') {
        msg.reply('mana pisa menos que lacre foi esse berro eu lacro grito uou você é desconstruída eu lacro mana pisa nele ai nossa como vc lacrou q nem eu lacro surrou com bondade close certo lacrou mana que lacre mana berro você lacra demais ai mana para que eu lacrei mana que lacre q eu lacre')
    }if (msg.content === 'bot') {
        msg.channel.send(imagemBot); 
    }if (msg.content === 'broxas') {
        msg.reply(' 📢📢📢📢📢ATENÇÃO BROXAS📢📢📢📢📢 TESTES REALIZADOS COM A VACINA DA COVID-19💉💉💉 MOSTRAM QUE ELA ATRAPALHA O FUNCIONAMENTO DO VIAGRA💊💊💊 VCOES QUE SOFREM COM 🍆🍆🍆 MOLE FIQUEM ATENTOS⚠️⚠️⚠️⚠️ A VACINA CHINESA RECENTE FOI TESTADA EM JAIR BOLSONARO 🇧🇷🇧🇷🇧🇷 E ESTE ESTA COM O PAU MOLE POR TEMPO INDEFINIDO😰😰😰 EM DEPOIMENTO O PRESIDENTE DA CHINA 🇨🇳🇨🇳🇨🇳 DISSE: 8 LEAL💲💲💲 8 LEAL O PAU MOLE PLESIDENTE COLNO 8 LEAL 💵💵💵A MULE DELE TAMBEM KKKKKKKKKKKKK EM RESPOSTA BOLSONARO PASSOU O PAU MOLE NA MASSANETA DA EMBAIXADA CHINESA🇨🇳🇨🇳🇨🇳 O LOCAL ESTA FECHADO🔒🔒🔒 POR ORDENS DA ANVISA⚕️⚕️⚕️ "TALOCO PASSAR A MAO EM PAU MOLE VEIO👴👴👴 DISSE O PRESIDENTE DA ANVISA')
    }
})
