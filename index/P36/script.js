let engine = Matter.Engine.create();
let render = Matter.Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 1400,
    height: 800,
    wireframes: false,
  },
});

var options = {
  friction: 1,
  restitution: 0,
};
let ground = Matter.Bodies.rectangle(900, 700, 900, 20, {
  isStatic: true,
});

let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: { render: { visible: false } },
});
render.mouse = mouse;

let ball = Matter.Bodies.circle(300, 600, 20);
let sling = Matter.Constraint.create({
  pointA: { x: 300, y: 600 },
  bodyB: ball,
  stiffness: 0.05,
});

let stack = Matter.Composites.stack(500, 50, 35, 32, 0, 0, function (x, y) {
  let size = Math.round(Matter.Common.random(20, 50));
  let size2 = Math.round(Matter.Common.random(1, 50));

  return Matter.Bodies.rectangle(x, y, 20, 20, options);
});
let firing = false;
Matter.Events.on(mouseConstraint, "enddrag", function (e) {
  if (e.body === ball) firing = true;
});
Matter.Events.on(engine, "afterUpdate", function () {
  if (
    firing &&
    Math.abs(ball.position.x - 300) < 20 &&
    Math.abs(ball.position.y - 600) < 20
  ) {
    ball = Matter.Bodies.circle(300, 600, 20);
    Matter.World.add(engine.world, ball);
    sling.bodyB = ball;
    firing = false;
  }
});

Matter.World.add(engine.world, [stack, ground, ball, sling, mouseConstraint]);
Matter.Engine.run(engine);
Matter.Render.run(render);
