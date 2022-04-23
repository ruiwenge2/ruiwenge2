import json
from flask import Flask, render_template
app = Flask("app")

@app.route("/")
@app.route("/home")
def home():
  return render_template("home.html")


@app.route("/projects")
def projects():
  projects = json.loads(open("json/pyprojects.json").read())
  websites = json.loads(open("json/pywebsites.json").read())
  nodewebsites = json.loads(open("json/nodewebsites.json").read())
  return render_template("projects.html", projects=projects, websites=websites, nodewebsites=nodewebsites)

@app.route("/other")
def other():
  other = json.loads(open("json/other.json").read())
  return render_template("other.html", other=other)

@app.route("/thanks")
def thanks():
  return render_template("thanks.html")

@app.errorhandler(404)
def page_not_found(e):
  return render_template("404.html"), 404

app.run(host='0.0.0.0', port=8080)