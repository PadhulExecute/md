const qrku = "https://i.ibb.co/MnbqZ0N/qr-Aguz-Familia-07-06-22-1654614928.png"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
╭─「 Donasi • Dana 」
│ • im3 [085600204672]
│ • Dana  [085600204672]
| •gopay [085600204672]
| •ovo   [085600204672]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6285600204672
│ _Hasil donasi akan digunakan buat sewa_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
