function overlay(image) {
  return {
    show: false,
    opacity: 0.5,
    image,
    init() {
      window.addEventListener('keydown', (event) => {
        if (event.key === 'd' || event.key === 'D') {
          this.show = !this.show;
        }
        if (event.key === '[') {
          this.opacity = Math.max(0, +(this.opacity - 0.05).toFixed(2));
        }
        if (event.key === ']') {
          this.opacity = Math.min(1, +(this.opacity + 0.05).toFixed(2));
        }
      });
    }
  };
}
