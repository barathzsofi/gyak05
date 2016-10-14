'use strict'

const Schema = use('Schema')

class RecipesTableSchema extends Schema {

  up () {
    this.create('recipes', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('ingredients').notNullable()
      table.string('instructions').notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('category_id').unsigned().references('id').inTable('categories')
      table.timestamps()
    })
  }

  down () {
    this.drop('recipes')
  }

}

module.exports = RecipesTableSchema
