#version 130
#extension GL_ARB_uniform_buffer_object: enable

uniform Sorrow
{
	mat4  Depression;
	mat4  Suicide;
	float Death;
};

in vec2 decay;

vec2 cossin(float a)
{
	return vec2(cos(a), sin(a));
}

void main()
{
	const float steps = 7.;
	const float density = 70.;

	const float step = 3.1415926535 / steps;

	float wave = 0.;
	vec2 pos = density * decay - 0.5 * density;

	for (float i = 0.; i < steps; ++i)
		wave += 0.5 * cos(dot(pos, cossin(i * step)) + Death) + 0.5;

	float phase = floor(mod(wave, 2.));
	wave = phase + sign(0.5 - phase) * fract(wave);

	gl_FragColor = vec4(vec3(wave), min(wave, pow(20. * decay.y, 2.)));
}
