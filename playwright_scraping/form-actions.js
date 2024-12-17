import { chromium } from 'playwright'

(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:8000/example.html')

  await page.fill('#search-input', 'Playwright Test')
  await page.click('#submit-button')

  const title = await page.title()
  console.log(`Page title: ${title}`) // Output: Playwright Test Page

  await browser.close()
})()
