const chai = require('chai').expect;
const request = require('supertest');

const app = require('./server');

describe('[RENTALS]', () => {
    it('should get all offers', (done) => {
        request(app)
        .get('/rentals')
        //.set('Content-Type', 'aplication')
        //.expect('Content-Type', /json/)
        //.expect(200)
        .end(function(err, resp) {
            chai(resp.body).to.be.an('array');
            chai(resp.body[0]).to.have.property('offerId');
            done()
        })
    })
})