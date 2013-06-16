#version 130
#extension GL_ARB_explicit_attrib_location: enable

#use Camera

layout(location = 0) in vec3 Position;
layout(location = 2) in vec2 TexCoord0;

out vec2 texCoord0;

void main()
{
    gl_Position = vec4(.7 * Camera.ZRange[1] * Position * mat3(Camera.View), 1.) * Camera.Projection;
    texCoord0   = TexCoord0;
}
