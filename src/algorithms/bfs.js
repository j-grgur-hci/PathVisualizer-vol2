function bfs(grid, startNode, endNode)
{
    // endNode.isVisited=false;
    let openSet=[startNode];
    let visitedNodes=[];
    while(openSet.length){
        console.log(grid[0].length);
        console.log(grid.length);
        const current=openSet.shift();
        // console.log(path);
        if( !current.isWall &&
            (current===startNode || !current.isVisited))
            {
                current.isVisited=true;
                visitedNodes.push(current);
                let row=current.x;
                let col=current.y;
                let next;
                if(row>0 && row<=grid.length-1){
                    next=grid[row-1][col];
                    if(!next.isVisited){
                         console.log(next);
                        next.previous=current;
                        openSet.push(next);
                    }
                }
                if(row<grid.length-1){
                    next=grid[row+1][col];
                     console.log(next);
                    if(!next.isVisited){
                        next.previous=current;
                        openSet.push(next);
                    }
                }
                if(col>0 && col<=grid[0].length-1){
                    next=grid[row][col-1];
                    if(!next.isVisited){
                        next.previous=current;
                        openSet.push(next);
                    }
                }
                if(col<grid[0].length-1){
                    next=grid[row][col+1];
                    if(!next.isVisited){
                         console.log(next);
                        next.previous=current;
                        openSet.push(next);
                    }
                }
                if(current===endNode)
                    break;
            }
        }
            console.log(visitedNodes);
            // console.log(openSet.length);
            let path=[];
            path=pathNodes(endNode);
            return {path,visitedNodes};
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



export default bfs;