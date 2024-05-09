import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
// UTILS
import { generatePayslipPdf } from "@/lib/utils";
// SCHEMAS
import { PayslipBodySchema } from "@/lib/schemas";

const payslipRoute = new Hono()

payslipRoute
  .get("/", zValidator("query", PayslipBodySchema), async ({ req }) => {
    const { url } = req.valid("query")
    const payslipPdf = await generatePayslipPdf(url)

    return new Response(payslipPdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Length": payslipPdf.length.toString()
      }
    })
  })

export { payslipRoute }