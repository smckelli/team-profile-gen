
const Manager = require("../lib/Manager");
const manager = new Manager();

describe('Manager', () => {
    describe('office', () => {
        test("Gets Manager's office", () => {

            const office = '302';

            expect(manager.office).toBe(office)
        })
    })
})