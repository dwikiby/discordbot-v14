const{ SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('button')
        .setDescription('Return a button!'),
    async execute(interaction, client) {
        const button = new ButtonBuilder() 
            .setCustomId('sub-yt')
            .setLabel(`Youtube`)
            .setStyle(ButtonStyle.Primary);

        const buttonGithub = new ButtonBuilder()
            .setCustomId('github')
            .setLabel(`Github`)
            .setStyle(ButtonStyle.Primary);
        
        const buttonInstagram = new ButtonBuilder()
            .setCustomId('instagram')
            .setLabel(`Instagram`)
            .setStyle(ButtonStyle.Primary);
        

        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(button, buttonGithub, buttonInstagram)]
        });      
    }
}