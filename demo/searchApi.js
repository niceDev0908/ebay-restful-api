const Ebay = require('../src/index');
const { clientId, clientSecret } = require('./credentials');
const makeString = require('make-string');

let ebay = new Ebay({
    clientID: clientId,
    clientSecret: clientSecret,
    body: {
        grant_type: 'client_credentials',
        scope: 'https://api.ebay.com/oauth/api_scope'

    }
});


// // //Search for Items by Keyword.
ebay.getAccessToken()
    .then((data) => {
        ebay.searchItems({
            keyword: 'drone',
            limit: '3'
        }).then((data) => {
            console.log(data);
            // Data is in format of JSON
            // To check the format of Data, Go to this url (https://developer.ebay.com/api-docs/buy/browse/resources/item_summary/methods/search#w4-w1-w4-SearchforItemsbyKeyword-0)
        })
    });


// // Search for Items by Category.
ebay.getAccessToken()
    .then((data) => {
        ebay.searchItems({
            categoryId: 2080,
            limit: '3'
        }).then((data) => {
            console.log(data);
            // Data is in format of JSON
            // To check the format of Data, Go to this url https://developer.ebay.com/api-docs/buy/browse/resources/item_summary/methods/search#w4-w1-w4-SearchforItemsbyCategory-1.
        })
    });



// // Retrieve the Item Aspects by Keyword Search.
ebay.getAccessToken()
    .then((data) => {
        ebay.searchItems({
            keyword: 'iphone',
            fieldgroups: 'ASPECT_REFINEMENTS'
        }).then((data) => {
            console.log(data);
            // Data is in format of JSON
            // To check the format of Data, Go to this url https://developer.ebay.com/api-docs/buy/browse/resources/item_summary/methods/search#w4-w1-w4-RetrievetheItemAspectsbyKeywordSearch-3.
        })
    });


// // Return Items with Free Shipping.
// // Pass params inside filter object to filter items.
ebay.getAccessToken()
    .then((data) => {
        ebay.searchItems({
            keyword: 'drone',
            limit: 3,
            filter: { maxDeliveryCost: 0 },
            aspect_filter: { categoryId: 179697, conditionDistributions: '{NEW}' } // docs to provide aspect_filter https://developer.ebay.com/api-docs/buy/browse/resources/item_summary/methods/search#h2-input
        }).then((data) => {
            console.log(data);
            // Data is in format of JSON
            // To check the format of Data, Go to this url https://developer.ebay.com/api-docs/buy/browse/resources/item_summary/methods/search#w4-w1-w4-ReturnItemswithFreeShipping-6.
        })
    });


// Return Items Based on Price and Condition.
ebay.getAccessToken()
    .then((data) => {
        ebay.searchItems({
            keyword: 'iphone',
            limit: 3,
            filter: { price: '[300..800]', priceCurrency: 'USD', conditions: 'NEW' }
        }).then((data) => {
            console.log(data);
            // Data is in format of JSON
            // To check the format of Data, Go to this url https://developer.ebay.com/api-docs/buy/browse/resources/item_summary/methods/search#w4-w1-w4-ReturnItemsBasedonPriceandCondition-7.
        })
    });


// // Search items by Image, this is in experimental mode.
// https://developer.ebay.com/api-docs/buy/browse/resources/search_by_image/methods/searchByImage
ebay.getAccessToken()
    .then((data) => {
        console.log
        ebay.searchByImage({
            imgPath: 'demo/shoe.jpg',
            limit: 3,
            sort: '-price' //  igmPath or base64Image
        }).then((data) => {
            console.log(data);
            //Data is in format of JSON
            // To check the format of Data, Go to this url (https://developer.ebay.com/api-docs/buy/browse/resources/item_summary/methods/search#w4-w1-w4-SearchforItemsbyKeyword-0)
        })
    });