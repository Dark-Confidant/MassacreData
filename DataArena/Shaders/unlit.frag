#version 130

uniform sampler2D Texture0;

in vec2 texCoord0;

out vec4 FragColor;

void main()
{
    FragColor = texture(Texture0, texCoord0);
}
