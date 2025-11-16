precision highp float;

uniform sampler2D uTexture;
uniform vec2 uPlaneSizes;
uniform vec2 uImageSizes;

varying vec2 vUv;
varying vec3 vWorldPosition;

void main() {
  // Calculate the proper UVs to cover the plane with the image while keeping its aspect ratio
  vec2 ratio = vec2(
    min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
    min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
  );

  vec2 uv = vec2(
    vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
    vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
  );

  // vec3 finalColor = vec3(1. - abs(vWorldPosition.y) * 0.15, 0., 0.);
  // vec3 finalColor = vec3(clamp(0., 1., vWorldPosition.y + 3.5));

  vec3 finalColor = texture2D(uTexture, uv).rgb;
  
  gl_FragColor.rgb = vec3(finalColor);
  gl_FragColor.a = 1.0;
}