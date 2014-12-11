/**
*   Main Configuration
*/

'use strict';

require.config({
    baseUrl: './scripts',
});

require(['app'], function (app) {
    $(document)
        // Send authorization header on each AJAX request
        .ajaxSend(function(event, request) {
            var token = app.account.getToken();
            if (token) {
                request.setRequestHeader('authorization', 'Bearer ' + token);
            }
        })
        .ready(function () {
            // Enable pushState for compatible browsers
            var enablePushState = true;

            // Detect is pushState is available
            var pushState = !!(enablePushState && window.history && window.history.pushState);

            // Use GET and POST to support all browsers
            // Also adds '_method' parameter with correct HTTP headers
            Backbone.emulateHTTP = true;

            // Create cleanup logic for Backbone views
            Backbone.View.prototype.close = function() {
                this.remove();
                this.unbind();
                // Allows user to create OnClose callback within view
                // Should be used to cleanup bind', and 'on' events
                if (this.onClose) {
                    this.onClose();
                }
            };

            // Create subview logic for Backbone views
            // Allows the ability to attach views as subviews
            Backbone.View.prototype.assign = function(selector, view) {
                var selectors;
                if (_.isObject(selector)) {
                    selectors = selector;
                } else {
                    selectors = {};
                    selectors[selector] = view;
                }
                if (!selectors) {return;}
                _.each(selectors, function(view, selector) {
                    view.setElement(this.$(selector)).render();
                }, this);
            };

            // Start Application
            app.init();

            // Set up global click event handler to use pushState for links
            // use 'data-bypass' attribute on anchors to allow normal link behavior
            $(this).on('click', 'a:not([data-bypass])', function(event) {

                var href = $(this).attr('href');
                var protocol = this.protocol + '//';

                if (href.slice(protocol.length) !== protocol) {
                    event.preventDefault();
                    app.router.navigate(href, true);
                }

            });
        });
});