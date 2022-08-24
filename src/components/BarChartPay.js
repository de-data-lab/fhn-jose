import React, { useEffect, useRef, useState } from "react";
import { select, scaleBand, scaleLinear, axisBottom, axisLeft, stack, max, stackOrderAscending, stackOrderDescending } from "d3";
import useResizeObserver from "./useResizeObserver";

const BarChartPay = ({ data, keys, colors }) => {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
    const svg = select(svgRef.current);

    if (!dimensions) return;

    const { width, height } = dimensions || wrapperRef.current.getBoundingClientRect();

    // stacks/layers

    const stackGenerator = stack().keys(keys).order(stackOrderAscending);
    const layers = stackGenerator(data);
    const extent = [0, Math.round(max(layers, layer => max(layer, sequence => sequence[1])))];

    // Scales
    const xScale = scaleBand().domain(data.map((d) => d.FinancialHealth)).range([0, width]).padding(0.25);
        
    const yScale = scaleLinear().domain(extent).range([height, 0]);

    // Rendering
    svg
    .selectAll('.layer')
    .data(layers).join('g')
    .attr('class', 'layer')
    .attr('fill', layer => {return colors[layer.key]})
    .selectAll('rect')
    .data(layer => layer)
    .join('rect')
    .attr('x', sequence => {
        return xScale(sequence.data.FinancialHealth)
    })
    .attr('width', xScale.bandwidth())
    .attr('y', sequence => yScale(sequence[1]))
    .attr('height', sequence => yScale(sequence[0]) - yScale(sequence[1]))

    // Axes
    const yAxis = axisLeft(yScale)
    const xAxis = axisBottom(xScale)

    svg.select(".y-axis")
    // .attr("transform", `translate(0, ${height})`)
    .call(yAxis)

    svg.select(".x-axis")
    .call(xAxis)
    .attr('transform', `translate(0, ${height})`)



  }, [colors, data, dimensions, keys]);

  return (
    <div ref={wrapperRef}>
      <svg ref={svgRef}>
        <g className="x-axis"></g>
        <g className="y-axis"></g>
      </svg>
    </div>
  );
};

export default BarChartPay;
