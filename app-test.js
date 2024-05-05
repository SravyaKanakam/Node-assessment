import supertest from "supertest";
import {app} from './index.js';
// import {request} from 'express';
const request=supertest(app);

describe('it should pass',()=>{
    // it('should pass',()=>{
    //     expect(5+5).toBe(10);
    // });
    // it('should not pass',()=>{
    //     expect(5+2).toBe(8);
    // });
    it('it should succeed login',async()=>{
        const res=await request
        .post('/login')
        .send({username:'sonu',password:'sonu'});
        expect(res.status).toBe(200);
        expect(res.body.message).toBe('Login successful');
        expect(res.body.token).toBeTruthy();
    })
});