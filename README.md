# zoom-remove

[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/mimjaofnflecmklpiogcoliadefhipme?style=for-the-badge)](https://chrome.google.com/webstore/detail/zoom-remove/mimjaofnflecmklpiogcoliadefhipme)


### A Chrome extension that removes unnecessary Zoom tabs


If you are entering a lot of Zoom meetings, you've likely noticed the pile of tabs that grows in your Chrome sessions following the meeting invitation links. This extension takes care of that clutter.

Once installed and active in Chrome, it targets tabs with URL matching the `*.zoom.us/{j/s}/*` pattern and removes them after some time.

By default the TTL is set to 10 seconds. This is more than enough time for the tab to callback to the local Zoom service triggering the Zoom client to enter a meeting. 

The TTL is configurable and synced with Chrome sync (using `storage.sync`). 
