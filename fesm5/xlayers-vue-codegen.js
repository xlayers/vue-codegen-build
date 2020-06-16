import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { __spread, __assign } from 'tslib';
import { FormatService, SymbolService, ImageService, LayerService } from '@xlayers/sketch-lib';
import { WebCodeGenService, WebCodeGenModule } from '@xlayers/web-codegen';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ VueDocGenService.ngInjectableDef = ɵɵdefineInjectable({ factory: function VueDocGenService_Factory() { return new VueDocGenService(); }, token: VueDocGenService, providedIn: "root" });
    return VueDocGenService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        return __spread([
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
    /** @nocollapse */ VueAggregatorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function VueAggregatorService_Factory() { return new VueAggregatorService(ɵɵinject(FormatService), ɵɵinject(WebCodeGenService)); }, token: VueAggregatorService, providedIn: "root" });
    return VueAggregatorService;
}());
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
        return __assign({ textTagName: 'span', bitmapTagName: 'img', blockTagName: 'div', xmlPrefix: 'xly-', cssPrefix: 'xly_', componentDir: 'components', assetDir: 'assets' }, options);
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
    /** @nocollapse */ VueCodeGenService.ngInjectableDef = ɵɵdefineInjectable({ factory: function VueCodeGenService_Factory() { return new VueCodeGenService(ɵɵinject(SymbolService), ɵɵinject(ImageService), ɵɵinject(WebCodeGenService), ɵɵinject(VueAggregatorService), ɵɵinject(LayerService)); }, token: VueCodeGenService, providedIn: "root" });
    return VueCodeGenService;
}());
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
var VueCodeGenModule = /** @class */ (function () {
    function VueCodeGenModule() {
    }
    VueCodeGenModule.decorators = [
        { type: NgModule, args: [{
                    imports: [WebCodeGenModule]
                },] }
    ];
    return VueCodeGenModule;
}());

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
