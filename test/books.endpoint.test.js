const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../bin/www');
var expect = chai.expect;

// Configure chai
chai.use(chaiHttp);
chai.should();


// describe("Books Endpoint", () => {
//     it("should be unauthorized to get all books without token", (done) => {
//         chai.request(server)
//             .get('/api/books')
//             .end((err, res) => {
//                 res.should.have.status(401);
//                 done();
//             });
//     });
//     it("should be unauthorized to insert new books without token", (done) => {
//         chai.request(server)
//             .post('/api/books')
//             .end((err, res) => {
//                 res.should.have.status(401);
//                 done();
//             });
//     });
//     it("should be not found update books without id", (done) => {
//         chai.request(server)
//             .put('/api/books')
//             .end((err, res) => {
//                 res.should.have.status(404);
//                 done();
//             });
//     });
//     it("should be unauthorized to delete books without token", (done) => {
//         chai.request(server)
//             .delete('/api/books/:id')
//             .end((err, res) => {
//                 res.should.have.status(401);
//                 done();
//             });
//     });
// })



let token;
describe("Login", () => {
    it("should return token", (done) => {
        chai.request(server)
            .get('/auth/login')
            .auth('adminperpus', 'admin')
            .end((err, res) => {
                expect(err).to.be.null;
                res.should.have.status(200);
                token = res.body.token;
                done();
            });
    });
})

let idBooks;
describe("Books Endpoint", () => {
    // it("should get all books", (done) => {
    //     chai.request(server)
    //         .get('/api/books')
    //         .set('authorization', `Bearer ${token}`)
    //         .end((err, res) => {
    //             expect(err).to.be.null;
    //             res.should.have.status(200);
    //             console.log(res.body)
    //             idRoles = res.body[0]._id;
    //             done();
    //         });
    // })
    // it("should get book by id", (done) => {
    //     chai.request(server)
    //         .get('/api/books/' + '5eb56fe348be080ecc171488')
    //         .set('authorization', `Bearer ${token}`)
    //         .end((err, res) => {
    //             expect(err).to.be.null;
    //             res.should.have.status(200);
    //             console.log(res.body)
    //             done();
    //         });
    // })
    // it("should insert new books", (done) => {
    //     chai.request(server)
    //         .post('/api/books')
    //         .set('authorization', `Bearer ${token}`)
    //         .send({
    //             title : 'Negeri 5 Menara',
    //             quantity : 109,
    //             publishedYear : '2009',
    //             author : '5eb2df7b06f299379c112fb5',
    //             category : '5eb2db7517f47735f88855d7',
    //             createdBy : '5eb2bc7a8f538e1f187a5fa2',
    //             updatedBy : '5eb2bc7a8f538e1f187a5fa2'
    //         })
    //         .end((err, res) => {
    //             expect(err).to.be.null;
    //             res.should.have.status(200);
    //             console.log(res.body.data)
    //             done();
    //         });
    // })
    it("should update books by id", (done) => {
        chai.request(server)
            .put('/api/books/' + '5eba6c63547a043b583b77b6')
            .set('authorization', `Bearer ${token}`)
            .send({
                title : 'Rantau 1 Muara',
                quantity : 101,
                publishedYear : '2013',
                category : '5eb2db7517f47735f88855d7'
            })
            .end((err, res) => {
                expect(err).to.be.null;
                res.should.have.status(200);
                console.log(res.body);
                done();
            });
    })
    // it("should delete book by id", (done) => {
    //     chai.request(server)
    //         .delete('/api/books/' + '5eba664af449a91b94d84f3b')
    //         .set('authorization', `Bearer ${token}`)
    //         .end((err, res) => {
    //             expect(err).to.be.null;
    //             res.should.have.status(200);
    //             console.log(res.body);
    //             done();
    //         });
    // })
});