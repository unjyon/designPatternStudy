import Grimpan from "./AbstractGrimpan.js";
class ChromeGrimpan extends Grimpan {
    static instance;
    initialize() { }
    initializeMenu() { }
    static getInstance() {
        if (!this.instance) {
            this.instance = new ChromeGrimpan(document.querySelector("canvas"));
        }
        return this.instance;
    }
}
export default ChromeGrimpan;
// class Grimpan {
//   private static instance: Map<string, Grimpan | null> = new Map();
//   constructor(private readonly canvas: HTMLCanvasElement | null) {
//     if (!this.canvas || !(this.canvas instanceof HTMLCanvasElement)) {
//       throw new Error("canvas is not found");
//     }
//   }
//   static getInstance(canvasId: string) {
//     const instance = this.instance.get(canvasId);
//     if (instance) return instance;
//     const newInstance = new Grimpan(document.querySelector(`#${canvasId}`));
//     Grimpan.instance.set(canvasId, newInstance);
//     return newInstance;
//   }
// }
