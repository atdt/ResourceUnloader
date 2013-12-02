'use strict';

var moduleBlacklist = [
    'ext\.',
    'jquery\.',
    'mediawiki\.hidpi',
    'mediawiki\.searchSuggest',
    'mw\.',
    'skins\.vector',
    'wikibase',
];

var pattern = {
    from : '^(.*)(' + moduleBlacklist.join('|') + ')([^&%].*)',
    to   : "$1$3"
};

var rule = {
    conditions: [
         new chrome.declarativeWebRequest.RequestMatcher({
            url: { hostSuffix: 'bits.wikimedia.org' }
         })
    ],
    actions: [
        new chrome.declarativeWebRequest.RedirectByRegEx(pattern)
    ]
};

chrome.declarativeWebRequest.onRequest.addRules([rule]);
