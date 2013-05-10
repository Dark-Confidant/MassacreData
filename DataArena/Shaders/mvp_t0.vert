#version 130
#extension GL_ARB_explicit_attrib_location: enable

#use Camera

layout(location = 0) in vec3 Position;
layout(location = 2) in vec2 TexCoord0;

out vec2 texCoord0;
out vec3 pos;

void main()
{
    gl_Position = vec4(Position, 1.) * Camera.View * Camera.Projection;
    texCoord0   = TexCoord0;
    pos         = Position;
}
