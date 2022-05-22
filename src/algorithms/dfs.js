function dfs(grid, startNode, endNode) {
  let path = []
  let visitedNodes = []
  let openSet = []
  openSet.push(startNode)
  while (openSet.length) {
    let current = openSet.pop()
    // console.log(current);
    if (!current.isWall && (current === startNode || !current.isVisited)) {
      current.isVisited = true
      visitedNodes.push(current)
      // console.log(current);
      let row = current.x
      let col = current.y
      let next
      if (col > 0 && col <= grid[0].length - 1) {
        next = grid[row][col - 1]
        if (!next.isVisited && !next.isWall) {
          next.previous = current
          openSet.push(next)
        }
      }
      if (row < grid.length - 1) {
        next = grid[row + 1][col]
        if (!next.isVisited && !next.isWall) {
          next.previous = current
          openSet.push(next)
        }
      }
      if (col < grid[0].length - 1) {
        next = grid[row][col + 1]
        if (!next.isVisited && !next.isWall) {
          next.previous = current
          openSet.push(next)
        }
      }
      if (row > 0 && row <= grid.length - 1) {
        next = grid[row - 1][col]
        if (!next.isVisited && !next.isWall) {
          next.previous = current
          openSet.push(next)
        }
      }
      if (current === endNode) {
        break
      }
    }
  }
  console.log(visitedNodes)
  path = getNodes(endNode)
  return { path, visitedNodes }
}

function getNodes(endNode) {
  let path = []
  let current = endNode
  while (current != null) {
    path.unshift(current)
    current = current.previous
  }
  return path
}

export default dfs
