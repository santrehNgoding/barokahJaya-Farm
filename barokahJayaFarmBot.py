from telegram.ext import Updater, CommandHandler

# Ganti ini dengan token bot Anda
TOKEN = '8421844896:AAHCOntY5aBNaKuanGLZdwFdBvg0zDM6QqM'

# Fungsi untuk menangani perintah /start
def start(update, context):
    update.message.reply_text("""
🐏 Selamat datang di barokahJayaFarm_Bot!

Kami adalah peternakan domba terpercaya yang melayani kebutuhan domba potong dan breeding. Lewat bot ini, Anda bisa:

📋 Melihat daftar domba yang tersedia  
💰 Mengecek harga domba terbaru  
🛒 Melakukan pemesanan langsung  
📷 Melihat galeri kandang dan pengiriman  
📞 Menghubungi admin

Ketik /produk untuk mulai melihat jenis domba  
Ketik /harga untuk info harga  
Ketik /kontak untuk menghubungi admin
""")

# Inisialisasi bot
updater = Updater(TOKEN, use_context=True)
dp = updater.dispatcher

# Pasangkan fungsi /start ke handler
dp.add_handler(CommandHandler("start", start))

# Mulai polling
updater.start_polling()
updater.idle()
