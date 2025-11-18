uniform float uScrollSpeed;
uniform float uCurveStrength;
uniform float uCurveFrequency;

varying vec2 vUv;

#define PI 3.141592653

void main() {
  vec3 pos = position;
  vec3 worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;

  // Y Displacement depending on the world position X
  float yDisplacement = uCurveStrength * cos(worldPosition.x * uCurveFrequency);
  pos.y += yDisplacement;
  pos.y -= uCurveStrength;

  // X Displacement according to the scroll speed
  float xDisplacement = -sin(uv.y * PI) * uScrollSpeed;
  pos.x += xDisplacement;

  gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );

  // VARYINGS
  vUv = uv;
}