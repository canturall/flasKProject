from flask import Flask, jsonify, request, render_template, Response
import threading
import time

app = Flask(__name__)

# Sayacı temsil edecek değişken
counter = 0

def increase_counter():
    global counter
    while True:
        if counter < 100:
            counter += 1
        else:
            # Sayacı sıfırla ve 0'dan tekrar başla
            counter = 0
        time.sleep(1)  # 1 saniye bekle

# Arka planda sayacı artıran görevi başlat
counter_thread = threading.Thread(target=increase_counter)
counter_thread.daemon = True
counter_thread.start()

@app.route("/")
def baslangic_api():
    # index.html dosyasını render ederken sayaç değerini template'e gönderiyoruz.
    return render_template("index.html", my_variable=counter)

@app.route("/stream")
def stream():
    def generate():
        while True:
            # Değeri 0 ile 100 arasında sınırlıyoruz.
            value = min(counter, 100)
            yield "data: " + str(value) + "\n\n"
            time.sleep(1)

    return Response(generate(), content_type='text/event-stream')

if __name__ == "__main__":
    app.run()
