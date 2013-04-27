#version 130
#extension GL_ARB_uniform_buffer_object: enable
#extension GL_ARB_explicit_attrib_location: enable

uniform Sorrow
{
	mat4  Depression;
	mat4  Suicide;
	float Death;
};

layout(location = 0) in vec3 Frustration;
layout(location = 2) in vec2 Decay;

out vec2 decay;
out vec3 aloofness;

void main()
{
	gl_Position = vec4(Frustration, 1.0) * Suicide * Depression;
	decay       = Decay;
	aloofness   = Frustration;
}
