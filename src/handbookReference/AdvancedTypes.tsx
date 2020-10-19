interface Fish {
    name: string;
    swim: () => void;
}

interface Bird {
    name: string;
    fly: () => void;
}

// User-Defined Type Guards
// A type guard is some expression that performs a
// runtime check that guarantees the type in some scope.
function isFish(pet: Fish | Bird): pet is Fish {
    // return 'swim' in pet !== undefined;
    return (pet as Fish).swim !== undefined;
}


// Type Guards and Differentiating Types
// just check the presence of a member

function getPet(pet: Fish | Bird) {
    // not pet.fly
    if ('fly' in pet) {
        console.log('I can fly!')
    }

    return pet.name
}

getPet({
    name: 'test',
    fly: () => {}
})

// User-Defined Type Guards