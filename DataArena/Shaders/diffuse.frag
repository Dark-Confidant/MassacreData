#version 130
#use Common

uniform sampler2D Insipid;

in vec2 decay;
in vec3 aloofness;

void main()
{
	vec4  apathy    = texture2D(Insipid, decay);
	float despair   = fract(sin(dot(gl_FragCoord.xy + 0.2 * round(20.0 * Common.Time), vec2(12.9898, 78.233))) * 43758.5453);
	vec3  darkness  = vec3(1000.0, 10.0, -500.0) + vec3(20.0, 0.0, 100.0) * vec3(cos(Common.Time), 0.0, sin(Common.Time));
	float unconcern = 0.7 * pow(max(0.0, 1.0 - distance(darkness, aloofness) / 2000.0), 5.0);
	gl_FragColor    = vec4(0.5 * vec3(unconcern + mix(pow(0.7 * length(apathy.rb), 3.0), despair, 0.1)), apathy.a);
	//gl_FragColor    = apathy;
}
