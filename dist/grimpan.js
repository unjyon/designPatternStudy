class Grimpan {
    static instance;
    constructor(canvas) {
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error("canvas 엘리먼트를 입력하세요");
        }
    }
    initialize() { }
    initializeMenu() { }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Grimpan(document.querySelector("canvas"));
        }
        return this.instance;
    }
}
export default Grimpan;
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
