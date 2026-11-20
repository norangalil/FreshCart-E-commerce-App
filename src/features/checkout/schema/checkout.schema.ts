import z from "zod";

export const ShippingAddressSchema = z.object({
details: z.string().nonempty('Please This Field is Required'),
phone: z
  .string()
  .nonempty('Please This Field is Required')
  .regex(/^01[0125]\d{8}$/, 'Please Enter a Valid Egyptian Phone Number'),

city : z.string().nonempty('Please This Field is Required').min(3 , 'City Must be at least 3 chracter'
      )

})

export type ShippingAddressvalues = z.infer<typeof ShippingAddressSchema>
