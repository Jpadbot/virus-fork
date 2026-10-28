#!/usr/bin/env python3
"""Build playable.html from index.html + cover image (default cover-playable.jpg)."""
from pathlib import Path
import base64, argparse
root = Path(__file__).resolve().parents[1]
ap = argparse.ArgumentParser()
ap.add_argument('--cover', default=str(root / 'cover-playable.jpg'))
ap.add_argument('--index', default=str(root / 'index.html'))
ap.add_argument('--out', default=str(root / 'playable.html'))
args = ap.parse_args()
idx = Path(args.index).read_text()
raw = Path(args.cover).read_bytes()
b64 = base64.b64encode(raw).decode()
if 'src="cover-v1.jpg"' not in idx:
    raise SystemExit('index missing src="cover-v1.jpg"')
out = idx.replace('src="cover-v1.jpg"', f'src="data:image/jpeg;base64,{b64}"', 1)
Path(args.out).write_text(out)
print(f'wrote {args.out} bytes={Path(args.out).stat().st_size} cover={args.cover} ({len(raw)} B)')
