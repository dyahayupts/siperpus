// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../bin/www');
// var expect = chai.expect;

// Configure chai
// chai.use(chaiHttp);
// chai.should();


// describe("Categories Endpoint", () => {
//     it("should be unauthorized to get all categories without token", (done) => {
//         chai.request(server)
//             .get('/api/categories')
//             .end((err, res) => {
//                 res.should.have.status(401);
//                 done();
//             });
//     });
//     it("should be unauthorized to insert new categories without token", (done) => {
//         chai.request(server)
//             .post('/api/categories')
//             .end((err, res) => {
//                 res.should.have.status(401);
//                 done();
//             });
//     });
//     it("should be not found update categories without id", (done) => {
//         chai.request(server)
//             .put('/api/categories')
//             .end((err, res) => {
//                 res.should.have.status(404);
//                 done();
//             });
//     });
//     it("should be unauthorized to delete categories without token", (done) => {
//         chai.request(server)
//             .delete('/api/categories/:id')
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

// let idCategories;
// describe("Categories Endpoint", () => {
    // it("should get all categories", (done) => {
    //     chai.request(server)
    //         .get('/api/categories')
    //         .set('authorization', `Bearer ${token}`)
    //         .end((err, res) => {
    //             expect(err).to.be.null;
    //             res.should.have.status(200);
    //             console.log(res.body)
    //             idRoles = res.body[0]._id;
    //             done();
    //         });
    // })
    // it("should get categories by id", (done) => {
    //     chai.request(server)
    //         .get('/api/categories/' + '5eb2db4f17f47735f88855d6')
    //         .set('authorization', `Bearer ${token}`)
    //         .end((err, res) => {
    //             expect(err).to.be.null;
    //             res.should.have.status(200);
    //             console.log(res.body)
    //             done();
    //         });
    // })
    // it("should insert new categories", (done) => {
    //     chai.request(server)
    //         .post('/api/categories')
    //         .set('authorization', `Bearer ${token}`)
    //         .send({
    //             name: 'History',
    //         })
    //         .end((err, res) => {
    //             expect(err).to.be.null;
    //             res.should.have.status(200);
    //             console.log(res.body.data)
    //             done();
    //         });
    // })
    // it("should update categories by id", (done) => {
    //     chai.request(server)
    //         .put('/api/categories/' + '5eba51a282b4b33e489dd9ce')
    //         .set('authorization', `Bearer ${token}`)
    //         .send({
    //             name: 'Anatomy',
    //         })
    //         .end((err, res) => {
    //             expect(err).to.be.null;
    //             res.should.have.status(200);
    //             console.log(res.body);
    //             done();
    //         });
    // })
//     it("should delete categories by id", (done) => {
//         chai.request(server)
//             .delete('/api/categories/' + '5eba51a282b4b33e489dd9ce')
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 console.log(res.body);
//                 done();
//             });
//     })
// });