var wheel = $("#wheel");
var boxes = $(".box");

var center = 500;
var radius = 420;
var total  = boxes.length;
var slice  = 2 * Math.PI / total;

boxes.each(function(i, box) {
  
  var angle = i * slice;
  
  var x = center + radius * Math.sin(angle);
  var y = center - radius * Math.cos(angle);
    
  TweenLite.set(box, {
    rotation: angle + "_rad",
    xPercent: -50,
    yPercent: -50,
    x: x,
    y: y
  });  
});

Draggable.create(wheel, {
  type: "rotation",
  throwProps: true,
  minimumMovement: 10,
  dragClickables: true
});

// Prevent going to url for demo
$("a").click(function(e) {
  e.preventDefault();
  return false;
});