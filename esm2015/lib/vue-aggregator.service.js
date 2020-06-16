/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormatService } from '@xlayers/sketch-lib';
import { WebCodeGenService } from '@xlayers/web-codegen';
import * as i0 from "@angular/core";
import * as i1 from "@xlayers/sketch-lib";
import * as i2 from "@xlayers/web-codegen";
export class VueAggregatorService {
    /**
     * @param {?} formatService
     * @param {?} webCodeGenService
     */
    constructor(formatService, webCodeGenService) {
        this.formatService = formatService;
        this.webCodeGenService = webCodeGenService;
    }
    /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    aggregate(current, data, options) {
        /** @type {?} */
        const fileName = this.formatService.normalizeName(current.name);
        /** @type {?} */
        const files = this.webCodeGenService.aggregate(current, data, options);
        /** @type {?} */
        const html = files.find((/**
         * @param {?} file
         * @return {?}
         */
        file => file.language === 'html'));
        /** @type {?} */
        const css = files.find((/**
         * @param {?} file
         * @return {?}
         */
        file => file.language === 'css'));
        return [
            {
                kind: 'vue',
                value: this.renderSpec(current, options),
                language: 'javascript',
                uri: `${options.componentDir}/${fileName}.spec.js`
            },
            {
                kind: 'vue',
                value: this.renderComponent(current, html.value, css.value),
                language: 'html',
                uri: `${options.componentDir}/${fileName}.vue`
            }
        ];
    }
    /**
     * @private
     * @param {?} current
     * @param {?} html
     * @param {?} css
     * @return {?}
     */
    renderComponent(current, html, css) {
        return `\
<template>
${html}
</template>

<script>
${this.renderScript(current)}
</script>

<style>
${css}
</style>`;
    }
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    renderScript(current) {
        /** @type {?} */
        const importStatements = this.renderImportStatements(current);
        if (importStatements.length > 0) {
            /** @type {?} */
            const importDeclarations = this.generateVueImportDeclaration(current)
                .map((/**
             * @param {?} declaration
             * @return {?}
             */
            declaration => this.formatService.indent(2, declaration)))
                .join('\n');
            return `\
${importStatements}

export default {
  components: {
${importDeclarations}
  }
}`;
        }
        return 'export default {}';
    }
    /**
     * @private
     * @param {?} current
     * @param {?} options
     * @return {?}
     */
    renderSpec(current, options) {
        /** @type {?} */
        const className = this.formatService.className(current.name);
        /** @type {?} */
        const fileName = this.formatService.className(current.name);
        return `\
import { shallowMount } from "@vue/test-utils";
import ${className} from "./${options.componentDir}/${fileName}";

describe("${className}", () => {
  it("render", () => {
    const wrapper = shallowMount(${className}, {});
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
];`;
    }
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    renderImportStatements(current) {
        return [
            'import { Component } from \'@stencil/core\';',
            ...this.generateDynamicImport(current)
        ].join('\n');
    }
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    generateDynamicImport(current) {
        /** @type {?} */
        const context = this.webCodeGenService.context(current);
        return context && context.components
            ? context.components.map((/**
             * @param {?} component
             * @return {?}
             */
            component => {
                /** @type {?} */
                const importclassName = this.formatService.className(component);
                /** @type {?} */
                const importFileName = this.formatService.normalizeName(component);
                return `import { ${importclassName} } from "./${importFileName}"; `;
            }))
            : [];
    }
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    generateVueImportDeclaration(current) {
        /** @type {?} */
        const context = this.webCodeGenService.context(current);
        return context && context.components
            ? context.components.map((/**
             * @param {?} component
             * @return {?}
             */
            component => this.formatService.className(component)))
            : [];
    }
}
VueAggregatorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
VueAggregatorService.ctorParameters = () => [
    { type: FormatService },
    { type: WebCodeGenService }
];
/** @nocollapse */ VueAggregatorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function VueAggregatorService_Factory() { return new VueAggregatorService(i0.ɵɵinject(i1.FormatService), i0.ɵɵinject(i2.WebCodeGenService)); }, token: VueAggregatorService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLWFnZ3JlZ2F0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4bGF5ZXJzL3Z1ZS1jb2RlZ2VuLyIsInNvdXJjZXMiOlsibGliL3Z1ZS1hZ2dyZWdhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBT3pELE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBQy9CLFlBQ21CLGFBQTRCLEVBQzVCLGlCQUFvQztRQURwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3BELENBQUM7Ozs7Ozs7SUFFSixTQUFTLENBQ1AsT0FBc0IsRUFDdEIsSUFBa0IsRUFDbEIsT0FBMEI7O2NBRXBCLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDOztjQUN6RCxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQzs7Y0FDaEUsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLE1BQU0sRUFBQzs7Y0FDbkQsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUssRUFBQztRQUV2RCxPQUFPO1lBQ0w7Z0JBQ0UsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztnQkFDeEMsUUFB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LENBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUN4QztZQUNILENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDVCxDQUFDOzs7WUEvR0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUFEsYUFBYTtZQUNiLGlCQUFpQjs7Ozs7Ozs7SUFTdEIsNkNBQTZDOzs7OztJQUM3QyxpREFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1hdFNlcnZpY2UgfSBmcm9tICdAeGxheWVycy9za2V0Y2gtbGliJztcclxuaW1wb3J0IHsgV2ViQ29kZUdlblNlcnZpY2UgfSBmcm9tICdAeGxheWVycy93ZWItY29kZWdlbic7XHJcblxyXG50eXBlIFdlYkNvZGVHZW5PcHRpb25zID0gYW55O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVnVlQWdncmVnYXRvclNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBmb3JtYXRTZXJ2aWNlOiBGb3JtYXRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSB3ZWJDb2RlR2VuU2VydmljZTogV2ViQ29kZUdlblNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIGFnZ3JlZ2F0ZShcclxuICAgIGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIsXHJcbiAgICBkYXRhOiBTa2V0Y2hNU0RhdGEsXHJcbiAgICBvcHRpb25zOiBXZWJDb2RlR2VuT3B0aW9uc1xyXG4gICkge1xyXG4gICAgY29uc3QgZmlsZU5hbWUgPSB0aGlzLmZvcm1hdFNlcnZpY2Uubm9ybWFsaXplTmFtZShjdXJyZW50Lm5hbWUpO1xyXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLndlYkNvZGVHZW5TZXJ2aWNlLmFnZ3JlZ2F0ZShjdXJyZW50LCBkYXRhLCBvcHRpb25zKTtcclxuICAgIGNvbnN0IGh0bWwgPSBmaWxlcy5maW5kKGZpbGUgPT4gZmlsZS5sYW5ndWFnZSA9PT0gJ2h0bWwnKTtcclxuICAgIGNvbnN0IGNzcyA9IGZpbGVzLmZpbmQoZmlsZSA9PiBmaWxlLmxhbmd1YWdlID09PSAnY3NzJyk7XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAge1xyXG4gICAgICAgIGtpbmQ6ICd2dWUnLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlclNwZWMoY3VycmVudCwgb3B0aW9ucyksXHJcbiAgICAgICAgbGFuZ3VhZ2U6ICdqYXZhc2NyaXB0JyxcclxuICAgICAgICB1cmk6IGAke29wdGlvbnMuY29tcG9uZW50RGlyfS8ke2ZpbGVOYW1lfS5zcGVjLmpzYFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAga2luZDogJ3Z1ZScsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyQ29tcG9uZW50KGN1cnJlbnQsIGh0bWwudmFsdWUsIGNzcy52YWx1ZSksXHJcbiAgICAgICAgbGFuZ3VhZ2U6ICdodG1sJyxcclxuICAgICAgICB1cmk6IGAke29wdGlvbnMuY29tcG9uZW50RGlyfS8ke2ZpbGVOYW1lfS52dWVgXHJcbiAgICAgIH1cclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlckNvbXBvbmVudChjdXJyZW50OiBTa2V0Y2hNU0xheWVyLCBodG1sOiBzdHJpbmcsIGNzczogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gYFxcXHJcbjx0ZW1wbGF0ZT5cclxuJHtodG1sfVxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuJHt0aGlzLnJlbmRlclNjcmlwdChjdXJyZW50KX1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiR7Y3NzfVxyXG48L3N0eWxlPmA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlclNjcmlwdChjdXJyZW50OiBTa2V0Y2hNU0xheWVyKSB7XHJcbiAgICBjb25zdCBpbXBvcnRTdGF0ZW1lbnRzID0gdGhpcy5yZW5kZXJJbXBvcnRTdGF0ZW1lbnRzKGN1cnJlbnQpO1xyXG4gICAgaWYgKGltcG9ydFN0YXRlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBpbXBvcnREZWNsYXJhdGlvbnMgPSB0aGlzLmdlbmVyYXRlVnVlSW1wb3J0RGVjbGFyYXRpb24oY3VycmVudClcclxuICAgICAgICAubWFwKGRlY2xhcmF0aW9uID0+IHRoaXMuZm9ybWF0U2VydmljZS5pbmRlbnQoMiwgZGVjbGFyYXRpb24pKVxyXG4gICAgICAgIC5qb2luKCdcXG4nKTtcclxuICAgICAgcmV0dXJuIGBcXFxyXG4ke2ltcG9ydFN0YXRlbWVudHN9XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY29tcG9uZW50czoge1xyXG4ke2ltcG9ydERlY2xhcmF0aW9uc31cclxuICB9XHJcbn1gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAnZXhwb3J0IGRlZmF1bHQge30nO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJTcGVjKGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIsIG9wdGlvbnM6IFdlYkNvZGVHZW5PcHRpb25zKSB7XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmZvcm1hdFNlcnZpY2UuY2xhc3NOYW1lKGN1cnJlbnQubmFtZSk7XHJcbiAgICBjb25zdCBmaWxlTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5jbGFzc05hbWUoY3VycmVudC5uYW1lKTtcclxuXHJcbiAgICByZXR1cm4gYFxcXHJcbmltcG9ydCB7IHNoYWxsb3dNb3VudCB9IGZyb20gXCJAdnVlL3Rlc3QtdXRpbHNcIjtcclxuaW1wb3J0ICR7Y2xhc3NOYW1lfSBmcm9tIFwiLi8ke29wdGlvbnMuY29tcG9uZW50RGlyfS8ke2ZpbGVOYW1lfVwiO1xyXG5cclxuZGVzY3JpYmUoXCIke2NsYXNzTmFtZX1cIiwgKCkgPT4ge1xyXG4gIGl0KFwicmVuZGVyXCIsICgpID0+IHtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBzaGFsbG93TW91bnQoJHtjbGFzc05hbWV9LCB7fSk7XHJcbiAgICBleHBlY3Qod3JhcHBlci5pc1Z1ZUluc3RhbmNlKCkpLnRvQmVUcnV0aHkoKTtcclxuICB9KTtcclxufSk7XHJcbl07YDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVySW1wb3J0U3RhdGVtZW50cyhjdXJyZW50OiBTa2V0Y2hNU0xheWVyKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAnaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcXCdAc3RlbmNpbC9jb3JlXFwnOycsXHJcbiAgICAgIC4uLnRoaXMuZ2VuZXJhdGVEeW5hbWljSW1wb3J0KGN1cnJlbnQpXHJcbiAgICBdLmpvaW4oJ1xcbicpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZUR5bmFtaWNJbXBvcnQoY3VycmVudDogU2tldGNoTVNMYXllcikge1xyXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMud2ViQ29kZUdlblNlcnZpY2UuY29udGV4dChjdXJyZW50KTtcclxuICAgIHJldHVybiBjb250ZXh0ICYmIGNvbnRleHQuY29tcG9uZW50c1xyXG4gICAgICA/IGNvbnRleHQuY29tcG9uZW50cy5tYXAoY29tcG9uZW50ID0+IHtcclxuICAgICAgICAgIGNvbnN0IGltcG9ydGNsYXNzTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5jbGFzc05hbWUoY29tcG9uZW50KTtcclxuICAgICAgICAgIGNvbnN0IGltcG9ydEZpbGVOYW1lID0gdGhpcy5mb3JtYXRTZXJ2aWNlLm5vcm1hbGl6ZU5hbWUoY29tcG9uZW50KTtcclxuICAgICAgICAgIHJldHVybiBgaW1wb3J0IHsgJHtpbXBvcnRjbGFzc05hbWV9IH0gZnJvbSBcIi4vJHtpbXBvcnRGaWxlTmFtZX1cIjsgYDtcclxuICAgICAgICB9KVxyXG4gICAgICA6IFtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZVZ1ZUltcG9ydERlY2xhcmF0aW9uKGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIpIHtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLndlYkNvZGVHZW5TZXJ2aWNlLmNvbnRleHQoY3VycmVudCk7XHJcbiAgICByZXR1cm4gY29udGV4dCAmJiBjb250ZXh0LmNvbXBvbmVudHNcclxuICAgICAgPyBjb250ZXh0LmNvbXBvbmVudHMubWFwKGNvbXBvbmVudCA9PlxyXG4gICAgICAgICAgdGhpcy5mb3JtYXRTZXJ2aWNlLmNsYXNzTmFtZShjb21wb25lbnQpXHJcbiAgICAgICAgKVxyXG4gICAgICA6IFtdO1xyXG4gIH1cclxufVxyXG4iXX0=