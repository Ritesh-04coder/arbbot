<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Probo Arbitrage Bot README</title>
</head>
<body>
  <h1>Probo Arbitrage Bot</h1>
  <p>
    A TypeScript project to fetch market depth data from Probo, analyze for arbitrage opportunities, and prepare order placements.
  </p>

  <h2>Features</h2>
  <ul>
    <li>Fetch market depth for Probo markets via API</li>
    <li>Analyze sell-side depth for arbitrage opportunities</li>
    <li>Logs potential arbitrage trades with price and quantity</li>
    <li>Modular structure with <code>probo.ts</code> API client and main logic in <code>index.ts</code></li>
    <li>Written in TypeScript with type safety</li>
  </ul>

  <h2>Project Structure</h2>
  <pre>
.
├── index.ts            # Main logic & arbitrage detection
├── probo.ts            # Probo API requests (getDepth, createOrder)
├── types.ts            # Shared TypeScript types like Depth
├── index.test.ts       # Basic test script (manual or Jest)
├── package.json        # npm config and scripts
├── tsconfig.json       # TypeScript configuration
└── README.md           # This file
  </pre>

  <h2>Setup Instructions</h2>
  <h3>Requirements</h3>
  <ul>
    <li>Node.js v14+ (supports ES modules & top-level await)</li>
    <li>npm (or yarn)</li>
  </ul>

  <h3>Installation</h3>
  <ol>
    <li>
      Clone the repo:
      <pre><code>git clone &lt;repo-url&gt;
cd &lt;repo-folder&gt;</code></pre>
    </li>
    <li>
      Install dependencies:
      <pre><code>npm install</code></pre>
    </li>
    <li>
      Make sure <code>ts-node</code>, <code>typescript</code>, and <code>ts-node-esm</code> are installed (should be in devDependencies):
      <pre><code>npm install --save-dev typescript ts-node ts-node-esm</code></pre>
    </li>
    <li>
      Confirm your <code>package.json</code> includes:
      <pre><code>{
  "type": "module",
  "scripts": {
    "start": "ts-node-esm index.ts"
  }
}
</code></pre>
    </li>
    <li>
      Ensure your <code>tsconfig.json</code> includes:
      <pre><code>{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "strict": true
  }
}
</code></pre>
    </li>
  </ol>

  <h2>Running the Project</h2>
  <p>Run the main script with:</p>
  <pre><code>npm run start</code></pre>
  <p>This will:</p>
  <ul>
    <li>Fetch Probo market depth using the configured token ID.</li>
    <li>Analyze sell prices for arbitrage.</li>
    <li>Log findings and suggested order quantities.</li>
  </ul>

  <h2>Testing</h2>
  <p>Basic manual test example in <code>index.test.ts</code>. You can run it with:</p>
  <pre><code>npx ts-node-esm index.test.ts</code></pre>
  <p>For full testing, integrate with Jest or your preferred test runner.</p>

  <h2>Notes &amp; Tips</h2>
  <ul>
    <li>The project uses top-level <code>await</code>, so Node.js must be run in ESM mode (<code>"type": "module"</code> in <code>package.json</code>).</li>
    <li>API tokens and authorization headers are hardcoded for simplicity; for production, consider environment variables.</li>
    <li>The arbitrage logic checks for profitable price differences and calculates quantities accordingly.</li>
    <li>Extend <code>createOrderProbo</code> in <code>probo.ts</code> to actually place orders when ready.</li>
  </ul>

  <h2>License</h2>
  <p>MIT License</p>
</body>
</html>
