#version 130
#use Sun

uniform sampler2D Texture0;

in vec3 normal;
in vec2 texCoord0;

out vec4 FragColor;

void main()
{
    float intensity = Sun.Brightness * dot(normal, -Sun.Direction);

    FragColor = max(Sun.ShadowColor, intensity * Sun.Color)
              * texture(Texture0, texCoord0);
}
