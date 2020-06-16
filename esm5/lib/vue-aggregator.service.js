/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormatService } from '@xlayers/sketch-lib';
import { WebCodeGenService } from '@xlayers/web-codegen';
import * as i0 from "@angular/core";
import * as i1 from "@xlayers/sketch-lib";
import * as i2 from "@xlayers/web-codegen";
var VueAggregatorService = /** @class */ (function () {
    function VueAggregatorService(formatService, webCodeGenService) {
        this.formatService = formatService;
        this.webCodeGenService = webCodeGenService;
    }
    /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    VueAggregatorService.prototype.aggregate = /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        /** @type {?} */
        var fileName = this.formatService.normalizeName(current.name);
        /** @type {?} */
        var files = this.webCodeGenService.aggregate(current, data, options);
        /** @type {?} */
        var html = files.find((/**
         * @param {?} file
         * @return {?}
         */
        function (file) { return file.language === 'html'; }));
        /** @type {?} */
        var css = files.find((/**
         * @param {?} file
         * @return {?}
         */
        function (file) { return file.language === 'css'; }));
        return [
            {
                kind: 'vue',
                value: this.renderSpec(current, options),
                language: 'javascript',
                uri: options.componentDir + "/" + fileName + ".spec.js"
            },
            {
                kind: 'vue',
                value: this.renderComponent(current, html.value, css.value),
                language: 'html',
                uri: options.componentDir + "/" + fileName + ".vue"
            }
        ];
    };
    /**
     * @private
     * @param {?} current
     * @param {?} html
     * @param {?} css
     * @return {?}
     */
    VueAggregatorService.prototype.renderComponent = /**
     * @private
     * @param {?} current
     * @param {?} html
     * @param {?} css
     * @return {?}
     */
    function (current, html, css) {
        return "<template>\n" + html + "\n</template>\n\n<script>\n" + this.renderScript(current) + "\n</script>\n\n<style>\n" + css + "\n</style>";
    };
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    VueAggregatorService.prototype.renderScript = /**
     * @private
     * @param {?} current
     * @return {?}
     */
    function (current) {
        var _this = this;
        /** @type {?} */
        var importStatements = this.renderImportStatements(current);
        if (importStatements.length > 0) {
            /** @type {?} */
            var importDeclarations = this.generateVueImportDeclaration(current)
                .map((/**
             * @param {?} declaration
             * @return {?}
             */
            function (declaration) { return _this.formatService.indent(2, declaration); }))
                .join('\n');
            return importStatements + "\n\nexport default {\n  components: {\n" + importDeclarations + "\n  }\n}";
        }
        return 'export default {}';
    };
    /**
     * @private
     * @param {?} current
     * @param {?} options
     * @return {?}
     */
    VueAggregatorService.prototype.renderSpec = /**
     * @private
     * @param {?} current
     * @param {?} options
     * @return {?}
     */
    function (current, options) {
        /** @type {?} */
        var className = this.formatService.className(current.name);
        /** @type {?} */
        var fileName = this.formatService.className(current.name);
        return "import { shallowMount } from \"@vue/test-utils\";\nimport " + className + " from \"./" + options.componentDir + "/" + fileName + "\";\n\ndescribe(\"" + className + "\", () => {\n  it(\"render\", () => {\n    const wrapper = shallowMount(" + className + ", {});\n    expect(wrapper.isVueInstance()).toBeTruthy();\n  });\n});\n];";
    };
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    VueAggregatorService.prototype.renderImportStatements = /**
     * @private
     * @param {?} current
     * @return {?}
     */
    function (current) {
        return tslib_1.__spread([
            'import { Component } from \'@stencil/core\';'
        ], this.generateDynamicImport(current)).join('\n');
    };
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    VueAggregatorService.prototype.generateDynamicImport = /**
     * @private
     * @param {?} current
     * @return {?}
     */
    function (current) {
        var _this = this;
        /** @type {?} */
        var context = this.webCodeGenService.context(current);
        return context && context.components
            ? context.components.map((/**
             * @param {?} component
             * @return {?}
             */
            function (component) {
                /** @type {?} */
                var importclassName = _this.formatService.className(component);
                /** @type {?} */
                var importFileName = _this.formatService.normalizeName(component);
                return "import { " + importclassName + " } from \"./" + importFileName + "\"; ";
            }))
            : [];
    };
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    VueAggregatorService.prototype.generateVueImportDeclaration = /**
     * @private
     * @param {?} current
     * @return {?}
     */
    function (current) {
        var _this = this;
        /** @type {?} */
        var context = this.webCodeGenService.context(current);
        return context && context.components
            ? context.components.map((/**
             * @param {?} component
             * @return {?}
             */
            function (component) {
                return _this.formatService.className(component);
            }))
            : [];
    };
    VueAggregatorService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    VueAggregatorService.ctorParameters = function () { return [
        { type: FormatService },
        { type: WebCodeGenService }
    ]; };
    /** @nocollapse */ VueAggregatorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function VueAggregatorService_Factory() { return new VueAggregatorService(i0.ɵɵinject(i1.FormatService), i0.ɵɵinject(i2.WebCodeGenService)); }, token: VueAggregatorService, providedIn: "root" });
    return VueAggregatorService;
}());
export { VueAggregatorService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    VueAggregatorService.prototype.formatService;
    /**
     * @type {?}
     * @private
     */
    VueAggregatorService.prototype.webCodeGenService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLWFnZ3JlZ2F0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4bGF5ZXJzL3Z1ZS1jb2RlZ2VuLyIsInNvdXJjZXMiOlsibGliL3Z1ZS1hZ2dyZWdhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUl6RDtJQUlFLDhCQUNtQixhQUE0QixFQUM1QixpQkFBb0M7UUFEcEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUNwRCxDQUFDOzs7Ozs7O0lBRUosd0NBQVM7Ozs7OztJQUFULFVBQ0UsT0FBc0IsRUFDdEIsSUFBa0IsRUFDbEIsT0FBMEI7O1lBRXBCLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDOztZQUN6RCxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQzs7WUFDaEUsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsUUFBUSxLQUFLLE1BQU0sRUFBeEIsQ0FBd0IsRUFBQzs7WUFDbkQsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUssRUFBdkIsQ0FBdUIsRUFBQztRQUV2RCxPQUFPO1lBQ0w7Z0JBQ0UsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLE9BQU8s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dkQsT0FBTyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQVU7WUFDbEMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsU0FBUztnQkFDOUIsT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7WUFBdkMsQ0FBdUMsRUFDeEM7WUFDSCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7Z0JBL0dGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUFEsYUFBYTtnQkFDYixpQkFBaUI7OzsrQkFGMUI7Q0FzSEMsQUFoSEQsSUFnSEM7U0E3R1ksb0JBQW9COzs7Ozs7SUFFN0IsNkNBQTZDOzs7OztJQUM3QyxpREFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1hdFNlcnZpY2UgfSBmcm9tICdAeGxheWVycy9za2V0Y2gtbGliJztcclxuaW1wb3J0IHsgV2ViQ29kZUdlblNlcnZpY2UgfSBmcm9tICdAeGxheWVycy93ZWItY29kZWdlbic7XHJcblxyXG50eXBlIFdlYkNvZGVHZW5PcHRpb25zID0gYW55O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVnVlQWdncmVnYXRvclNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBmb3JtYXRTZXJ2aWNlOiBGb3JtYXRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSB3ZWJDb2RlR2VuU2VydmljZTogV2ViQ29kZUdlblNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIGFnZ3JlZ2F0ZShcclxuICAgIGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIsXHJcbiAgICBkYXRhOiBTa2V0Y2hNU0RhdGEsXHJcbiAgICBvcHRpb25zOiBXZWJDb2RlR2VuT3B0aW9uc1xyXG4gICkge1xyXG4gICAgY29uc3QgZmlsZU5hbWUgPSB0aGlzLmZvcm1hdFNlcnZpY2Uubm9ybWFsaXplTmFtZShjdXJyZW50Lm5hbWUpO1xyXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLndlYkNvZGVHZW5TZXJ2aWNlLmFnZ3JlZ2F0ZShjdXJyZW50LCBkYXRhLCBvcHRpb25zKTtcclxuICAgIGNvbnN0IGh0bWwgPSBmaWxlcy5maW5kKGZpbGUgPT4gZmlsZS5sYW5ndWFnZSA9PT0gJ2h0bWwnKTtcclxuICAgIGNvbnN0IGNzcyA9IGZpbGVzLmZpbmQoZmlsZSA9PiBmaWxlLmxhbmd1YWdlID09PSAnY3NzJyk7XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAge1xyXG4gICAgICAgIGtpbmQ6ICd2dWUnLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlclNwZWMoY3VycmVudCwgb3B0aW9ucyksXHJcbiAgICAgICAgbGFuZ3VhZ2U6ICdqYXZhc2NyaXB0JyxcclxuICAgICAgICB1cmk6IGAke29wdGlvbnMuY29tcG9uZW50RGlyfS8ke2ZpbGVOYW1lfS5zcGVjLmpzYFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAga2luZDogJ3Z1ZScsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyQ29tcG9uZW50KGN1cnJlbnQsIGh0bWwudmFsdWUsIGNzcy52YWx1ZSksXHJcbiAgICAgICAgbGFuZ3VhZ2U6ICdodG1sJyxcclxuICAgICAgICB1cmk6IGAke29wdGlvbnMuY29tcG9uZW50RGlyfS8ke2ZpbGVOYW1lfS52dWVgXHJcbiAgICAgIH1cclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlckNvbXBvbmVudChjdXJyZW50OiBTa2V0Y2hNU0xheWVyLCBodG1sOiBzdHJpbmcsIGNzczogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gYFxcXHJcbjx0ZW1wbGF0ZT5cclxuJHtodG1sfVxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuJHt0aGlzLnJlbmRlclNjcmlwdChjdXJyZW50KX1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiR7Y3NzfVxyXG48L3N0eWxlPmA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlclNjcmlwdChjdXJyZW50OiBTa2V0Y2hNU0xheWVyKSB7XHJcbiAgICBjb25zdCBpbXBvcnRTdGF0ZW1lbnRzID0gdGhpcy5yZW5kZXJJbXBvcnRTdGF0ZW1lbnRzKGN1cnJlbnQpO1xyXG4gICAgaWYgKGltcG9ydFN0YXRlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBpbXBvcnREZWNsYXJhdGlvbnMgPSB0aGlzLmdlbmVyYXRlVnVlSW1wb3J0RGVjbGFyYXRpb24oY3VycmVudClcclxuICAgICAgICAubWFwKGRlY2xhcmF0aW9uID0+IHRoaXMuZm9ybWF0U2VydmljZS5pbmRlbnQoMiwgZGVjbGFyYXRpb24pKVxyXG4gICAgICAgIC5qb2luKCdcXG4nKTtcclxuICAgICAgcmV0dXJuIGBcXFxyXG4ke2ltcG9ydFN0YXRlbWVudHN9XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY29tcG9uZW50czoge1xyXG4ke2ltcG9ydERlY2xhcmF0aW9uc31cclxuICB9XHJcbn1gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAnZXhwb3J0IGRlZmF1bHQge30nO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJTcGVjKGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIsIG9wdGlvbnM6IFdlYkNvZGVHZW5PcHRpb25zKSB7XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmZvcm1hdFNlcnZpY2UuY2xhc3NOYW1lKGN1cnJlbnQubmFtZSk7XHJcbiAgICBjb25zdCBmaWxlTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5jbGFzc05hbWUoY3VycmVudC5uYW1lKTtcclxuXHJcbiAgICByZXR1cm4gYFxcXHJcbmltcG9ydCB7IHNoYWxsb3dNb3VudCB9IGZyb20gXCJAdnVlL3Rlc3QtdXRpbHNcIjtcclxuaW1wb3J0ICR7Y2xhc3NOYW1lfSBmcm9tIFwiLi8ke29wdGlvbnMuY29tcG9uZW50RGlyfS8ke2ZpbGVOYW1lfVwiO1xyXG5cclxuZGVzY3JpYmUoXCIke2NsYXNzTmFtZX1cIiwgKCkgPT4ge1xyXG4gIGl0KFwicmVuZGVyXCIsICgpID0+IHtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBzaGFsbG93TW91bnQoJHtjbGFzc05hbWV9LCB7fSk7XHJcbiAgICBleHBlY3Qod3JhcHBlci5pc1Z1ZUluc3RhbmNlKCkpLnRvQmVUcnV0aHkoKTtcclxuICB9KTtcclxufSk7XHJcbl07YDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVySW1wb3J0U3RhdGVtZW50cyhjdXJyZW50OiBTa2V0Y2hNU0xheWVyKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAnaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcXCdAc3RlbmNpbC9jb3JlXFwnOycsXHJcbiAgICAgIC4uLnRoaXMuZ2VuZXJhdGVEeW5hbWljSW1wb3J0KGN1cnJlbnQpXHJcbiAgICBdLmpvaW4oJ1xcbicpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZUR5bmFtaWNJbXBvcnQoY3VycmVudDogU2tldGNoTVNMYXllcikge1xyXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMud2ViQ29kZUdlblNlcnZpY2UuY29udGV4dChjdXJyZW50KTtcclxuICAgIHJldHVybiBjb250ZXh0ICYmIGNvbnRleHQuY29tcG9uZW50c1xyXG4gICAgICA/IGNvbnRleHQuY29tcG9uZW50cy5tYXAoY29tcG9uZW50ID0+IHtcclxuICAgICAgICAgIGNvbnN0IGltcG9ydGNsYXNzTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5jbGFzc05hbWUoY29tcG9uZW50KTtcclxuICAgICAgICAgIGNvbnN0IGltcG9ydEZpbGVOYW1lID0gdGhpcy5mb3JtYXRTZXJ2aWNlLm5vcm1hbGl6ZU5hbWUoY29tcG9uZW50KTtcclxuICAgICAgICAgIHJldHVybiBgaW1wb3J0IHsgJHtpbXBvcnRjbGFzc05hbWV9IH0gZnJvbSBcIi4vJHtpbXBvcnRGaWxlTmFtZX1cIjsgYDtcclxuICAgICAgICB9KVxyXG4gICAgICA6IFtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZVZ1ZUltcG9ydERlY2xhcmF0aW9uKGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIpIHtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLndlYkNvZGVHZW5TZXJ2aWNlLmNvbnRleHQoY3VycmVudCk7XHJcbiAgICByZXR1cm4gY29udGV4dCAmJiBjb250ZXh0LmNvbXBvbmVudHNcclxuICAgICAgPyBjb250ZXh0LmNvbXBvbmVudHMubWFwKGNvbXBvbmVudCA9PlxyXG4gICAgICAgICAgdGhpcy5mb3JtYXRTZXJ2aWNlLmNsYXNzTmFtZShjb21wb25lbnQpXHJcbiAgICAgICAgKVxyXG4gICAgICA6IFtdO1xyXG4gIH1cclxufVxyXG4iXX0=