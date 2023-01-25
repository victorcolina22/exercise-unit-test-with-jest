const { sum, convertCurrency } = require('./app.js')

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9)
    expect(total).toBe(23)
})

test('One euro should be 4.2 dollars', () => {
    const dollars = convertCurrency(3.5, "USD")
    expect(dollars).toBe(4.2)
})
test('Two euros should be 255.8 japan yen', () => {
    const yen = convertCurrency(2, "JPY")
    expect(yen).toBe(255.8)
})
test('Three euros should be 2.4 british pounds', () => {
    const pounds = convertCurrency(3, "GBP")
    expect(pounds).toBe(2.4)
})