const{ SlashCommandBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("modal")
        .setDescription("Return a modal!"),
    async execute(interaction, client) {
        const modal = new ModalBuilder()
            .setCustomId(`questionAnswer`)
            .setTitle(`Movie Question`);

        // const textInput = new TextInputBuilder() 
        //     .setCustomId(`favColorInput`)
        //     .setLabel(`What is your favorite color?`)
        //     .setMaxLength(100)
        //     .setPlaceholder('Enter some text!')
        //     .setRequired(true)
        //     .setStyle(TextInputStyle.Short);
            
        // modal.addComponents(new ActionRowBuilder().addComponents(textInput)); //data inputan

        const textInputMovies = new TextInputBuilder() //kolom pertanyaan 2
            .setCustomId(`moviesInput`)
            .setLabel(`What is your favorite movies?`)
            //paragraf mean multiple line of text.
            .setPlaceholder('Enter some text!')
            .setMaxLength(300)
            .setStyle(TextInputStyle.Paragraph);

        // modal.addComponents(new ActionRowBuilder().addComponents(textInput, hobbiesInput));

        const firstActionRow = new ActionRowBuilder().addComponents(textInputMovies);
		//const secondActionRow = new ActionRowBuilder().addComponents(textInputMovies);

        modal.addComponents(firstActionRow);


        await interaction.showModal(modal);
    },
};