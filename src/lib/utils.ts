import puppeteer from "puppeteer";

export async function generatePayslipPdf(url: string) {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox'
    ],
    executablePath: "/usr/bin/chromium-browser"
  });
  const page = await browser.newPage();

  await page.goto(url);

  const pdf = await page.pdf({
    format: "A4"
  })

  await browser.close()
  return pdf
}