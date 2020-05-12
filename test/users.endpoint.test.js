// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../bin/www');
// var expect = chai.expect;

// Configure chai
// chai.use(chaiHttp);
// chai.should();


// describe("Users Endpoint", () => {
//     it("should be unauthorized to get all users without token", (done) => {
//         chai.request(server)
//             .get('/api/users')
//             .end((err, res) => {
//                 res.should.have.status(401);
//                 done();
//             });
//     });
//     it("should be unauthorized to insert new users without token", (done) => {
//         chai.request(server)
//             .post('/api/users')
//             .end((err, res) => {
//                 res.should.have.status(401);
//                 done();
//             });
//     });
//     it("should be not found update users without id", (done) => {
//         chai.request(server)
//             .put('/api/users')
//             .end((err, res) => {
//                 res.should.have.status(404);
//                 done();
//             });
//     });
//     it("should be unauthorized to delete users without token", (done) => {
//         chai.request(server)
//             .delete('/api/users/:id')
//             .end((err, res) => {
//                 res.should.have.status(401);
//                 done();
//             });
//     });
// })


// let token;
// describe("Login", ()=> {
//  it("should return token", (done) => {
//    chai.request(server)
//    .get('/auth/login')
//    .auth('adminperpus', 'admin')
//    .end((err, res) => {
//      expect(err).to.be.null;
//      res.should.have.status(200);
//      token = res.body.token;
//      done();
//    });
//  });
//  })

// let idUsers;
// describe("Users Endpoint", () => {
    // it("should get all users", (done) => {
    //     chai.request(server)
    //         .get('/api/users')
    //         .set('authorization', `Bearer ${token}`)
    //         .end((err, res) => {
    //             expect(err).to.be.null;
    //             res.should.have.status(200);
    //             console.log(res.body)
    //             idUsers = res.body[0]._id;
    //             done();
    //         });
    // })
    // it("should get users by id", (done) => {
    //     chai.request(server)
    //         .get('/api/users/' + '5eb2bc7a8f538e1f187a5fa2')
    //         .set('authorization', `Bearer ${token}`)
    //         .end((err, res) => {
    //             expect(err).to.be.null;
    //             res.should.have.status(200);
    //             console.log(res.body)
    //             done();
    //         });
    // })
    // it("Should insert new users", (done) => {
    // chai.request(server)
    //     .post('/api/users')
    //     .set('authorization', `Bearer ${token}`)
    //     .send({
    //         username: 'adminutama',
    //         role: '5eb183dc63061431a054d962',
    //         password: 'adminutama',
    //         displayName: 'Admin Utama Publik',
    //         email: 'adminutama@gmail.com'
    //     })
    //     .end((err, res) => {
    //         expect(err).to.be.null;
    //         res.should.have.status(200);
    //         console.log(res.body.data)
    //         done();
    //     });
    // })
// it("should update users by id", (done) => {
//     chai.request(server)
//         .put('/api/users/' + '5eba41fc7989903d74230b7b')
//         .set('authorization', `Bearer ${token}`)
//         .send({
//             username: 'adminutamaa',
//             role: '5eb17de2cdbc493280d632c5',
//             password: 'adminutama',
//             displayName: 'Admin Gardik',
//             email: 'adminupdate@ymail.com'
//         })
//         .end((err, res) => {
//             expect(err).to.be.null;
//             res.should.have.status(200);
//             console.log(res.body);
//             done();
//         });
// })
// it("Should delete user by id", (done) => {
//     chai.request(server)
//         .delete('/api/users/' + '5eba41fc7989903d74230b7b')
//         .set('authorization', `Bearer ${token}`)
//         .end((err, res) => {
//             expect(err).to.be.null;
//             res.should.have.status(200);
//             console.log(res.body);
//             done();
//         });
//     });
// })
