function dijkstra(grid,startNode,endNode)
{
    let path=[];
    startNode.distance=0;
    let openSet=[];
    let visitedNodes=[];
    openSet=getNodes(grid);
    console.log(openSet);
    while(openSet.length)
    {
        sortNodesByDistance(openSet);
        const closest=openSet.shift();
        if(closest.isWall) continue;
        if(closest.distance===Infinity) return {path,visitedNodes,error:"No path found"};

        closest.isVisited=true;
        visitedNodes.push(closest);

        if(closest.isEnd)
        break;
        console.log(closest);
        updateUnvisitedNeighbours(closest,grid);
    }

    console.log(visitedNodes);
    path=pathNodes(endNode);
    console.log(path);
    return {path,visitedNodes}
}

function updateUnvisitedNeighbours(closest,grid)
{
    const unvisited=getNeighbours(closest,grid);
    // console.log(unvisited);
    for(const neighbour of unvisited){
        neighbour.distance=closest.distance+1;
        neighbour.previous=closest;
    }
}
function getNeighbours(node,grid)
{const neighbours=[];
let row=node.x;
let col=node.y;
if(row>0) neighbours.push(grid[row-1][col]);
if(row<grid.length-1) neighbours.push(grid[row+1][col]);
if(col>0) neighbours.push(grid[row][col-1]);
if(col<grid[0].length-1) neighbours.push(grid[row][col+1])
return neighbours.filter((neighbour)=> !neighbour.isVisited);
}

function sortNodesByDistance(openSet){
    openSet.sort((nodeA,nodeB)=>nodeA.distance-nodeB.distance)
}

function pathNodes(endNode)
{const path=[];
let curentNode=endNode;
while(curentNode!=null)
{
    path.unshift(curentNode);
    curentNode=curentNode.previous;
}

return path
}

function getNodes(grid)
{
    const nodes=[];
    for(const row of grid){
        for(const node of row){
            nodes.push(node);
        }
    }
  return nodes;  
}

export default dijkstra;