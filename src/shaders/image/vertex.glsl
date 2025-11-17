uniform float uScrollSpeed;
uniform float uCurveStrength;
uniform float uCurveFrequency;

varying vec2 vUv;

#define PI 3.141592653

void main() {
  vec3 pos = position;
  vec3 worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;

  // X Displacement depending on the world position Y
  float xDisplacement = uCurveStrength * cos(worldPosition.y * uCurveFrequency);
  pos.x += xDisplacement;
  pos.x -= uCurveStrength;

  // Y Displacement according to the scroll speed
  float yDisplacement = -sin(uv.x * PI) * uScrollSpeed;
  pos.y += yDisplacement;

  gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );

  // VARYINGS
  vUv = uv;
}