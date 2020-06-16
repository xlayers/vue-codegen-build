/// <reference types="sketchapp" />
export declare class VueDocGenService {
    aggregate(data: SketchMSData): {
        uri: string;
        value: string;
        language: string;
        kind: string;
    }[];
    private renderReadme;
}
