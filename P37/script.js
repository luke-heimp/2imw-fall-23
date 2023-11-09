console.log("Hello");

let engine = Matter.Engine.create();
let render = Matter.Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    width: 1600,
    height: 800,
  },
});

render.canvas.width = window.innerWidth;
render.canvas.height = window.innerHeight - 150;
render.options.background = "grey";
const options1 = {
  friction: 1,
  restitution: 0,
  render: {
    sprite: {
      texture: "dirt.jpg",
      xScale: 0.3,
      yScale: 0.3,
    },
  },
};

var defaultCategory = 0x0001,
  redCategory = 0x0002,
  yellowCategory = 0x0004;

let broom = Matter.Bodies.rectangle(350, 50, 100, 40, {
  collisionFilter: {
    category: yellowCategory,
  },
  isStatic: false,
  render: {
    sprite: {
      texture: "broom.png",
      xScale: 0.25,
      yScale: 0.25,
    },
  },
});

let turkey = Matter.Bodies.rectangle(100, 400, 80, 60, {
  collisionFilter: {
    category: yellowCategory,
  },
  isStatic: false,
  render: {
    sprite: {
      texture: "turkey.png",
      xScale: 0.23,
      yScale: 0.23,
    },
  },
});

let wine = Matter.Bodies.rectangle(19, 350, 31, 136, {
  collisionFilter: {
    category: yellowCategory,
  },
  isStatic: false,
  render: {
    sprite: {
      texture: "wine.png",
      xScale: 0.25,
      yScale: 0.25,
    },
  },
});

let gravy = Matter.Bodies.rectangle(104, 300, 72, 40, {
  collisionFilter: {
    category: yellowCategory,
  },
  isStatic: false,
  render: {
    sprite: {
      texture: "gravy.png",
      xScale: 0.25,
      yScale: 0.25,
    },
  },
});

let ground = Matter.Bodies.rectangle(677, 500, 861, 50, {
  collisionFilter: {
    category: redCategory,
  },
  isStatic: true,
  render: {
    fillStyle: "false",
    strokeStyle: "false",
    lineWidth: 0,
  },
});

let ground2 = Matter.Bodies.rectangle(55, 490, 200, 30, {
  collisionFilter: {
    category: redCategory,
  },
  isStatic: true,
  render: {
    fillStyle: "false",
    strokeStyle: "false",
    lineWidth: 0,
  },
});

let ground3 = Matter.Bodies.rectangle(2, 425, 1, 100, {
  collisionFilter: {
    category: redCategory,
  },
  isStatic: true,
  render: {
    fillStyle: "false",
    strokeStyle: "false",
    lineWidth: 0,
  },
});

let kitchen = Matter.Bodies.rectangle(700, 700, 4262.56, 3455.56, {
  collisionFilter: {
    mask: redCategory,
  },
  isStatic: true,
  render: {
    sprite: {
      texture: "kitchen.png",
      xScale: 0.199,
      yScale: 0.199,
    },
  },
});

let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: { render: { visible: false } },
});
render.mouse = mouse;

let ball = Matter.Bodies.circle(300, 600, 20);

let stack = Matter.Composites.stack(450, 50, 40, 30, 0, 0, function (x, y) {
  return Matter.Bodies.rectangle(x, y, 15, 15, options1, {
    collisionFilter: {
      category: redCategory,
    },
  });
});

Matter.World.add(engine.world, [
  kitchen,
  stack,
  ground,
  ground2,
  ground3,
  broom,
  turkey,
  gravy,
  wine,
  mouseConstraint,
]);
Matter.Engine.run(engine);
Matter.Render.run(render);

function resetEngine() {
  Matter.Composite.clear(world, true);
  Matter.Engine.world.gravity.y = 0.5;
}

$("#left").on("click", function () {
  location.reload();
});

$(function () {
  $("#draggable").draggable();
});

$(function () {
  $("#draggable3").draggable();
});

$(function () {
  $("#draggable4").draggable();
});
