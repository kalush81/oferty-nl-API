const chai = require('chai').expect;
const request = require('supertest');
const rentals = require('./server/api/mokup-data/oferty.json');

const app = require('./server/server');

require('colors');

describe('[  RENTALS  ]'.yellow, () => {
    it('should get all offers', (done) => {
        request(app)
        .get('/api/rentals')
        //.set('Content-Type', 'aplication')
        //.expect('Content-Type', /json/)
        //.expect(200)
        .end(function(err, resp) {
            chai(resp.body).to.be.an('array');
            chai(resp.body[0]).to.have.property('offerId');
            done()
        })
    })
    it('should create an offer', (done) => {
        let offer = {
            title: 'rower',
            description: 'mam do wynajcia super rower',
            daily_price: 5,
            userId: 2
        }
        request(app)
        .post('/api/rentals')
        .send(offer)
        .set('Accept', 'aplication/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
            const offer = resp.body
            chai(offer).to.be.an('object')
            
            describe('[ rentals ]'.yellow, () => {
                it('should match regex 5abc', () => {
                    chai(offer.offerId).to.match(/5abc/)
                })
            })
        })
        done()
        
    })
})