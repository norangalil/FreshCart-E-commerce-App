import { z} from 'zod'
export  const loginSchema  =
    z.object({
email: z.string().nonempty('Email is Required').pipe(z.email('invaild Email Address')),
password : z.string().nonempty('Password is Required'),
rememberMe : z.boolean().optional()

    })
        
    
 export type loginFormValues = z.infer<typeof loginSchema>