import { Events } from "discord.js";

export const name = Events.ClientReady;
export const once = true;

export async function execute(client) {
  console.log(`\n🤖 ${client.user.tag} aktif edildi!`);
  
  client.user.setPresence({
    activities: [
      {
        name: "made by punisherizm",
        type: 1, // STREAMING
        url: "punisherizm"
      }
    ],
    status: "dnd"
  });
}
