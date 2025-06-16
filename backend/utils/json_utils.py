import json
import os


def read_json():
    data_path = os.path.join(os.path.dirname(
        __file__), '..', 'data', 'data.json')
    if os.path.exists(data_path):
        with open(data_path, "r", encoding="utf-8") as file:
            return json.load(file)


def write_json(entry, delete=False):
    data_path = os.path.join(os.path.dirname(
        __file__), '..', 'data', 'data.json')

    try:
        if os.path.exists(data_path):
            data = read_json()
        else:
            data = []

        if delete:
            data = [item for item in data if item['id'] != entry['id']]
            print(
                f"The word {entry['word']} was deleted successfully.")

        elif entry:
            exists = False
            for item in data:
                if item == entry:
                    exists = True
                    break

            if exists:
                print("This data already exists.")
                return "This data already exists."

            updated = False
            for item in data:
                if item['id'] == entry['id']:
                    item.update(entry)
                    updated = True
                    break

            if not updated:
                data.append(entry)

        with open(data_path, 'w', encoding='utf-8') as file:
            json.dump(data, file, indent=2, ensure_ascii=False)

        print("Data saved successfully!")

    except Exception as e:
        print(f"Error: {e}")
