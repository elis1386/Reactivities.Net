export interface PositionedImage {
  src: string;
  x: number;
  y: number;
  id: string;
  index: number;
}

export const generatePerimeterPositions = (imageNames: string[]): PositionedImage[] => {
  const centerX = window.innerWidth / 2 - 250;
  const centerY = window.innerHeight / 2 - 90;
  const radius = Math.min(centerX, centerY) * 1.8;
  const angleStep = (2 * Math.PI) / imageNames.length;

  return imageNames.map((name, index) => {
    const angle = angleStep * index;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    return {
      src: `/images/categoryImages/${name}`,
      x,
      y,
      id: `${name}-${Date.now()}-${Math.random()}`,
      index,
    };
  });
};
