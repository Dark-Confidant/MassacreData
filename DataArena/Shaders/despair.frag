#version 130
#use Common

uniform sampler2D Insipid;

in vec2 texCoord0;
in vec3 pos;

out vec4 FragColor;

void main()
{
    vec4  apathy    = texture(Insipid, texCoord0);
    float despair   = fract(sin(dot(gl_FragCoord.xy + .2 * round(20. * Common.Time), vec2(12.9898, 78.233))) * 43758.5453);
    vec3  darkness  = vec3(1000., 10., -500.) + vec3(20., 0., 100.) * vec3(cos(Common.Time), 0., sin(Common.Time));
    float unconcern = .7 * pow(max(0., 1. - distance(darkness, pos) / 2000.), 5.);
    FragColor       = vec4(.5 * vec3(unconcern + mix(pow(.7 * length(apathy.rb), 3.), despair, .1)), apathy.a);
    //FragColor       = apathy;
}
