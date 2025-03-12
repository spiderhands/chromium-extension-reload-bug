# Extension not reloading reproduction

This repository is a reproduction of the error that occurs when trying to
reload extension's service worker using `chrome.runtime.reload()`.

## How to reproduce

1. Clone this repository
2. Install Chromium >=134
3. Run `<chromium_install_location>/Contents/MacOS/Chromium --enable-automation --load-extension=./extension --user-data-dir=./user-data-dir about:blank`
4. Open extension popup
5. Click `Reload Runtime` button

<details>
 <summary>Working demo (Chromium 133)</summary>

https://github.com/user-attachments/assets/7b429d33-aeb9-4432-9f8a-917a51b770b9
  
</details>

<details>
 <summary>Demo with the bug (Chromium 134)</summary>

https://github.com/user-attachments/assets/374ec01b-2e16-4c19-9ead-f8cee7225394
  
</details>

## Observed behavior

Extension is turned off in the extensions management page and in order to enable it again extension's developer mode should be enabled by hand

## Expected behavior

Extension is reloaded, enabled and it is possible to interact with it from the page toolbar

# Workaround

Adding `--enable-unsafe-extension-debugging` flag fixes the behavior.

```bash
`<chromium_install_location>/Contents/MacOS/Chromium --enable-automation --load-extension=./extension --user-data-dir=.user-data-dir --enable-unsafe-extension-debugging about:blank`
```
