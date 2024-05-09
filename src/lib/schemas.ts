import * as z from "zod"

export const PayslipBodySchema = z.object({
  url: z.string().url({ message: "Invalid Url!" })
})