// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../bin/www');
// var expect = chai.expect;

// Configure chai
// chai.use(chaiHttp);
// chai.should();


// describe("Authors Endpoint", () => {
//     it("should be unauthorized to get all authors without token", (done) => {
//         chai.request(server)
//             .get('/api/authors')
//             .end((err, res) => {
//                 res.should.have.status(401);
//                 done();
//             });
//     });
//     it("should be unauthorized to insert new authors without token", (done) => {
//         chai.request(server)
//             .post('/api/authors')
//             .end((err, res) => {
//                 res.should.have.status(401);
//                 done();
//             });
//     });
//     it("should be not found update author without id", (done) => {
//         chai.request(server)
//             .put('/api/authors')
//             .end((err, res) => {
//                 res.should.have.status(404);
//                 done();
//             });
//     });
//     it("should be unauthorized to delete authors without token", (done) => {
//         chai.request(server)
//             .delete('/api/authors/:id')
//             .end((err, res) => {
//                 res.should.have.status(401);
//                 done();
//             });
//     });
// })


// let token;

// describe("Login", () => {
//     it("should return token", (done) => {
//         chai.request(server)
//             .get('/auth/login')
//             .auth('adminperpus', 'admin')
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 token = res.body.token;
//                 done();
//             });
//     });
// })

// let idAuthors;
// describe("Authors Endpoint", () => {
    // it("should get all authors", (done) => {
    //     chai.request(server)
    //         .get('/api/authors')
    //         .set('authorization', `Bearer ${token}`)
    //         .end((err, res) => {
    //             expect(err).to.be.null;
    //             res.should.have.status(200);
    //             console.log(res.body)
    //             idRoles = res.body[0]._id;
    //             done();
    //         });
    // })
    // it("should get author by id", (done) => {
    //     chai.request(server)
    //         .get('/api/authors/' + '5eb2df3006f299379c112fb2')
    //         .set('authorization', `Bearer ${token}`)
    //         .end((err, res) => {
    //             expect(err).to.be.null;
    //             res.should.have.status(200);
    //             console.log(res.body)
    //             done();
    //         });
    // })
    // it("should insert new authors", (done) => {
    //     chai.request(server)
    //         .post('/api/authors')
    //         .set('authorization', `Bearer ${token}`)
    //         .send({
    //             name: 'Haidar Musyafa',
    //         })
    //         .end((err, res) => {
    //             expect(err).to.be.null;
    //             res.should.have.status(200);
    //             console.log(res.body.data)
    //             done();
    //         });
    // })
    // it("should update authors by id", (done) => {
    //     chai.request(server)
    //         .put('/api/authors/' + '5eba56ea83437f3f241acf57')
    //         .set('authorization', `Bearer ${token}`)
    //         .send({
    //             name: 'H. G. Wells',
    //         })
    //         .end((err, res) => {
    //             expect(err).to.be.null;
    //             res.should.have.status(200);
    //             console.log(res.body);
    //             done();
    //         });
    // })
//     it("should delete authors by id", (done) => {
//         chai.request(server)
//             .delete('/api/authors/' + '5eba56ea83437f3f241acf57')
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 console.log(res.body);
//                 done();
//             });
//     })
// });