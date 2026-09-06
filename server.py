from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import os, webbrowser
os.chdir(Path(__file__).parent)
port = int(os.environ.get('PORT','8765'))
url=f'http://127.0.0.1:{port}'
print(f'ReThink Calisthenics läuft auf {url}')
ThreadingHTTPServer(('127.0.0.1',port),SimpleHTTPRequestHandler).serve_forever()
