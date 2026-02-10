sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();

            Then.onTheBooksList.iSeeThisPage();
            Then.onTheBooksList.onFilterBar().iCheckFilterField("{i18n>ID}");
            Then.onTheBooksList.onFilterBar().iCheckFilterField("{i18n>Author}");
            Then.onTheBooksList.onFilterBar().iCheckFilterField("{i18n>Price}");
            Then.onTheBooksList.onFilterBar().iCheckFilterField("{i18n>Currency}");
            Then.onTheBooksList.onTable().iCheckColumns(6, {"ID":{"header":"{i18n>Title}"},"author/ID":{"header":"{i18n>Author}"},"genre/name":{"header":"{i18n>Genre}"},"stock":{"header":"{i18n>Stock}"},"price":{"header":"{i18n>Price}"},"currency/symbol":{"header":"{i18n>Currency}"}});

        });


        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            // Note: this test will fail if the ListReport page doesn't show any data
            
            When.onTheBooksList.onFilterBar().iExecuteSearch();
            
            Then.onTheBooksList.onTable().iCheckRows();

            When.onTheBooksList.onTable().iPressRow(0);
            Then.onTheBooksObjectPage.iSeeThisPage();

        });

        opaTest("Teardown", function (Given, When, Then) { 
            // Cleanup
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});