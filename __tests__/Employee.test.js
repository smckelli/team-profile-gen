
const Employee = require("../lib/Employee");
const employee = new Employee();

describe('Employee', () => {
    describe('name', () => {
        test('Gets employee name', () => {
            // Arrange
            const name = 'Dave'

            expect(employee.name).toBe(name)
        })
    })
})