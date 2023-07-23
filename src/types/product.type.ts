import { z } from "zod";

const ProductCardSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  category: z.string(),
  description: z.string(),
  image: z.string(),
  rating: z.object({
    count: z.number(),
    rate: z.number(),
  }),
});

type ProductCardType = z.infer<typeof ProductCardSchema>;

export { type ProductCardType, ProductCardSchema };
