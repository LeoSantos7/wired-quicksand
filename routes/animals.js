const Router = require('express').Router;

const router = Router();

let animals = [
    {
        name: 'mufasa',
        kind: 'lion',
        child: [
            {
                name: 'simba',
                kind: 'cub',
                sound: 'rawrr',
            }
        ],
        sound: 'RAAAAWWWRRR!',
    },
    {
        name: 'rufus',
        kind: 'dog',
        children: [
            {
                name: 'rover',
                kind: 'puppy',
                sound: 'woof',
            }
        ],
        sound: 'RUFFF!',
    }
];

router.get('/', (request, response) => {

    response.send(animals);

});

router.get('/:name', (request, response) => {

    response.send(animals.find((animal) => animal.name === request.params.name));

});

router.post('/', (request, response) => {
    
    if(animals.find((animal) => animal.name === request.body.name) !== undefined) {
        response.send(400)
        return;
    }

    animals.push(Object.assign({}, request.body, {
        name: request.params.animal,
    }));

});

router.put('/:name', (request, response) => {
    
    if(animals.find((animal) => animal.name === request.params.name) !== undefined) {
        response.send(400)
        return;
    }

    animals.push(Object.assign({}, request.body, {
        name: request.params.animal,
    }));

});

router.get('/:name/children', (request, response) => {
    
    const animal = animals.find((animal) => animal.name === request.params.name);
    
    if(!animal) {
        response.send(404);
        return;
    }

    response.send(animal.children);
});

router.get('/:name/children/:childName', (request, response) => {

    const animal = animals.find((animal) => animal.name === request.params.name);

    if(!animal) {
        response.send(404);
        return;
    }

    const children = animal.children.filter((child) => child.name === request.params.childName);
    
    if(children.length === 0) {
        response.send(404);
        return;
    }

    response.send(children);

});

// Implement the next two

router.post('/:animal/children', (request, response) => {

});

router.put('/:animal/children/:child', (request, response) => {

});

module.exports = router;