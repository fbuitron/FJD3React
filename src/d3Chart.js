// import d3 from 'd3';
import * as d3 from 'd3'

var d3Chart = {};

d3Chart.create = function(el, props, state) {
  var svg = d3.select(el).append('svg')
      .attr('width', props.width)
      .attr('height', props.height);

  svg.append('circle')
      .attr('cx', 125)
      .attr('cy', 90)
      .attr('r', 5);

      svg.append('circle')
        .attr('cx',20)
        .attr('cy',20)
        .attr('r',20)
        .style('fill','red');

        svg.append('circle')
      .attr('cx', 43)
      .attr('cy', 90)
      .attr('r', 40);
      svg.append('circle')
      .attr('cx', 125)
      .attr('cy', 200)
      .attr('r', 12)
      .style('fill','blue');
      svg.append('circle')
      .attr('cx', 125)
      .attr('cy', 94)
      .attr('r', 9)
      .style('fill','purple');
      svg.append('circle')
      .attr('cx', 225)
      .attr('cy', 120)
      .attr('r', 45).style('fill','green');

//   this.update(el, state);
};

d3Chart.update = function(el, state) {
  // Re-compute the scales, and render the data points
  var scales = this._scales(el, state.domain);
  this._drawPoints(el, scales, state.data);
};

d3Chart.destroy = function(el) {
  // Any clean-up would go here
  // in this example there is nothing to do
};

d3Chart._scales = function(el, domain) {
  if (!domain) {
    return null;
  }

  var width = el.offsetWidth;
  var height = el.offsetHeight;

  var x = d3.scaleLinear()
    .range([0, width])
    .domain(domain.x);

  var y = d3.scaleLinear()
    .range([height, 0])
    .domain(domain.y);

  var z = d3.scaleLinear()
    .range([5, 20])
    .domain([1, 10]);
  return {x: x, y: y, z: z};
};

d3Chart._drawPoints = function(el, scales, data) {
  var g = d3.select(el).append("svg");

  var newData = [{ "x_axis": 30, "y_axis": 30, "radius": 20, "color" : "green" },{ "x_axis": 70, "y_axis": 70, "radius": 20, "color" : "purple"}];
  var point = g.selectAll('.d3-point')
    .data(newData);
  // ENTER
  point.enter().append('circle')
      .attr('class', 'd3-point');

  // ENTER & UPDATE
  point.attr('cx', 40)
      .attr('cy', 30)
      .attr('r', 20)
      .style("fill", "blue");

  // EXIT
  point.exit()
      .remove();
};

export default d3Chart;