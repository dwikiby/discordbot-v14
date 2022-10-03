const{ SlashCommandBuilder, SelectMenuBuilder , ActionRowBuilder, SelectMenuOptionBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('menu')
        .setDescription('Return a select menu!'),
    async execute(interaction, client) {
        const menu = new SelectMenuBuilder()
            .setCustomId(`sub-menu`)
            .setPlaceholder('Nothing selected')
            .setMinValues(1)
            .setMaxValues(1)
            .setOptions(
                new SelectMenuOptionBuilder ({
                    label: `Option #1`,
                    description: 'This is a youtube link',
                    value: `https://www.youtube.com/channel/UCVEc4tO7pUtQmVV-aEuElsA`,
            }), 
                new SelectMenuOptionBuilder ({
                label: `Option #2`, 
                description: 'This is a github link',
                value: `https://www.github.com/dwikiby`,
            })
        );

        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(menu)],
        });
    },
};