module.exports = {  
    data: {
        name: `github`
    },
    async execute(interaction, client ) {
        await interaction.reply({
            content: `https://www.github.com/dwikiby`
        });
    }
}