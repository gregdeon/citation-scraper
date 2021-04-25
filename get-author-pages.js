// ==UserScript==
// @name         Google Scholar author scraper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Save links to Google Scholar author pages
// @author       You
// @match        https://scholar.google.ca/*
// @icon         https://www.google.com/s2/favicons?domain=google.ca
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // load URLs from localstorage; default to empty list if there are none
	let url_list = JSON.parse(window.localStorage.getItem('url_list'))
	if (url_list === null){
		url_list = []
	}
    console.log(url_list)

	// add all authors on this page and save
	let author_links = document.getElementsByClassName('gs_ai_name')
	Array.prototype.forEach.call(author_links, el => {
		let url = el.children[0].href
		url_list.push(url)
		console.log(url)
	})
	window.localStorage.setItem('url_list', JSON.stringify(url_list))
})();