/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    let object = {
        toBe: (secondVal) => {
            if(val === secondVal) return true;
            else throw new Error("Not Equal");
        },
        notToBe: (secondVal) => {
            if(val !== secondVal) return true;
            else throw new Error("Equal")
        }
    }
    return object
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */