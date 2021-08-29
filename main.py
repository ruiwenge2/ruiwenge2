from flask import Flask, render_template
app = Flask("app")

@app.route("/")
@app.route("/home")
def home():
  return render_template("home.html")

@app.route("/projects")
def projects():
  return render_template("projects.html")

@app.route("/python")
def python():
  return render_template("pyprojects.html")

@app.route("/thanks")
def thanks():
  return render_template("thanks.html")

@app.errorhandler(404)
def page_not_found(e):
  return render_template("404.html"), 404

app.run(host='0.0.0.0', port=8080)