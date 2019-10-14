// window.ts  
interface MyWindow extends Window {
  interactiveCanvas: any
}
declare var window: MyWindow;
export default window;  