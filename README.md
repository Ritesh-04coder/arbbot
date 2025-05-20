<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.6;
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      color: #333;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    pre {
      background-color: #f5f7f9;
      border-radius: 5px;
      padding: 15px;
      overflow-x: auto;
    }
    code {
      font-family: 'Courier New', monospace;
      background-color: #f0f0f0;
      padding: 2px 4px;
      border-radius: 3px;
    }
    pre code {
      background-color: transparent;
      padding: 0;
    }
    .emoji-large {
      font-size: 1.5em;
      vertical-align: middle;
      margin-right: 8px;
    }
    .emoji-small {
      margin-right: 5px;
    }
    .screenshots {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      margin: 20px 0;
    }
    .screenshots img {
      border: 1px solid #ddd;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
  </style>
  <title>Probo Arbitrage Bot</title>
</head>
<body>
  <h1><span class="emoji-large">🤖💹</span> Probo Arbitrage Bot</h1>
  <p>A TypeScript project that fetches market depth data from Probo, analyzes arbitrage opportunities, and prepares order placements.</p>

  <h2><span class="emoji-small">✨</span> Features</h2>
  <ul>
    <li>📊 Fetch market depth for Probo markets via API</li>
    <li>📈 Analyze sell-side depth for arbitrage opportunities</li>
    <li>📝 Log potential arbitrage trades with price and quantity</li>
    <li>🧩 Modular structure: <code>probo.ts</code> API client and main logic in <code>index.ts</code></li>
    <li>🔒 TypeScript with strict type safety</li>
  </ul>

  <h2><span class="emoji-small">🗂️</span> Project Structure</h2>
  <pre><code>.
├── index.ts            # Main logic & arbitrage detection
├── probo.ts            # Probo API requests (getDepth, createOrder)
├── types.ts            # Shared TypeScript types (e.g., Depth)
├── index.test.ts       # Basic test script (manual or Jest)
├── package.json        # npm configuration and scripts
├── tsconfig.json       # TypeScript configuration
└── README.html         # Project documentation
</code></pre>

  <h2><span class="emoji-small">🚀</span> Setup Instructions</h2>
  <h3><span class="emoji-small">📋</span> Requirements</h3>
  <ul>
    <li>📦 Node.js v14+ (with ES module support)</li>
    <li>🔧 npm (or yarn)</li>
  </ul>
  
  <h3><span class="emoji-small">⚙️</span> Installation</h3>
  <ol>
    <li>
      📥 Clone the repo:
      <pre><code>git clone &lt;repo-url&gt;
cd &lt;repo-folder&gt;</code></pre>
    </li>
    <li>
      📚 Install dependencies:
      <pre><code>npm install</code></pre>
    </li>
    <li>
      🔍 Install dev dependencies:
      <pre><code>npm install --save-dev typescript ts-node ts-node-esm</code></pre>
    </li>
    <li>
      ✅ Ensure <code>package.json</code> includes:
      <pre><code>{
  "type": "module",
  "scripts": {
    "start": "ts-node-esm index.ts"
  }
}</code></pre>
    </li>
    <li>
      ⚙️ Ensure <code>tsconfig.json</code> includes:
      <pre><code>{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "strict": true
  }
}</code></pre>
    </li>
  </ol>

  <h2><span class="emoji-small">▶️</span> Running the Project</h2>
  <p>Start the bot:</p>
  <pre><code>npm run start</code></pre>
  <p>This will:</p>
  <ul>
    <li>🔄 Fetch market depth using the configured token ID.</li>
    <li>🧮 Analyze sell prices for arbitrage opportunities.</li>
    <li>📊 Log findings and suggested order quantities.</li>
  </ul>

  <h2><span class="emoji-small">🧪</span> Testing</h2>
  <p>Run basic tests:</p>
  <pre><code>npx ts-node-esm index.test.ts</code></pre>
  <p>For comprehensive testing, integrate with Jest or another test runner.</p>

  <h2><span class="emoji-small">📝</span> Notes &amp; Tips</h2>
  <ul>
    <li>⚠️ Top-level <code>await</code> requires ESM mode (<code>"type": "module"</code> in <code>package.json</code>).</li>
    <li>🔑 For production, move API tokens and headers into environment variables.</li>
    <li>💰 Arbitrage logic checks for profitable price differences and calculates quantities.</li>
    <li>🔄 Extend <code>createOrderProbo</code> in <code>probo.ts</code> to place real orders when ready.</li>
  </ul>

  <h2><span class="emoji-small">📄</span> License</h2>
  <p>MIT License</p>
  
  <h2><span class="emoji-small">🖼️</span> Screenshots</h2>
  <div class="screenshots">
    <figure>
      <img src="https://github.com/user-attachments/assets/d31f7df4-cf8a-482b-9b56-21148e1738c3" alt="Probo Bot Interface Screenshot" width="300" />
      <figcaption>Interface view</figcaption>
    </figure>
    <figure>
      <img src="https://github.com/user-attachments/assets/0f2bb490-7721-4cc5-945b-1018bdd394a4" alt="Probo Bot Results Screenshot" width="300" />
      <figcaption>Sample results</figcaption>
    </figure>
  </div>
</body>
</html>
