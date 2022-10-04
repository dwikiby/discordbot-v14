const{ SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('autocomplete')
        .setDescription('Returns autocomplete.')
        .addStringOption((option) => 
        option
        .setName('colour')
        .setDescription('A colour based on autocomplete.')
        .setAutocomplete(true)
        .setRequired(true) 
        ),
    async autocomplete(interaction, client) {
        const focusedValue = interaction.options.getFocused();
        const choices = ["red", "blue", "yellow", "green", "purple", "pink"];
        const filtered = choices.filter((choice) => 
            choice.startsWith(focusedValue)
        );
        await interaction.respond(
            filtered.map((choice) => ({ name: choice, value: choice}))
        );
    },
    async execute(interaction, client) { 
        const option = interaction.options.getString('colour');
        await interaction.reply({ content: `You told me,"${option}"`});
    },
};