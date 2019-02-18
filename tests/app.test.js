const test = require('tape')
const supertest = require('supertest')
const app = require('../app')

test('GET /somar/10/5', (t) => {
    supertest(app)
        .get('/somar/10/5')
        .expect('Content-Type', /json/)
        .expect({result : 15})
        .end((err, res) => {    
            t.error(err, 'Errors')
            t.assert(res.body.result === 15, "Valor esperado: 15")            
            t.end()
        })
})

test('GET /subtrair/10/5', (t) => {
    supertest(app)
        .get('/subtrair/10/5')
        .expect('Content-Type', /json/)
        .expect({result : 5})
        .end((err, res) => {    
            t.error(err, 'Errors')
            t.assert(res.body.result === 5, "Valor esperado: 5")            
            t.end()
        })
})