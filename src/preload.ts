// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
import { contextBridge } from 'electron'

const processVersions = {}

for (const dependency of ['chrome', 'node', 'electron']) {
  processVersions[dependency] = process.versions[dependency]
}

contextBridge.exposeInMainWorld('processVersions', processVersions)