from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

# Connect to DB
def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

# Create table (run once)
def create_table():
    conn = get_db_connection()
    conn.execute('''
        CREATE TABLE IF NOT EXISTS transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            amount INTEGER,
            category TEXT,
            date TEXT
        )
    ''')
    conn.commit()
    conn.close()

create_table()

@app.route('/')
def home():
    return "FinTrack AI Backend Running 🚀"

# Add transaction
@app.route('/add', methods=['POST'])
def add_transaction():
    data = request.get_json()

    conn = get_db_connection()
    conn.execute(
        'INSERT INTO transactions (amount, category, date) VALUES (?, ?, ?)',
        (data['amount'], data['category'], data['date'])
    )
    conn.commit()
    conn.close()

    return jsonify({"message": "Transaction saved to DB!"})

# Get all transactions
@app.route('/transactions', methods=['GET'])
def get_transactions():
    conn = get_db_connection()
    transactions = conn.execute('SELECT * FROM transactions').fetchall()
    conn.close()

    return jsonify([dict(row) for row in transactions])

if __name__ == '__main__':
    app.run(debug=True)