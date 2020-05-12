// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../bin/www');
// const expect = require('chai').expect;

// Configure chai
// chai.use(chaiHttp);
// chai.should();


// describe("Roles Endpoint", () => {
//     it("should be unauthorized to get all roles without token", (done) => {
//         chai.request(server)
//             .get('/api/roles')
//             .end((err, res) => {
//                 res.should.have.status(401);
//                 done();
//             });
//     });
//     it("should be unauthorized to insert new roles without token", (done) => {
//         chai.request(server)
//             .post('/api/roles')
//             .end((err, res) => {
//                 res.should.have.status(401);
//                 done();
//             });
//     });
//     it("should be not found update roles without id", (done) => {
//         chai.request(server)
//             .put('/api/roles')
//             .end((err, res) => {
//                 res.should.have.status(404);
//                 done();
//             });
//     });
//     it("should be unauthorized to delete roles without token", (done) => {
//         chai.request(server)
//             .delete('/api/roles/:id')
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

// let idRoles;
// describe("Roles", () => {
//     it("should get all roles", (done) => {
//         chai.request(server)
//             .get('/api/roles')
//             .set('authorization', `Bearer ${token}`)
//             .end((err, res) => {
//                 expect(err).to.be.null;
//                 res.should.have.status(200);
//                 console.log(res.body)
//                 idRoles = res.body[0]._id;
//                 done();
//             });
//     })
    // it("should get roles by id", (done) => {
    //     chai.request(server)
    //         .get('/api/roles/' + '5eb183dc63061431a054d962')
    //         .set('authorization', `Bearer ${token}`)
    //         .end((err, res) => {
    //             expect(err).to.be.null;
    //             res.should.have.status(200);
    //             console.log(res.body)
    //             done();
    //         });
    // })
    // it("should insert new roles", (done) => {
    //     chai.request(server)
    //         .post('/api/roles')
    //         .set('authorization', `Bearer ${token}`)
    //         .send({
    //             name: 'admin',
    //             name_long: 'Admin Network',
    //             priority: 1,
    //             description: 'Access Network'
    //         })
    //         .end((err, res) => {
    //             expect(err).to.be.null;
    //             res.should.have.status(200);
    //             console.log(res.body.data)
    //             done();
    //         });
    // })
    // it("should update roles by id", (done) => {
    //     chai.request(server)
    //         .put('/api/roles/' + '5eba3b65f3cb4717648da5d9')
    //         .set('authorization', `Bearer ${token}`)
    //         .send({
    //             name_long: 'Admin Networking',
    //         })
    //         .end((err, res) => {
    //             expect(err).to.be.null;
    //             res.should.have.status(200);
    //             console.log(res.body);
    //             done();
    //         });
    // })
    // it("should delete roles by id", (done) => {
    //     chai.request(server)
    //         .delete('/api/roles/' + '5eba3b65f3cb4717648da5d9')
    //         .set('authorization', `Bearer ${token}`)
    //         .end((err, res) => {
    //             expect(err).to.be.null;
    //             res.should.have.status(200);
    //             console.log(res.body);
    //             done();
    //         });
    // })
// });