#version 130
#use Common

in vec2 decay;

void main()
{
	const float steps = 7.;
	const float density = 70.;

	const float pi = 3.1415926535;
	const float step = pi / steps;

	float wave = 0.;
	vec2 pos = density * decay - 0.5 * density;

	for (float angle = 0.; angle < pi; angle += step)
		wave += 0.5 * cos(dot(pos, vec2(cos(angle), sin(angle))) + Common.Time) + 0.5;

	float phase = floor(mod(wave, 2.));
	wave = phase + sign(0.5 - phase) * fract(wave);

	gl_FragColor = vec4(vec3(wave), min(wave, pow(20. * decay.y, 2.)));
}
