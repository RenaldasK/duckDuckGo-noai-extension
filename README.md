# Custom DuckDuckGo No-AI Chrome Extension

A minimal Chrome extension that replaces Chrome's default search engine and new tab page with [DuckDuckGo's "No AI" search](https://noai.duckduckgo.com/).

## What it does

- **Overrides the default search engine** so every search from the address bar goes to `https://noai.duckduckgo.com/`.
- **Replaces the new tab page** with a custom page that shows the extension logo and a search input. Submissions go directly to the no-AI subdomain.
- **Allows customising the new tab page** by selecting a custom background image.

## Why?

At the time of creating this extension, DuckDuckGo's official no-AI extension only replaced URL bar searches with noai subdomain, and did not allow customising the new tab page's background.

## Installation

1. Open `chrome://extensions/`.
2. Enable **Developer mode** (top right).
3. Click **Load unpacked** and select the `src/` folder.

## Privacy

The extension does not collect, store, or transmit any data. All search queries are sent directly from your browser to `noai.duckduckgo.com`. See DuckDuckGo's own privacy policy for how that service handles queries.
