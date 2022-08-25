# AAACoder art-127
import turtle as tu 
import colorsys

tu.screen().bgcolor('green1')

t = tu.Turtle()
t . speed(0)
h=0

for i in range(200)
t. width(i//100+1)
c=colorsys.hsv_to_rgb(h,0.8,1)
t.pencolor(c)

t.right(179)
t.cricle(-i*0.5,180)
t.circle(i*0.5,180)
t.circle(-i*0.3)

h  +=0.005

tu.done|()