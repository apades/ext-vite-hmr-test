(function () {
  'use strict';
  (async () => {
    await Promise.all([
      import('./react-refresh.js'),
      import('http://localhost:3303/@vite/client'),
      import(`http://localhost:3303/src/content.tsx`),
    ])
  })().catch(console.error)
})()
