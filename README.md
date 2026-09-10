# IB Math Question Bank

A browser for IB Mathematics exam questions, sorted by topic, with an admin route
for uploading past-paper PDFs. Built with Next.js.

> 🚧 **Early prototype.** The topic list and per-topic questions are hard-coded
> sample data, and the PDF pipeline is scaffolded but not complete (see below).

> 📸 **Screenshot needed**: the home page with the topic grid and the search box. Save to `docs/home.png` and replace this line with `![Home](docs/home.png)`.

## Quickstart

```bash
git clone https://github.com/simar-s2/ib-question-bank.git
cd ib-question-bank

npm install
npm run dev
```

Open http://localhost:3000.

## How it works

A Next.js App Router project with three routes:

| Route | What it does |
|---|---|
| `/` | lists the eight IB Math topics; a client-side text filter narrows the list as you type |
| `/topics/[slug]` | shows the questions for one topic, looked up from a `topicData` map by slug; unknown slugs return a 404 |
| `/admin/upload` | a file input that `POST`s a PDF to `/api/upload-pdf` |

**The upload route** (`/api/upload-pdf`) saves the incoming PDF to a temp path and
`spawn`s `python3 scripts/process_pdf.py <file>`, resolving the request when that
process exits cleanly. The Python script is the intended place for OCR and
question extraction. It isn't in the repo yet, so uploads currently succeed only
as far as the spawn.

## What it does (today)

- Browse IB Math topics with live search
- Open a topic to see its sample questions
- Upload a PDF from the admin page (backend processing is a work in progress)

## Roadmap

- Real question storage instead of the hard-coded `topicData`
- The `scripts/process_pdf.py` extractor behind the upload route
- Per-question rendering (math typesetting, markschemes)

## Built with

Next.js 15 · React 19 · TypeScript · Tailwind CSS

## License

Released under the [MIT License](LICENSE).
