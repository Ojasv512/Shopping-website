from flask import Flask, render_template, request
from items import grocery_items

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search', methods=['GET', 'POST'])
def search():
    query = request.args.get('q')
    if query:
        # Perform search by filtering grocery items by name or category
        results = [item for item in grocery_items if query.lower() in item['name'].lower() or query.lower() in item['category'].lower()]
    else:
        results = []
    return render_template('search.html', query=query, results=results)

if __name__ == '__main__':
    app.run(debug=True)
