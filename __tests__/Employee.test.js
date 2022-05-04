
const Employee = require("../lib/Employee");
const employee = new Employee();

describe('Employee', () => {
    describe('name', () => {
        test('Gets employee name', () => {
            
            const name = 'Dave'

            expect(employee.name).toBe(name);
        })
    })
    describe('id', () => {
        test('Gets employee id', () => {

            const num = 10;

            expect(employee.id).toBe(num);
        })
    })
    describe('email', () => {
        test('Gets employee email', () => {

            const email = "fake@email.com";

            expect(employee.email).toBe(email);
        })
    })
    
})