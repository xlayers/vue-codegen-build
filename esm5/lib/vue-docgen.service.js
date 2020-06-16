/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var VueDocGenService = /** @class */ (function () {
    function VueDocGenService() {
    }
    /**
     * @param {?} data
     * @return {?}
     */
    VueDocGenService.prototype.aggregate = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return [
            {
                uri: 'README.md',
                value: this.renderReadme(data.meta.app),
                language: 'markdown',
                kind: 'text'
            }
        ];
    };
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    VueDocGenService.prototype.renderReadme = /**
     * @private
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return "## How to use the " + name + " Vue module\n\n1. Download and extract the exported module into your workspace,\n\n2. Import the component into your App component or other container.\n```\n<template>\n  <div id=\"app\">\n    <MyComponent />\n  </div>\n</template>\n\n<script>\nimport MyComponent from './components/MyComponent.vue'\n\nexport default {\n  name: 'app  components: {\n    MyComponent\n  }\n}\n</script>\n```\n\n3. Enjoy.";
    };
    VueDocGenService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ VueDocGenService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function VueDocGenService_Factory() { return new VueDocGenService(); }, token: VueDocGenService, providedIn: "root" });
    return VueDocGenService;
}());
export { VueDocGenService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLWRvY2dlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhsYXllcnMvdnVlLWNvZGVnZW4vIiwic291cmNlcyI6WyJsaWIvdnVlLWRvY2dlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQztJQUFBO0tBMkNDOzs7OztJQXZDQyxvQ0FBUzs7OztJQUFULFVBQVUsSUFBa0I7UUFDMUIsT0FBTztZQUNMO2dCQUNFLEdBQUcsRUFBRSxXQUFXO2dCQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDdkMsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLElBQUksRUFBRSxNQUFNO2FBQ2I7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sdUNBQVk7Ozs7O0lBQXBCLFVBQXFCLElBQVk7UUFDL0IsT0FBTyx1QkFDUyxJQUFJLHVaQXdCZCxDQUFDO0lBQ1QsQ0FBQzs7Z0JBMUNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzsyQkFKRDtDQTZDQyxBQTNDRCxJQTJDQztTQXhDWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWdWVEb2NHZW5TZXJ2aWNlIHtcclxuICBhZ2dyZWdhdGUoZGF0YTogU2tldGNoTVNEYXRhKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgdXJpOiAnUkVBRE1FLm1kJyxcclxuICAgICAgICB2YWx1ZTogdGhpcy5yZW5kZXJSZWFkbWUoZGF0YS5tZXRhLmFwcCksXHJcbiAgICAgICAgbGFuZ3VhZ2U6ICdtYXJrZG93bicsXHJcbiAgICAgICAga2luZDogJ3RleHQnXHJcbiAgICAgIH1cclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlclJlYWRtZShuYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBgXFxcclxuIyMgSG93IHRvIHVzZSB0aGUgJHtuYW1lfSBWdWUgbW9kdWxlXHJcblxyXG4xLiBEb3dubG9hZCBhbmQgZXh0cmFjdCB0aGUgZXhwb3J0ZWQgbW9kdWxlIGludG8geW91ciB3b3Jrc3BhY2UsXHJcblxyXG4yLiBJbXBvcnQgdGhlIGNvbXBvbmVudCBpbnRvIHlvdXIgQXBwIGNvbXBvbmVudCBvciBvdGhlciBjb250YWluZXIuXHJcblxcYFxcYFxcYFxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdiBpZD1cImFwcFwiPlxyXG4gICAgPE15Q29tcG9uZW50IC8+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgTXlDb21wb25lbnQgZnJvbSBcXCcuL2NvbXBvbmVudHMvTXlDb21wb25lbnQudnVlXFwnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXFwnYXBwXFxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBNeUNvbXBvbmVudFxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXFxgXFxgXFxgXHJcblxyXG4zLiBFbmpveS5gO1xyXG4gIH1cclxufVxyXG4iXX0=