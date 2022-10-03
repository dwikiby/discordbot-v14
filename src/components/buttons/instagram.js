module.exports = {  
    data: {
        name: `instagram`
    },
    async execute(interaction, client ) {
        await interaction.reply ({
            content: `https://www.instagram.com/dwikiby`
        });
    }
}