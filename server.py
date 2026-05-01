import os
import csv
from datetime import datetime
from flask import Flask, request, jsonify, send_from_directory

app = Flask(__name__, static_folder='.', static_url_path='')

DATA_DIR = 'data'
USERS_CSV = os.path.join(DATA_DIR, 'users.csv')
PROGRESS_CSV = os.path.join(DATA_DIR, 'progress.csv')
INVENTORY_CSV = os.path.join(DATA_DIR, 'inventory.csv')

# Ensure data directory and files exist
os.makedirs(DATA_DIR, exist_ok=True)

def migrate_users_csv():
    # Ensure columns exist: username, password, display_name, role
    if not os.path.exists(USERS_CSV):
        with open(USERS_CSV, mode='w', newline='', encoding='utf-8') as f:
            writer = csv.writer(f)
            writer.writerow(['username', 'password', 'display_name', 'role', 'points'])
        return

    # Read existing
    with open(USERS_CSV, mode='r', newline='', encoding='utf-8') as f:
        reader = csv.reader(f)
        rows = list(reader)

    if not rows:
        with open(USERS_CSV, mode='w', newline='', encoding='utf-8') as f:
            writer = csv.writer(f)
            writer.writerow(['username', 'password', 'display_name', 'role', 'points'])
        return

    headers = rows[0]
    if 'display_name' not in headers or 'role' not in headers or 'points' not in headers:
        # Migrate columns
        new_rows = []
        new_headers = ['username', 'password', 'display_name', 'role', 'points']
        new_rows.append(new_headers)

        username_idx = headers.index('username') if 'username' in headers else 0
        password_idx = headers.index('password') if 'password' in headers else 1
        display_name_idx = headers.index('display_name') if 'display_name' in headers else -1
        role_idx = headers.index('role') if 'role' in headers else -1
        points_idx = headers.index('points') if 'points' in headers else -1

        for row in rows[1:]:
            if len(row) < 2: continue
            username = row[username_idx]
            password = row[password_idx]
            display_name = row[display_name_idx] if display_name_idx != -1 and len(row) > display_name_idx else username
            role = row[role_idx] if role_idx != -1 and len(row) > role_idx else 'student'
            points = row[points_idx] if points_idx != -1 and len(row) > points_idx else '0'
            new_rows.append([username, password, display_name, role, points])
        
        with open(USERS_CSV, mode='w', newline='', encoding='utf-8') as f:
            writer = csv.writer(f)
            writer.writerows(new_rows)

    # Sync points with progress (Backfill points for existing progress)
    # 1. Count completions per user
    progress_counts = {}
    if os.path.exists(PROGRESS_CSV):
        with open(PROGRESS_CSV, mode='r', newline='', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                uname = row['username']
                progress_counts[uname] = progress_counts.get(uname, 0) + 1
    
    # 2. Update users.csv with correct point totals (100 pts per task)
    updated_users = []
    headers = []
    with open(USERS_CSV, mode='r', newline='', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        headers = reader.fieldnames
        for row in reader:
            uname = row['username']
            # Re-calculate points based on total progress
            # This ensures old tasks count towards points
            row['points'] = progress_counts.get(uname, 0) * 100
            updated_users.append(row)
    
    with open(USERS_CSV, mode='w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=headers)
        writer.writeheader()
        writer.writerows(updated_users)

migrate_users_csv()

if not os.path.exists(PROGRESS_CSV):
    with open(PROGRESS_CSV, mode='w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['username', 'unit_id', 'completed_at'])

if not os.path.exists(INVENTORY_CSV):
    with open(INVENTORY_CSV, mode='w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['username', 'item_id', 'purchased_at'])

# Treasure Definitions
TREASURES = {
    't_01': {'name': '魔法杖', 'cost': 100, 'icon': 'fa-wand-magic-sparkles', 'color': 'text-purple-400'},
    't_02': {'name': '勇者之盾', 'cost': 200, 'icon': 'fa-shield-halved', 'color': 'text-blue-400'},
    't_03': {'name': '加速藥水', 'cost': 300, 'icon': 'fa-flask-vial', 'color': 'text-green-400'},
    't_04': {'name': '神秘水晶', 'cost': 500, 'icon': 'fa-crystal-ball', 'color': 'text-cyan-400'},
    't_05': {'name': '噴火龍', 'cost': 1000, 'icon': 'fa-dragon', 'color': 'text-red-400'}
}

@app.route('/')
def index():
    return app.send_static_file('AndrewWebMidtem.html')

@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    display_name = data.get('display_name') or username
    role = data.get('role', 'student')

    if not username or not password:
        return jsonify({'success': False, 'message': '請輸入帳號和密碼'})

    # Check if user exists
    with open(USERS_CSV, mode='r', newline='', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            if row['username'] == username:
                return jsonify({'success': False, 'message': '帳號已存在'})

    # Register new user
    with open(USERS_CSV, mode='a', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow([username, password, display_name, role, 0])

    return jsonify({'success': True, 'message': '註冊成功', 'display_name': display_name, 'role': role, 'points': 0})

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    with open(USERS_CSV, mode='r', newline='', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            if row['username'] == username and row['password'] == password:
                return jsonify({
                    'success': True, 
                    'message': '登入成功', 
                    'username': username,
                    'display_name': row.get('display_name', username),
                    'role': row.get('role', 'student'),
                    'points': int(row.get('points', 0))
                })
    
    return jsonify({'success': False, 'message': '帳號或密碼錯誤'})

@app.route('/api/progress', methods=['GET'])
def get_progress():
    username = request.args.get('username')
    if not username:
        return jsonify({'success': False, 'message': '未提供使用者名稱'})

    completed_lessons = []
    with open(PROGRESS_CSV, mode='r', newline='', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            if row['username'] == username:
                completed_lessons.append(row['unit_id'])
    
    # Remove duplicates just in case
    completed_lessons = list(set(completed_lessons))
    return jsonify({'success': True, 'completedLessons': completed_lessons})

@app.route('/api/progress', methods=['POST'])
def save_progress():
    data = request.json
    username = data.get('username')
    unit_id = data.get('unit_id')

    if not username or not unit_id:
        return jsonify({'success': False, 'message': '資料不完整'})

    # Check if already completed to avoid duplicate entries
    already_completed = False
    with open(PROGRESS_CSV, mode='r', newline='', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            if row['username'] == username and row['unit_id'] == unit_id:
                already_completed = True
                break
    
    new_points = 0
    if not already_completed:
        with open(PROGRESS_CSV, mode='a', newline='', encoding='utf-8') as f:
            writer = csv.writer(f)
            writer.writerow([username, unit_id, datetime.now().isoformat()])
        
        # Award points
        users = []
        headers = []
        with open(USERS_CSV, mode='r', newline='', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            headers = reader.fieldnames
            for row in reader:
                if row['username'] == username:
                    current_pts = int(row.get('points', 0))
                    current_pts += 100
                    row['points'] = current_pts
                    new_points = current_pts
                users.append(row)
        
        with open(USERS_CSV, mode='w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=headers)
            writer.writeheader()
            writer.writerows(users)
    else:
        # Just get current points
        with open(USERS_CSV, mode='r', newline='', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                if row['username'] == username:
                    new_points = int(row.get('points', 0))
                    break
    
    return jsonify({'success': True, 'points': new_points, 'awarded': not already_completed})

@app.route('/api/user/rename', methods=['POST'])
def rename_user():
    data = request.json
    username = data.get('username')
    new_display_name = data.get('display_name')

    if not username or not new_display_name:
        return jsonify({'success': False, 'message': '資料不完整'})

    # Read and update
    rows = []
    updated = False
    with open(USERS_CSV, mode='r', newline='', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        headers = reader.fieldnames
        for row in reader:
            if row['username'] == username:
                row['display_name'] = new_display_name
                updated = True
            rows.append(row)

    if updated:
        with open(USERS_CSV, mode='w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=headers)
            writer.writeheader()
            writer.writerows(rows)
        return jsonify({'success': True, 'message': '名稱更新成功'})
    else:
        return jsonify({'success': False, 'message': '找不到使用者'})

@app.route('/api/shop/treasures', methods=['GET'])
def get_treasures():
    return jsonify(TREASURES)

@app.route('/api/shop/purchase', methods=['POST'])
def purchase_item():
    data = request.json
    username = data.get('username')
    item_id = data.get('item_id')

    if not username or not item_id:
        return jsonify({'success': False, 'message': '資料不完整'})

    if item_id not in TREASURES:
        return jsonify({'success': False, 'message': '寶物不存在'})

    item = TREASURES[item_id]
    cost = item['cost']

    # 1. Check user points
    user_found = False
    new_points = 0
    users = []
    headers = []
    with open(USERS_CSV, mode='r', newline='', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        headers = reader.fieldnames
        for row in reader:
            if row['username'] == username:
                user_found = True
                current_pts = int(row.get('points', 0))
                if current_pts < cost:
                    return jsonify({'success': False, 'message': '點數不足'})
                
                current_pts -= cost
                row['points'] = current_pts
                new_points = current_pts
            users.append(row)

    if not user_found:
        return jsonify({'success': False, 'message': '找不到使用者'})

    # 2. Deduct points
    with open(USERS_CSV, mode='w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=headers)
        writer.writeheader()
        writer.writerows(users)

    # 3. Record in inventory
    with open(INVENTORY_CSV, mode='a', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow([username, item_id, datetime.now().isoformat()])

    return jsonify({'success': True, 'message': f'兌換 {item["name"]} 成功！', 'points': new_points})

@app.route('/api/inventory', methods=['GET'])
def get_inventory():
    username = request.args.get('username')
    if not username:
        return jsonify({'success': False, 'message': '未提供使用者名稱'})

    items = []
    if os.path.exists(INVENTORY_CSV):
        with open(INVENTORY_CSV, mode='r', newline='', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                if row['username'] == username:
                    item_id = row['item_id']
                    if item_id in TREASURES:
                        items.append({
                            'item_id': item_id,
                            'name': TREASURES[item_id]['name'],
                            'icon': TREASURES[item_id]['icon'],
                            'color': TREASURES[item_id]['color'],
                            'purchased_at': row['purchased_at']
                        })
    
    return jsonify({'success': True, 'inventory': items})

if __name__ == '__main__':
    print("啟動伺服器... 請在瀏覽器輸入 http://127.0.0.1:5000/")
    app.run(debug=True, port=5000)
