from data import USER, NAV, FEATURED, STATS, EVENTS, JOURNEY, ALL_EVENTS, MY_EVENTS
from flask import Flask, render_template

app = Flask(__name__, static_folder="public", static_url_path="")


@app.context_processor
def inject_globals():
    return dict(user=USER, nav=NAV)


@app.route("/")
def landing():
    return render_template("landing.html")


@app.route("/login")
def login():
    return render_template("login.html")


@app.route("/register")
def register():
    return render_template("register.html")


@app.route("/initializing")
def initializing():
    return render_template("initializing.html")


@app.route("/student")
def student():
    return render_template("student.html", featured=FEATURED, stats=STATS,
                           events=EVENTS, journey=JOURNEY)

@app.route("/student/events")
def events():
    return render_template("events.html", events=ALL_EVENTS)


@app.route("/student/my-events")
def my_events():
    return render_template("my_events.html", my_events=MY_EVENTS)
if __name__ == "__main__":
    app.run(debug=True)