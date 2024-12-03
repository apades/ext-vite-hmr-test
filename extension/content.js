(function () {
  'use strict';
  (async () => {
    await Promise.all([
      import('http://localhost:3303/@vite/client'),
      import(`http://localhost:3303/src/content.ts`),
    ])
  })().catch(console.error)
})()
