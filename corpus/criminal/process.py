import json
import re
import os

input_file = r"g:\Hackathon\corpus\criminal\criminal.jsonl"
output_file = r"g:\Hackathon\corpus\criminal\criminal_processed.jsonl"

def normalize_whitespace(text):
    if not isinstance(text, str):
        return text
    # remove \n, \t, \r
    text = text.replace('\n', ' ').replace('\t', ' ').replace('\r', ' ')
    # replace multiple spaces with single space
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

try:
    with open(input_file, 'r', encoding='utf-8', errors='ignore') as infile, \
         open(output_file, 'w', encoding='utf-8') as outfile:
        
        for line in infile:
            if not line.strip():
                continue
            try:
                data = json.loads(line)
            except json.JSONDecodeError:
                continue
            
            # 1. Rename chunk_text -> text
            if 'chunk_text' in data:
                data['text'] = normalize_whitespace(data['chunk_text'])
                del data['chunk_text']
                
            # 2. Clean text is done above in normalize_whitespace
            # If text field exists but wasn't named chunk_text originally
            elif 'text' in data:
                data['text'] = normalize_whitespace(data['text'])
            
            # 3. Remove fields: tid, judge, word_count, total_chunks, chunk_index
            fields_to_remove = ['tid', 'judge', 'word_count', 'total_chunks', 'chunk_index']
            for field in fields_to_remove:
                data.pop(field, None)
                
            # 4. Rename importance_score -> authority_score
            if 'importance_score' in data:
                data['authority_score'] = data.pop('importance_score')
                
            # 5. Rename url -> source
            if 'url' in data:
                data['source'] = data.pop('url')
                
            outfile.write(json.dumps(data, ensure_ascii=False) + '\n')

    # Replace original file with processed file
    os.replace(output_file, input_file)
    print("Processing complete.")
except Exception as e:
    print(f"Error: {e}")
