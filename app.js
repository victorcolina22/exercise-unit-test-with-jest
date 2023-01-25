const sum = (a,b) => a + b

const oneEuroIs = {
    "JPY": 127.9,
    "USD": 1.2,
    "GBP": 0.8,
}

const convertCurrency = (amount, currency) => {
    const result = amount * oneEuroIs[currency]
    return Number(result.toFixed(1))
}

module.exports = {
    sum,
    convertCurrency
}