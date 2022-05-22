function Astar(startNode, endNode) {
  let openSet = []
  let closedSet = []
  let path = []
  let visitedNodes = []

  openSet.push(startNode)
  while (openSet.length) {
    let lowestF = 0
    for (let i = 0; i < openSet.length; i++) {
      if (openSet[i].f < openSet[lowestF].f) {
        lowestF = i
      }
    }
    let current = openSet[lowestF]
    current.isVisited = true
    visitedNodes.push(current)
    if (current === endNode) {
      path = getNodes(endNode)
      console.log(visitedNodes)
      return { path, visitedNodes }
    }

    openSet = openSet.filter((Element) => Element !== current)
    closedSet.push(current)

    let neighbours = current.neighbours
    for (let i = 0; i < neighbours.length; i++) {
      let neighbour = neighbours[i]
      if (!neighbour.isVisited && !neighbour.isWall) {
        let temp = current.g + 1
        if (!neighbour.isVisited) {
          if (temp < neighbour.g) {
            neighbour.g = temp
            neighbour.h = heuristic(neighbour, endNode)
            neighbour.f = neighbour.g + neighbour.h
            neighbour.previous = current
          } else {
            neighbour.g = temp
            openSet.push(neighbour)
            neighbour.h = heuristic(neighbour, endNode)
            neighbour.f = neighbour.g + neighbour.h
            neighbour.previous = current
          }
        }
      }
    }
  }
  return { path, visitedNodes, error: "No path found!" }
}

function getNodes(endNode) {
  const path = []
  let current = endNode
  while (current != null) {
    path.unshift(current)
    current = current.previous
  }
  return path
}

function heuristic(a, b) {
  let D = Math.abs(b.x - a.x) + Math.abs(b.y - a.y)
  return D
}

export default Astar
