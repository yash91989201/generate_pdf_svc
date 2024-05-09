import puppeteer from "puppeteer";

const GENERATE_PDF_SECRET = "SHjGXn2hjw5F1V72wY7bDXGlykN16AQACmN6tIyPrVUW"

export async function generatePayslipPdf(url: string) {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox'
    ],
    executablePath: "/usr/bin/chromium-browser",
  });
  const page = await browser.newPage();

  // set header 
  page.setExtraHTTPHeaders({
    "x-generate-pdf-secret": GENERATE_PDF_SECRET
  })

  await page.goto(url, { waitUntil: "domcontentloaded" });

  const pdf = await page.pdf({
    format: "A4"
  })

  await browser.close()
  return pdf
}