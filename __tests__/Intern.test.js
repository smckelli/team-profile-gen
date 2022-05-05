
const Intern = require("../lib/Intern");
const intern = new Intern();

describe('Intern', () => {
    describe('school', () => {
        test("Gets intern's college", () => {

            const school = 'University';

            expect(intern.school).toBe(school)
        })
    })
})