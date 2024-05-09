import { Hono } from 'hono'
import { logger } from "hono/logger"
// ROUTES
import { payslipRoute } from '@/routes/payslip'

const app = new Hono()

// set logger
app.use("*", logger())

app.get('/', (c) => {
  return c.text('Generate PDF service online!')
})

app
  .basePath("/generate-pdf")
  .route("/payslip", payslipRoute)

export default {
  port: 3001,
  fetch: app.fetch
}
