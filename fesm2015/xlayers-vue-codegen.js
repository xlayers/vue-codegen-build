import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { FormatService, SymbolService, ImageService, LayerService } from '@xlayers/sketch-lib';
import { WebCodeGenService, WebCodeGenModule } from '@xlayers/web-codegen';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VueDocGenService {
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
/** @nocollapse */ VueDocGenService.ngInjectableDef = ɵɵdefineInjectable({ factory: function VueDocGenService_Factory() { return new VueDocGenService(); }, token: VueDocGenService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VueAggregatorService {
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
/** @nocollapse */ VueAggregatorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function VueAggregatorService_Factory() { return new VueAggregatorService(ɵɵinject(FormatService), ɵɵinject(WebCodeGenService)); }, token: VueAggregatorService, providedIn: "root" });
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VueCodeGenService {
    /**
     * @param {?} symbolService
     * @param {?} imageService
     * @param {?} webCodeGen
     * @param {?} angularAggretatorService
     * @param {?} layerService
     */
    constructor(symbolService, imageService, webCodeGen, angularAggretatorService, layerService) {
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
    compute(current, data, options) {
        this.webCodeGen.compute(current, data, this.compileOptions(options));
    }
    /**
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    aggregate(data, options) {
        return data.pages.flatMap((/**
         * @param {?} page
         * @return {?}
         */
        page => this.visit(page, data, this.compileOptions(options))));
    }
    /**
     * @param {?} current
     * @return {?}
     */
    identify(current) {
        return this.webCodeGen.identify(current);
    }
    /**
     * @param {?} current
     * @return {?}
     */
    context(current) {
        return this.webCodeGen.context(current);
    }
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    visit(current, data, options) {
        return this.visitContent(current, data, options).concat(this.angularAggretatorService.aggregate(current, data, options));
    }
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    visitContent(current, data, options) {
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
    }
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    visitLayer(current, data, options) {
        return this.layerService
            .lookup(current)
            .flatMap((/**
         * @param {?} layer
         * @return {?}
         */
        layer => this.visitContent(layer, data, options)));
    }
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    visitSymbolMaster(current, data, options) {
        /** @type {?} */
        const symbolMaster = this.symbolService.lookup(current, data);
        if (symbolMaster) {
            return this.visit(symbolMaster, data, options);
        }
        return [];
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    compileOptions(options) {
        return Object.assign({ textTagName: 'span', bitmapTagName: 'img', blockTagName: 'div', xmlPrefix: 'xly-', cssPrefix: 'xly_', componentDir: 'components', assetDir: 'assets' }, options);
    }
}
VueCodeGenService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
VueCodeGenService.ctorParameters = () => [
    { type: SymbolService },
    { type: ImageService },
    { type: WebCodeGenService },
    { type: VueAggregatorService },
    { type: LayerService }
];
/** @nocollapse */ VueCodeGenService.ngInjectableDef = ɵɵdefineInjectable({ factory: function VueCodeGenService_Factory() { return new VueCodeGenService(ɵɵinject(SymbolService), ɵɵinject(ImageService), ɵɵinject(WebCodeGenService), ɵɵinject(VueAggregatorService), ɵɵinject(LayerService)); }, token: VueCodeGenService, providedIn: "root" });
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VueCodeGenModule {
}
VueCodeGenModule.decorators = [
    { type: NgModule, args: [{
                imports: [WebCodeGenModule]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { VueCodeGenModule, VueCodeGenService, VueDocGenService, VueAggregatorService as ɵa };
//# sourceMappingURL=xlayers-vue-codegen.js.map
