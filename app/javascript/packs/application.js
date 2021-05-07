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

const Trix = require("trix")
require("@rails/actiontext")

Trix.config.blockAttributes.heading1.tagName = "h2"

import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/zenburn.css';

import ruby from 'highlight.js/lib/languages/ruby'
import erb from 'highlight.js/lib/languages/erb'
import bash from 'highlight.js/lib/languages/bash'
import javascript from 'highlight.js/lib/languages/javascript'

hljs.registerLanguage('ruby', ruby);
hljs.registerLanguage('erb', erb);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('javascript', javascript);

import Sortable from 'sortablejs';

document.addEventListener('turbolinks:load', () => {
  document.querySelectorAll('pre').forEach(elm => hljs.highlightElement(elm))

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

