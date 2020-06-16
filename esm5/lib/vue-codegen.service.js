/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ImageService, SymbolService, LayerService } from '@xlayers/sketch-lib';
import { WebCodeGenService } from '@xlayers/web-codegen';
import { VueAggregatorService } from './vue-aggregator.service';
import * as i0 from "@angular/core";
import * as i1 from "@xlayers/sketch-lib";
import * as i2 from "@xlayers/web-codegen";
import * as i3 from "./vue-aggregator.service";
var VueCodeGenService = /** @class */ (function () {
    function VueCodeGenService(symbolService, imageService, webCodeGen, angularAggretatorService, layerService) {
        this.symbolService = symbolService;
        this.imageService = imageService;
        this.webCodeGen = webCodeGen;
        this.angularAggretatorService = angularAggretatorService;
        this.layerService = layerService;
    }
    /**
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    VueCodeGenService.prototype.compute = /**
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    function (current, data, options) {
        this.webCodeGen.compute(current, data, this.compileOptions(options));
    };
    /**
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    VueCodeGenService.prototype.aggregate = /**
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    function (data, options) {
        var _this = this;
        return data.pages.flatMap((/**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            return _this.visit(page, data, _this.compileOptions(options));
        }));
    };
    /**
     * @param {?} current
     * @return {?}
     */
    VueCodeGenService.prototype.identify = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        return this.webCodeGen.identify(current);
    };
    /**
     * @param {?} current
     * @return {?}
     */
    VueCodeGenService.prototype.context = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        return this.webCodeGen.context(current);
    };
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    VueCodeGenService.prototype.visit = /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    function (current, data, options) {
        return this.visitContent(current, data, options).concat(this.angularAggretatorService.aggregate(current, data, options));
    };
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    VueCodeGenService.prototype.visitContent = /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        if (this.layerService.identify(current)) {
            return this.visitLayer(current, data, options);
        }
        else if (this.symbolService.identify(current)) {
            return this.visitSymbolMaster(current, data, options);
        }
        else if (this.imageService.identify(current)) {
            return this.imageService.aggregate(current, data, options);
        }
        return [];
    };
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    VueCodeGenService.prototype.visitLayer = /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        var _this = this;
        return this.layerService
            .lookup(current)
            .flatMap((/**
         * @param {?} layer
         * @return {?}
         */
        function (layer) { return _this.visitContent(layer, data, options); }));
    };
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    VueCodeGenService.prototype.visitSymbolMaster = /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        /** @type {?} */
        var symbolMaster = this.symbolService.lookup(current, data);
        if (symbolMaster) {
            return this.visit(symbolMaster, data, options);
        }
        return [];
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    VueCodeGenService.prototype.compileOptions = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return tslib_1.__assign({ textTagName: 'span', bitmapTagName: 'img', blockTagName: 'div', xmlPrefix: 'xly-', cssPrefix: 'xly_', componentDir: 'components', assetDir: 'assets' }, options);
    };
    VueCodeGenService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    VueCodeGenService.ctorParameters = function () { return [
        { type: SymbolService },
        { type: ImageService },
        { type: WebCodeGenService },
        { type: VueAggregatorService },
        { type: LayerService }
    ]; };
    /** @nocollapse */ VueCodeGenService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function VueCodeGenService_Factory() { return new VueCodeGenService(i0.ɵɵinject(i1.SymbolService), i0.ɵɵinject(i1.ImageService), i0.ɵɵinject(i2.WebCodeGenService), i0.ɵɵinject(i3.VueAggregatorService), i0.ɵɵinject(i1.LayerService)); }, token: VueCodeGenService, providedIn: "root" });
    return VueCodeGenService;
}());
export { VueCodeGenService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    VueCodeGenService.prototype.symbolService;
    /**
     * @type {?}
     * @private
     */
    VueCodeGenService.prototype.imageService;
    /**
     * @type {?}
     * @private
     */
    VueCodeGenService.prototype.webCodeGen;
    /**
     * @type {?}
     * @private
     */
    VueCodeGenService.prototype.angularAggretatorService;
    /**
     * @type {?}
     * @private
     */
    VueCodeGenService.prototype.layerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLWNvZGVnZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4bGF5ZXJzL3Z1ZS1jb2RlZ2VuLyIsInNvdXJjZXMiOlsibGliL3Z1ZS1jb2RlZ2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQUloRTtJQUlFLDJCQUNtQixhQUE0QixFQUM1QixZQUEwQixFQUMxQixVQUE2QixFQUM3Qix3QkFBOEMsRUFDOUMsWUFBMEI7UUFKMUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDN0IsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUFzQjtRQUM5QyxpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUMxQyxDQUFDOzs7Ozs7O0lBRUosbUNBQU87Ozs7OztJQUFQLFVBQ0UsT0FBc0IsRUFDdEIsSUFBa0IsRUFDbEIsT0FBMkI7UUFFM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Ozs7O0lBRUQscUNBQVM7Ozs7O0lBQVQsVUFBVSxJQUFrQixFQUFFLE9BQTJCO1FBQXpELGlCQUlDO1FBSEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLElBQUk7WUFDNUIsT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJ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QkFDakIsb0JBQW9CO2dCQUZTLFlBQVk7Ozs0QkFEbEQ7Q0FvR0MsQUE3RkQsSUE2RkM7U0ExRlksaUJBQWlCOzs7Ozs7SUFFMUIsMENBQTZDOzs7OztJQUM3Qyx5Q0FBMkM7Ozs7O0lBQzNDLHVDQUE4Qzs7Ozs7SUFDOUMscURBQStEOzs7OztJQUMvRCx5Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEltYWdlU2VydmljZSwgU3ltYm9sU2VydmljZSwgTGF5ZXJTZXJ2aWNlIH0gZnJvbSAnQHhsYXllcnMvc2tldGNoLWxpYic7XHJcbmltcG9ydCB7IFdlYkNvZGVHZW5TZXJ2aWNlIH0gZnJvbSAnQHhsYXllcnMvd2ViLWNvZGVnZW4nO1xyXG5pbXBvcnQgeyBWdWVBZ2dyZWdhdG9yU2VydmljZSB9IGZyb20gJy4vdnVlLWFnZ3JlZ2F0b3Iuc2VydmljZSc7XHJcblxyXG50eXBlIFdlYkNvZGVHZW5PcHRpb25zID0gYW55O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVnVlQ29kZUdlblNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzeW1ib2xTZXJ2aWNlOiBTeW1ib2xTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgd2ViQ29kZUdlbjogV2ViQ29kZUdlblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFuZ3VsYXJBZ2dyZXRhdG9yU2VydmljZTogVnVlQWdncmVnYXRvclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxheWVyU2VydmljZTogTGF5ZXJTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBjb21wdXRlKFxyXG4gICAgY3VycmVudDogU2tldGNoTVNMYXllcixcclxuICAgIGRhdGE6IFNrZXRjaE1TRGF0YSxcclxuICAgIG9wdGlvbnM/OiBXZWJDb2RlR2VuT3B0aW9uc1xyXG4gICkge1xyXG4gICAgdGhpcy53ZWJDb2RlR2VuLmNvbXB1dGUoY3VycmVudCwgZGF0YSwgdGhpcy5jb21waWxlT3B0aW9ucyhvcHRpb25zKSk7XHJcbiAgfVxyXG5cclxuICBhZ2dyZWdhdGUoZGF0YTogU2tldGNoTVNEYXRhLCBvcHRpb25zPzogV2ViQ29kZUdlbk9wdGlvbnMpIHtcclxuICAgIHJldHVybiBkYXRhLnBhZ2VzLmZsYXRNYXAocGFnZSA9PlxyXG4gICAgICB0aGlzLnZpc2l0KHBhZ2UsIGRhdGEsIHRoaXMuY29tcGlsZU9wdGlvbnMob3B0aW9ucykpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaWRlbnRpZnkoY3VycmVudDogU2tldGNoTVNMYXllcikge1xyXG4gICAgcmV0dXJuIHRoaXMud2ViQ29kZUdlbi5pZGVudGlmeShjdXJyZW50KTtcclxuICB9XHJcblxyXG4gIGNvbnRleHQoY3VycmVudDogU2tldGNoTVNMYXllcikge1xyXG4gICAgcmV0dXJuIHRoaXMud2ViQ29kZUdlbi5jb250ZXh0KGN1cnJlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2aXNpdChcclxuICAgIGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIsXHJcbiAgICBkYXRhOiBTa2V0Y2hNU0RhdGEsXHJcbiAgICBvcHRpb25zPzogV2ViQ29kZUdlbk9wdGlvbnNcclxuICApIHtcclxuICAgIHJldHVybiB0aGlzLnZpc2l0Q29udGVudChjdXJyZW50LCBkYXRhLCBvcHRpb25zKS5jb25jYXQoXHJcbiAgICAgIHRoaXMuYW5ndWxhckFnZ3JldGF0b3JTZXJ2aWNlLmFnZ3JlZ2F0ZShjdXJyZW50LCBkYXRhLCBvcHRpb25zKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmlzaXRDb250ZW50KFxyXG4gICAgY3VycmVudDogU2tldGNoTVNMYXllcixcclxuICAgIGRhdGE6IFNrZXRjaE1TRGF0YSxcclxuICAgIG9wdGlvbnM6IFdlYkNvZGVHZW5PcHRpb25zXHJcbiAgKSB7XHJcbiAgICBpZiAodGhpcy5sYXllclNlcnZpY2UuaWRlbnRpZnkoY3VycmVudCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmlzaXRMYXllcihjdXJyZW50LCBkYXRhLCBvcHRpb25zKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zeW1ib2xTZXJ2aWNlLmlkZW50aWZ5KGN1cnJlbnQpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZpc2l0U3ltYm9sTWFzdGVyKGN1cnJlbnQsIGRhdGEsIG9wdGlvbnMpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmltYWdlU2VydmljZS5pZGVudGlmeShjdXJyZW50KSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5pbWFnZVNlcnZpY2UuYWdncmVnYXRlKGN1cnJlbnQsIGRhdGEsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2aXNpdExheWVyKFxyXG4gICAgY3VycmVudDogU2tldGNoTVNMYXllcixcclxuICAgIGRhdGE6IFNrZXRjaE1TRGF0YSxcclxuICAgIG9wdGlvbnM6IFdlYkNvZGVHZW5PcHRpb25zXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gdGhpcy5sYXllclNlcnZpY2VcclxuICAgICAgLmxvb2t1cChjdXJyZW50KVxyXG4gICAgICAuZmxhdE1hcChsYXllciA9PiB0aGlzLnZpc2l0Q29udGVudChsYXllciwgZGF0YSwgb3B0aW9ucykpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2aXNpdFN5bWJvbE1hc3RlcihcclxuICAgIGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIsXHJcbiAgICBkYXRhOiBTa2V0Y2hNU0RhdGEsXHJcbiAgICBvcHRpb25zOiBXZWJDb2RlR2VuT3B0aW9uc1xyXG4gICkge1xyXG4gICAgY29uc3Qgc3ltYm9sTWFzdGVyID0gdGhpcy5zeW1ib2xTZXJ2aWNlLmxvb2t1cChjdXJyZW50LCBkYXRhKTtcclxuICAgIGlmIChzeW1ib2xNYXN0ZXIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmlzaXQoc3ltYm9sTWFzdGVyLCBkYXRhLCBvcHRpb25zKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29tcGlsZU9wdGlvbnMob3B0aW9uczogV2ViQ29kZUdlbk9wdGlvbnMpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRleHRUYWdOYW1lOiAnc3BhbicsXHJcbiAgICAgIGJpdG1hcFRhZ05hbWU6ICdpbWcnLFxyXG4gICAgICBibG9ja1RhZ05hbWU6ICdkaXYnLFxyXG4gICAgICB4bWxQcmVmaXg6ICd4bHktJyxcclxuICAgICAgY3NzUHJlZml4OiAneGx5XycsXHJcbiAgICAgIGNvbXBvbmVudERpcjogJ2NvbXBvbmVudHMnLFxyXG4gICAgICBhc3NldERpcjogJ2Fzc2V0cycsXHJcbiAgICAgIC4uLm9wdGlvbnNcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==