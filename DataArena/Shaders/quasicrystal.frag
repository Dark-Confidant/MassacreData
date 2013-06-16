#version 130
#use Common

in vec2 texCoord0;

out vec4 FragColor;

void main()
{
    const float steps     = 5.;
    const float density   = 50.;
    const float timeScale = 3.;

    const float pi   = 3.1415926535;
    const float step = pi / steps;

    float wave = 0.;
    vec2 pos = density * texCoord0 - .5 * density;

    for (float angle = 0.; angle < pi; angle += step)
        wave += .5 * cos(dot(pos, vec2(cos(angle), sin(angle))) + timeScale * Common.Time) + .5;

    float phase = floor(mod(wave, 2.));
    wave = phase + sign(.5 - phase) * fract(wave);

    FragColor = vec4(wave * vec3(1.5, 1.5, 1.2), min(wave, pow(20. * texCoord0.y, 2.)));
}
