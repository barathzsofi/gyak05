'use strict'

const Database = use('Database');

class RecipeController {
     * index (request, response) {
        const categories = yield Database.from('categories').select('*');
        console.log(categories);
        yield response.sendView('main',{
            name: 'Adonis', // njkba{{ name }}
            categories: categories
        });
    }
}

module.exports = RecipeController
