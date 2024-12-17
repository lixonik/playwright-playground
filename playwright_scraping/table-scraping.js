import { chromium } from 'playwright'

(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:8000/example.html')

  const values = await page.$$eval('table tr td:first-child', cells =>
    cells.map(cell => cell.textContent)
  )
  console.log('Extracted values:', values) // Output: ["Row 1, Col 1", "Row 2, Col 1"]

  await browser.close()
})()
