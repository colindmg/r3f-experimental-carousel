uniform float uScrollSpeed;
uniform float uDisplacementStrength;

varying vec2 vUv;
varying vec3 vWorldPosition;

#define PI 3.141592653

void main() {
  vec3 pos = position;
  vec3 worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;

  // X Displacement depending on the world position Y
  float xDisplacement = uDisplacementStrength * cos(worldPosition.y * 0.4)/2. + 0.3;
  pos.x += xDisplacement;

  // Y Displacement according to the scroll speed
  float yDisplacement = -sin(uv.x * PI) * uScrollSpeed * 0.003;
  pos.y += yDisplacement;

  gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );

  // VARYINGS
  vUv = uv;
  vWorldPosition = worldPosition;
}