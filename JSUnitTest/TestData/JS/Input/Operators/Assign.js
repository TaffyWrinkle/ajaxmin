function rho(foo, bar)
{
  var a = foo * bar;
  var b = (foo, bar), c = a*a;
  b += (foo || bar);
  c = (foo, bar);
  c = (b = 5) + 6;
  a = b = c = null;
  c = (b += a);
  a = foo + bar + 10 - 5;
  a = foo ? bar : 0;
}

