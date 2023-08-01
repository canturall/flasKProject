# server.py
import socket
from flask import Flask, render_template, Response

app = Flask(__name__, static_folder='resources')

queue_count = ""


def people_in_queue_listener(host, port):
    global queue_count
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as server_socket:
        server_socket.bind((host, port))
        server_socket.listen()

        conn, addr = server_socket.accept()
        with conn:

            while True:
                data = conn.recv(1024)
                if not data:
                    break

                queue_count = data.decode()


@app.route('/')
def main():
    return render_template("index.html")


@app.route("/queue_count")
def show_queue_count():
    def generate():
        while True:
            yield "data: " + str(queue_count) + "\n\n"

    return Response(generate(), content_type='text/event-stream')


if __name__ == "__main__":
    import threading

    people_in_queue_thread = threading.Thread(target=people_in_queue_listener, args=('127.0.0.1', 12345))
    people_in_queue_thread.start()

    app.run()
