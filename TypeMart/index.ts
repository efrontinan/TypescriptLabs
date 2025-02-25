import products from './products'

const productName: string = 'shirt'
let shipping: number
let taxPercent: number
let taxTotal: number
let total: number

const shippingAddress: string = 'Calle Hermosilla 142, Madrid, España'

const product = products.find(product => productName === product.name)

if (product?.preOrder === true) {
    console.log('We will send you a message when your product is on its way.');
}

if (Number(product?.price) > 25) {
    shipping = 0
    console.log(`This order is free shipping since it's over 25$`)
} else {
    shipping = 5
}

if (shippingAddress.includes('New York')) {
    taxPercent = 0.1
} else {
    taxPercent = .05
}

taxTotal = Number(product?.price) * taxPercent

total = Number(product?.price) + taxTotal + shipping

console.log(`
Product:  ${product?.name}
Address:  ${shippingAddress}
Price:    $${product?.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);


