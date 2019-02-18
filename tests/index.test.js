const test = require('tape')
const index = require('../index')

test('Somar valores', (t) => {
    t.assert(index.somar(10,5) === 15, "Somar valores sucesso")
    t.end()  
})

test('Subtrair valores', (t) => {
    t.assert(index.subtrair(10,5) === 5, "Subtrair valores sucesso")
    t.end()
})