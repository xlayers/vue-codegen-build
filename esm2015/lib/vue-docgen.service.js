/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class VueDocGenService {
    /**
     * @param {?} data
     * @return {?}
     */
    aggregate(data) {
        return [
            {
                uri: 'README.md',
                value: this.renderReadme(data.meta.app),
                language: 'markdown',
                kind: 'text'
            }
        ];
    }
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    renderReadme(name) {
        return `\
## How to use the ${name} Vue module

1. Download and extract the exported module into your workspace,

2. Import the component into your App component or other container.
\`\`\`
<template>
  <div id="app">
    <MyComponent />
  </div>
</template>

<script>
import MyComponent from \'./components/MyComponent.vue\'

export default {
  name: \'app\
  components: {
    MyComponent
  }
}
</script>
\`\`\`

3. Enjoy.`;
    }
}
VueDocGenService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ VueDocGenService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function VueDocGenService_Factory() { return new VueDocGenService(); }, token: VueDocGenService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLWRvY2dlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhsYXllcnMvdnVlLWNvZGVnZW4vIiwic291cmNlcyI6WyJsaWIvdnVlLWRvY2dlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQUMzQixTQUFTLENBQUMsSUFBa0I7UUFDMUIsT0FBTztZQUNMO2dCQUNFLEdBQUcsRUFBRSxXQUFXO2dCQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDdkMsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLElBQUksRUFBRSxNQUFNO2FBQ2I7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLElBQVk7UUFDL0IsT0FBTztvQkFDUyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUF3QmQsQ0FBQztJQUNULENBQUM7OztZQTFDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWdWVEb2NHZW5TZXJ2aWNlIHtcclxuICBhZ2dyZWdhdGUoZGF0YTogU2tldGNoTVNEYXRhKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgdXJpOiAnUkVBRE1FLm1kJyxcclxuICAgICAgICB2YWx1ZTogdGhpcy5yZW5kZXJSZWFkbWUoZGF0YS5tZXRhLmFwcCksXHJcbiAgICAgICAgbGFuZ3VhZ2U6ICdtYXJrZG93bicsXHJcbiAgICAgICAga2luZDogJ3RleHQnXHJcbiAgICAgIH1cclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlclJlYWRtZShuYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBgXFxcclxuIyMgSG93IHRvIHVzZSB0aGUgJHtuYW1lfSBWdWUgbW9kdWxlXHJcblxyXG4xLiBEb3dubG9hZCBhbmQgZXh0cmFjdCB0aGUgZXhwb3J0ZWQgbW9kdWxlIGludG8geW91ciB3b3Jrc3BhY2UsXHJcblxyXG4yLiBJbXBvcnQgdGhlIGNvbXBvbmVudCBpbnRvIHlvdXIgQXBwIGNvbXBvbmVudCBvciBvdGhlciBjb250YWluZXIuXHJcblxcYFxcYFxcYFxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdiBpZD1cImFwcFwiPlxyXG4gICAgPE15Q29tcG9uZW50IC8+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgTXlDb21wb25lbnQgZnJvbSBcXCcuL2NvbXBvbmVudHMvTXlDb21wb25lbnQudnVlXFwnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXFwnYXBwXFxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBNeUNvbXBvbmVudFxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXFxgXFxgXFxgXHJcblxyXG4zLiBFbmpveS5gO1xyXG4gIH1cclxufVxyXG4iXX0=