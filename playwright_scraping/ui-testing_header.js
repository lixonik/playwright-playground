import { chromium } from 'playwright'

(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:8000/example.html')

  const isVisible = await page.isVisible('h1')
  console.log(`Header visible: ${isVisible}`) // Output: true

  await browser.close()
})()
