import Products from '../(models)/Products'
import { NextResponse } from 'next/server'

// export async function GET(params:type) {
//     try {
//         const body = await req.json()
//         const productsData = body.formData
//         await Products.create(ticket)
//     } catch (error) {
//         return NextResponse.json({message:"error", error}, {status:500})
//     }
// }
export async function GET() {
    try {
        const products = await Products.find()
        return NextResponse.json({ products }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'error', error }, { status: 500 })
    }
}
