from flask import Flask, render_template
from flask_socketio import SocketIO
from src.ZoneCounter import get_zone_count

app = Flask(__name__)
app.config['SECRET_KEY'] = 'havProje'

socket = SocketIO(app)
@app.route("/")
def main():
    return render_template("index.html")


@socket.on('message')
def handle_count_on_video(msg):
    print(str(get_zone_count()))
    socket.send(str(get_zone_count()))


if __name__ == "__main__":
    socket.run(app, allow_unsafe_werkzeug=True)
