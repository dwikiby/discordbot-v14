const{ SlashCommandBuilder, MessageActivityType } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reactor')
        .setDescription('Return reactions!'),
    async execute(interaction, client) {
        const message = await interaction.reply({
            content: `React here!`,
            fetchReply: true,
        }); 

        const filter = (reaction, user) => {
            return user.id == interaction.user.id
        }; 

        message.awaitReactions({ filter, max: 4, time: 10000, errors: ['time']})
        .then(collected => console.log(collected.size))
        .catch(collected => {
            console.log(`After a ten seconds, only ${collected.size} out of 4 reacted.`);
        });

        

    },
};