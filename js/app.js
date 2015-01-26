/**
 * This was an assignment done for Thinkful Front-end Dev Bootcamp.
 * Concepts used: Functions, Arrays, jQuery DOM Manipulation, AJAX, JSON, API
 *
 * This uses Google Books API.
 */
 $(document).ready(function () {
 	$("#search").submit(function (event) {
 		event.preventDefault();
 		getResults();
 	});

 	/**
 	 * Get results from search api and show in the dom.
 	 */
 	function getResults() {
 		var searchTerm = $("#query").val();
 		$("#results").html("");
 		if (/\S/.test(searchTerm)) {
 			var data = getData();
 			$.each(data.items, function (index, book) {
 				showBook(book);
 			});
 		}
 	}

 	/**
 	 * Displays one book in the UI.
 	 */
 	function showBook(book) {
 		var html = "<li>";
 		html += getSpan("name", book.volumeInfo.title);
 		html += getSpan("sub-title", book.volumeInfo.subtitle);
 		html += getImg(book.volumeInfo.imageLinks.thumbnail, book.volumeInfo.title);
 		html += getSpan("pages", "Pages: " + book.volumeInfo.pageCount);
 		html += getLink("info-link", book.volumeInfo.infoLink, "See on Google")
 		html += getLink("preview-link", book.volumeInfo.previewLink, "Preview on Google")
 		html += "</li>";
 		$("#results").append(html);	
 	}

 	/**
 	 * Helper to return html for a span with given class and text
 	 */
 	function getSpan(klass, text) {
 		if (typeof text != "undefined") {
 			console.log(text);
 			return "<span class='" + klass + "'>" + text + "</span>";
 		} else{
 			return "";
 		}
 	}

 	/**
 	 * Helper to return html for an image
 	 */
 	function getImg(src, alt) {
 		return "<img src='" + src + "' alt='" + alt + "'/>" 
 	}

 	/**
 	 * Helper to return html for a link with given class, hyprelink and text.
 	 */
 	function getLink(klass, href, text) {
 		return "<a class='" + klass + "'' href='" + href + "'>" + text + "</a>";
 	}

 	/**
 	 * Makes an ajax call to the server and returns the JSON object.
 	 */
 	function getData() {
 		// We will add AJAX call in the next iteration of the app.
 		return books;
 	}

 	getResults();
});