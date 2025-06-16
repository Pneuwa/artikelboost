from utils.json_utils import read_json, write_json
import glob
import os
import hashlib
import json


def login(id, password):
    hashed_password = hashlib.sha256(password.encode()).hexdigest()
    data_path = os.path.join(os.path.dirname(
        __file__), '..', 'admin', 'info.json')
    with open(data_path, "r", encoding="utf-8") as file:
        info = json.load(file)
    if id == info['id'] and hashed_password == info['password']:
        return {'message': "Success"}
    else:
        return {'message': "Error"}


def get_all():
    li = read_json()
    return li


def get_word(id):
    li = read_json()
    selected_word = next(
        (item for item in li if item['id'] == id), None)
    return selected_word


def get_words_by_category(category):
    li = read_json()
    selected_category = [
        item for item in li if item['category']['slug'] == category]
    return selected_category


def search(data, term):
    return [item for item in data if term.lower() in item["word"].lower()]


def filter(data, article=None, case_name=None):
    return [
        item for item in data
        if (article is None or item["article"] == article) and
        (case_name is None or item["case_name"] == case_name)
    ]


def paginate(data, offset, limit):
    return data[offset: offset + limit]


def articleCounts():
    der, die, das = 0, 0, 0
    data = read_json()
    for item in data:
        if item.get('case_name') == "Nominativ":
            if item.get('article') == "die":
                die += 1
            elif item.get('article') == "der":
                der += 1
            elif item.get('article') == "das":
                das += 1
    return {'der': der, 'die': die, 'das': das}


def count_by_category():
    data = read_json()
    category_list = list(set([item["category"]["name"] for item in data]))

    counts_by_category = []
    for category in category_list:
        count = sum(1 for i in data if i["category"]["name"]
                    == category and i["case_name"] == "Nominativ")
        counts_by_category.append({"category": category, "value": count})

    result = {"categories": counts_by_category}

    return result


def get_counts():
    word_numbers = {}
    data = read_json()
    cleared_data = [item for item in data if item['case_name'] == "Nominativ"]
    unique_words = len(cleared_data)
    word_numbers['total_unique_words'] = unique_words
    all_counts = word_numbers | articleCounts() | count_by_category()
    return all_counts


def delete(id):
    li = read_json()

    selected_word = next(
        (item for item in li if item['id'] == id), None)
    write_json(selected_word, delete=True)
    return


def save(new_entry):
    return write_json(new_entry)
