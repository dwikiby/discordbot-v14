const{ SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("embed")
        .setDescription('Return an embed.'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle('Server Testing Area') //judul
            .setDescription('Disini untuk melakukan pengetesan bot dalam masa pengembangan') //deskripsi
            .setColor(0x18e1ee)
            .setImage(client.user.displayAvatarURL()) // taruh gambar
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp(Date.now())
            .setAuthor({
                url: `https://github.com/dwikiby`,
                iconURL: interaction.user.displayAvatarURL(),
                name: interaction.user.tag
            })
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: client.user.tag
            })
            .setURL(`https://instagram.com/dwikiby`)
            .addFields([
                {
                    name: `Server Testing Area`,
                    value: `Pengembangan bot discord untuk versi 14`,
                    inline: false
                },
                {
                    name: `Coding and Testing`,
                    value: `NodeJS dan DiscordJS`,
                    inline: true
                },
            ]);

            await interaction.reply({
                embeds : [embed]
            });
    },
};
