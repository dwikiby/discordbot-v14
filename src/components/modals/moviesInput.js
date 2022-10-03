module.exports = {
    data: {
        name: `questionAnswer`
    },
    async execute(interaction, client) {
        await interaction.reply({
            content:` You said your favorite movies is: ${interaction.fields.getTextInputValue("moviesInput")}`

        });
    }
}