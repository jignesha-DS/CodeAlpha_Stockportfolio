from flask import Flask, render_template

app = Flask(__name__)

# Hardcoded stock prices
stock_prices = {
    "AAPL": 180,
    "TSLA": 250,
    "GOOGL": 150,
    "MSFT": 400,
    "AMZN": 180
}

@app.route("/")
def home():
    return render_template("index.html", stock_prices=stock_prices)


if __name__ == "__main__":
    app.run(debug=True)

