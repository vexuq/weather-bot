const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')
const axios = require('axios');

const bot = new Telegraf('6499225964:AAF-8NbFYN1xZhsZTxn2l_vd0LvNrcQn89U')
bot.start((ctx) => ctx.reply('Welcome'))
bot.on('message', async (ctx)=> {
    if(ctx.message.location){
    console.log(ctx.message.location);
//const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${ctx.message.location.latitude}&lon=${ctx.message.location.longitude}&exclude={part}&appid=3ba019dafd29320b3134ffb0d3504dc6
//`;
const url = `http://api.weatherapi.com/v1/current.json?key=639f62048abc4e18a41112357232611&q=${ctx.message.location.latitude},${ctx.message.location.longitude}&days=3`;
const response = await axios.get(url);
console.log(response);
//console.log(response.data.current.temp_c);

ctx.reply(`${response.data.location.name}: ${response.data.current.temp_c} C`);
    }
})
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))