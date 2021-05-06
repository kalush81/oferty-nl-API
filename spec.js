const chai = require('chai').expect;
const should = require('chai').should();
const request = require('supertest');
require('colors')

const app = require('./server');

describe('[  RENTALS  ]'.yellow, () => {
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
    it('should create an offer', (done) => {
        let offer = {
            title: 'rower',
            description: 'mam do wynajcia super rower',
            daily_price: 5,
            userId: 2
        }
        request(app)
        .post('/rentals')
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