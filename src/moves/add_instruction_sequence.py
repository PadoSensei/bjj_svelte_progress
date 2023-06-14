import os
import json

directory = "/path/to/json/files"

for filename in os.listdir(directory):
    if filename.endswith(".json"):
        with open(os.path.join(directory, filename), "r") as f:
            data = json.load(f)
            instructions = data.get("instructions")
            if instructions:
                sorted_instructions = sorted(instructions, key=lambda x: x.get("stepNumber"))
                data["instructions"] = sorted_instructions
                with open(os.path.join(directory, filename), "w") as f:
                    json.dump(data, f, indent=2)
