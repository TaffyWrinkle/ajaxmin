﻿function test1(){var n=[1,2,3,4,5,6,7,8,9,10],t=[for(t of n)if(t%2)t*t],i=[for(t of n)if(t!=2)for(i of n)if(i!=2)if(t!=i)[t,i]],r=[t*t for(t in n)if(t%2)];return t.concat(i,r)}