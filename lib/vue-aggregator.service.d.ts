/// <reference types="sketchapp" />
import { FormatService } from '@xlayers/sketch-lib';
import { WebCodeGenService } from '@xlayers/web-codegen';
declare type WebCodeGenOptions = any;
export declare class VueAggregatorService {
    private readonly formatService;
    private readonly webCodeGenService;
    constructor(formatService: FormatService, webCodeGenService: WebCodeGenService);
    aggregate(current: SketchMSLayer, data: SketchMSData, options: WebCodeGenOptions): {
        kind: string;
        value: string;
        language: string;
        uri: string;
    }[];
    private renderComponent;
    private renderScript;
    private renderSpec;
    private renderImportStatements;
    private generateDynamicImport;
    private generateVueImportDeclaration;
}
export {};
