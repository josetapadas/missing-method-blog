// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import "stylesheets/application"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

require("trix")
require("@rails/actiontext")

import Sortable from 'sortablejs';

document.addEventListener('turbolinks:load', () => {
  document.addEventListener('click', event => {
    let element = event.target.closest('.element-content')
    if (!element) return
    
    element.classList.add('hidden')
    element.nextElementSibling.classList.remove('hidden')
  });

  document.addEventListener('click', event => {
    if (!event.target.matches('.cancel')) return
    event.preventDefault()

    let element = event.target.closest('.element-form')
    
    element.classList.add('hidden')
    element.previousElementSibling.classList.remove('hidden')
  });

  let elements = document.getElementById('elements')
  Sortable.create(elements, { animation: 150 })
});

import "controllers"
