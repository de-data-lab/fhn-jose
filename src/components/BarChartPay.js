import React, { useEffect, useRef, useState } from "react";
import {
  select,
  scaleBand,
  scaleLinear,
  axisBottom,
  axisLeft,
  stack,
  max,
  stackOrderAscending,
  stackOrderDescending,
} from "d3";
import useResizeObserver from "./useResizeObserver";
import * as d3 from "d3";

const BarChartPay = ({ data, keys, colors }) => {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
    const svg = select(svgRef.current);

    if (!dimensions) return;

    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    // stacks/layers
    const stackGenerator = stack().keys(keys).order(stackOrderAscending);
    const layers = stackGenerator(data);
    const extent = [
      0,
      Math.round(max(layers, (layer) => max(layer, (sequence) => sequence[1]))),
    ];

    // Scales
    // const xScale = scaleBand().domain(data.map((d) => d.FinancialHealth)).range([0, width]).padding(0.25);
    const xScale = scaleLinear().domain(extent).range([0, width]);

    const yScale = scaleBand()
      .domain(data.map((d) => d.FinancialHealth))
      .range([height, 0])
      .padding(0.25);
    // const yScale = scaleLinear().domain(extent).range([height, 0]);

    // Rendering
    // svg
    // .selectAll('.layer')
    // .data(layers).join('g')
    // .attr('class', 'layer')
    // .attr('fill', layer => {return colors[layer.key]})
    // .selectAll('rect')
    // .data(layer => layer)
    // .join('rect')
    // .attr('x', sequence => {
    //     return xScale(sequence.data.FinancialHealth)
    // })
    // // .attr('height', xScale.bandwidth())
    // .attr('y', sequence => yScale(sequence[1]))
    // .attr('height', sequence => yScale(sequence[0]) - yScale(sequence[1]))

    const tooltip = d3
      .select("#my_dataviz2")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "1px")
      .style("border-radius", "5px")
      .style("padding", "10px");

    // Three function that change the tooltip when user hover / move / leave a cell
    const mouseover = function (event, d) {
      const subgroupName = d3.select(this.parentNode).datum().key;
      const subgroupValue = d.data[subgroupName];
      tooltip
        .html("Grouping: " + subgroupName + "<br>" + "Value: " + parseFloat(subgroupValue).toFixed(1) + '%')
        .style("opacity", 1);
    };

    const mousemove = function (event, d) {
      tooltip
        .style("transform", "translateY(-55%)")
        .style("left",(event.x)/2+"px")
        .style("top",(event.y)-80+"px")
    };

    const mouseleave = function (event, d) {
      tooltip.style("opacity", 0);
    };

    svg
      .selectAll(".layer")
      .data(layers)
      .join("g")
      .attr("class", "layer")
      .attr("fill", (layer) => {
        return colors[layer.key];
      })
      .selectAll("rect")
      .data((layer) => layer)
      .join("rect")
      .attr("y", (sequence) => {
        console.log(sequence);
        return yScale(sequence.data.FinancialHealth);
      })
      .attr("height", yScale.bandwidth())
      .attr("x", (sequence) => xScale(sequence[0]))
      .attr("width", (sequence) => xScale(sequence[1]) - xScale(sequence[0]))
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)

    // Axes
    const yAxis = axisLeft(yScale);
    const xAxis = axisBottom(xScale);

    svg
      .select(".y-axis")
      .attr("class", "axis")
      // .attr("transform", `translate(0, ${height})`)
      .call(yAxis);

    svg
      .select(".x-axis")
      .attr("class", "axis")
      .call(xAxis)
      .attr("transform", `translate(0, ${height})`);
  }, [colors, data, dimensions, keys]);

  return (
    <>
    <div ref={wrapperRef} id="my_dataviz2" >
      <svg ref={svgRef} >
        <g className="x-axis"></g>
        <g className="y-axis"></g>
      </svg>
    </div>
    </>
  );
};

export default BarChartPay;
