
const Engineer = require("../lib/Engineer");
const engineer = new Engineer();

describe('Engineer', () => {
    describe('github', () => {
        test('Gets Github username', () => {

            const gitName = 'GitUser';

            expect(engineer.github).toBe(gitName)
        })
    })
})