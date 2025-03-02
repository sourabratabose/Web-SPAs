import { z } from "zod"

const newsletter_schema = z.object({
  email: z.string().min(5).max(50).email()
})

export default newsletter_schema;