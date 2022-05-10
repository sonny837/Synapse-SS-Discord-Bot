
                (async()=>{
                const Discord = require("discord.js");
                const Database = require("easy-json-database");
                const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
                const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                const s4d = {
                    Discord,
                    database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json`),
                    joiningMember:null,
                    reply:null,
                    tokenInvalid:false,
                    tokenError: null,
                    checkMessageExists() {
                        if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                        if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                    }
                };
                s4d.client = new s4d.Discord.Client({
                    intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
                    partials: ["REACTION"]
                });

                var member_xp, member_level;


s4d.client.on('ready', async () => {

          while(s4d.client && s4d.client.token) {
              await delay(50);
                s4d.client.user.setActivity(String('Synapse SS Development'));
    await delay(Number(120)*1000);
    s4d.client.user.setActivity(String('Synapse SS the best paid SS executor.'));
    await delay(Number(120)*1000);
    s4d.client.user.setActivity(String('Fun Fact:KolaYT12342 was my first BFF.'));
    await delay(Number(60)*1000);
    s4d.client.user.setActivity(String('JaxTheCat is the best!'));
    await delay(Number(120)*1000);
    s4d.client.user.setActivity(String('Fun Fact about the developer:He loves spiwals.'));
    await delay(Number(15)*1000);
    s4d.client.user.setActivity(String('Fun Fact:Synapse SS will never be open source!'));
    await delay(Number(30)*1000);
    s4d.client.user.setActivity(String('Fun Fact:Synapse SS is always being developed.'));
    await delay(Number(30)*1000);
    s4d.client.user.setActivity(String('Fun Fact:Synapse SS  was developed from scratch!'));
    await delay(Number(30)*1000);
    s4d.client.user.setActivity(String('Synapse SS Won\'t be discontinued unless something happens to the developer.'));
    await delay(Number(30)*1000);

              console.log('ran')
          }

});

await s4d.client.login('OTE3MDU3MDg0MjYzMTI5MDg4.GWY7Zt.Qs7q9VLTl889StSn8zifPfLT1BbwHXKzetZBs0').catch((e) => { s4d.tokenInvalid = true; s4d.tokenError = e; });

s4d.client.on('messageCreate', async (s4dmessage) => {
  if (!((s4dmessage.member).user.bot)) {
    member_xp = s4d.database.get(String(('xp-' + String(s4dmessage.author.id))));
    member_level = s4d.database.get(String(('level-' + String(s4dmessage.author.id))));
    if (!member_xp) {
      member_xp = 0;
    } else if (!member_level) {
      member_level = 0;
    }
    s4d.database.set(String(('xp-' + String(s4dmessage.author.id))), (member_xp + 1));
    member_xp = member_xp + 1;
    if (member_xp > 100) {
      s4d.database.set(String(('level-' + String(s4dmessage.author.id))), (member_level + 1));
      member_level = member_level + 1;
      s4dmessage.channel.send(String((['Congratulations, ',s4dmessage.member,'you jumped to level ',member_level,'!!'].join(''))));
    }
    if ((s4dmessage.content) == '!level') {
      s4dmessage.channel.send(String(([s4dmessage.member,', you are currently level: ',member_level].join(''))));
    } else if ((s4dmessage.content) == '!xp') {
      s4dmessage.channel.send(String(([s4dmessage.member,', you need ',100 - member_xp,' to jump to level ',member_level + 1].join(''))));
    }
  }

});
                return s4d;
                })();
            