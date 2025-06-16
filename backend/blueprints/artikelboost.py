from flask import Blueprint, request, jsonify
from services.services import login, get_all, get_word, get_words_by_category, search, filter, paginate, get_counts, delete, save

artikel_boost_bp = Blueprint('ArtikelBoost', __name__)

LIMIT = 8


@artikel_boost_bp.route('/login', methods=['POST'])
def admin_login():
    id = request.args.get('id')
    password = request.args.get('password')
    result = login(id, password)
    return jsonify(result)


@artikel_boost_bp.route('/get', methods=['GET'])
def get_all_route():
    word_list = get_all()
    return jsonify(word_list), 200


@artikel_boost_bp.route('/get-word', methods=['GET'])
def get_word_route():
    id = request.args.get("id")
    selected_word = get_word(id=id)
    return jsonify(selected_word), 200


@artikel_boost_bp.route('/collection', methods=['GET'])
def get_collection_route():
    query = request.args.get("search")
    article = request.args.get("sortByArticle")
    case_name = request.args.get("sortByCase")
    offset = int(request.args.get("offset", 0))

    word_list = get_all()

    if query:
        word_list = search(word_list, query)

    if article == "all":
        article = None
    if case_name == "all":
        case_name = None

    word_list = filter(word_list, article=article, case_name=case_name)

    paginated_list = paginate(word_list, offset, limit=LIMIT)

    return jsonify({
        "data": paginated_list,
        "offset": offset,
        "limit": LIMIT,
        "hasMore": offset + LIMIT < len(word_list)
    }), 200


@artikel_boost_bp.route('/category', methods=['GET'])
def get_category_route():
    category = request.args.get("category")
    query = request.args.get("search")
    article = request.args.get("sortByArticle")
    case_name = request.args.get("sortByCase")
    offset = int(request.args.get("offset", 0))

    selected_category = get_words_by_category(category)

    if query:
        selected_category = search(selected_category, query)

    if article == "all":
        article = None
    if case_name == "all":
        case_name = None

    selected_category = filter(
        selected_category, article=article, case_name=case_name)

    paginated_list = paginate(selected_category, offset, limit=LIMIT)

    return jsonify({
        "data": paginated_list,
        "offset": offset,
        "limit": LIMIT,
        "hasMore": offset + LIMIT < len(selected_category)
    }), 200


@artikel_boost_bp.route('/counts', methods=['GET'])
def counts():
    count_list = get_counts()
    return jsonify(count_list), 200


@artikel_boost_bp.route('/save', methods=['POST'])
def save_word_route():
    data = request.get_json()
    result = save(data)
    return jsonify(result), 200


@artikel_boost_bp.route('/delete', methods=['POST'])
def delete_word_route():
    word_type = request.args.get("type")
    id = request.args.get("id")
    delete(word_type, id)
    return jsonify({"success": True}), 200
