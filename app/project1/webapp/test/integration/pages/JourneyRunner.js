sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"myspace/project1/test/integration/pages/BooksList",
	"myspace/project1/test/integration/pages/BooksObjectPage"
], function (JourneyRunner, BooksList, BooksObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('myspace/project1') + '/test/flpSandbox.html#myspaceproject1-tile',
        pages: {
			onTheBooksList: BooksList,
			onTheBooksObjectPage: BooksObjectPage
        },
        async: true
    });

    return runner;
});

