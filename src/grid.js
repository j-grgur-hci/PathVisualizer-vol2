import React,{useState,useEffect} from 'react';
import Node from './Node';
import './grid.css';
import Astar from './algorithms/astar';
import dijkstra from './algorithms/dijkstra';
import dfs from './algorithms/dfs';
import bfs from './algorithms/bfs';
import {Grid} from '@mui/material';
const rows=12;
const cols=35;
const NODE_START_ROW=0;
const NODE_START_COL=0;
const NODE_END_ROW=rows-1;
// const NODE_END_ROW=3;
const NODE_END_COL=cols-1;
// const NODE_END_COL=3;


const PathFind=()=>{
    const [grid,setGrid]=useState([]); 
    const [Path,setPath]=useState([]); 
    const [visitedNodes,setVisitedNodes]=useState([]);
    useEffect(()=>{ 
        initialGrid();
    },[])
    //CREATING THE GRID
    const initialGrid=()=>{
        // const grid=new Array(cols);
        const grid=new Array();
        for (let i=0;i<rows;i++){
            grid[i]=new Array(cols); 

        }
        for(let i=0;i<rows;i++){
            for(let j=0;j<cols;j++){
                grid[i][j]=new Spot(i,j);
            }
            setGrid(grid);
        }
        addNeighbours(grid);
        
        const startNode=grid[NODE_START_ROW][NODE_START_COL];
        const endNode=grid[NODE_END_ROW][NODE_END_COL];
        startNode.isWall=false;
        endNode.isWall=false;

        document.getElementById('grid').addEventListener('click',function(e){
            var target=e.target;
            if(target.id==='3'){
            Display();
            visualizeDijkstra(grid,startNode,endNode);
            
           document.getElementById('h5_pseudo').innerHTML="Dijkstrin algoritam se koristi redom s prioritetom kao strukturom podataka, pri čemu je svaki element povezan s prioritetom te se obrađuje prema istome. Razlika između reda s prioritetom i običnog reda je da obični red funkcionira po principu FIFO (First In First Out), a red s prioritetom funkcionira na osnovu prioriteta odnosno element s najvećim prioritetom se prvi miče.                 Implementacija algoritma može biti opisana na sljedeći način:"
           const pseudo_list=document.getElementById('pseudo_lista')
           const pseudo1 =document.createElement('li');
            pseudo1.appendChild(document.createTextNode("Svi čvorovi se označuju kao neposjećeni te se stvori lista istih"));
            pseudo_list.appendChild(pseudo1);
           const pseudo2 =document.createElement('li');
            pseudo2.appendChild(document.createTextNode("Inicijaliziraju se udaljenosti čvorova, pri čemu se udaljenost početnog čvora postavi na nulu, a udaljenost preostalih čvorova na beskonačno (oznaka da nisu posjećeni)"));
            pseudo_list.appendChild(pseudo2);
           const pseudo3 =document.createElement('li');
            pseudo3.appendChild(document.createTextNode("Izračunava se udaljenost susjednih čvorova trenutnog čvora"));
            pseudo_list.appendChild(pseudo3);
           const pseudo4 =document.createElement('li');
            pseudo4.appendChild(document.createTextNode("Trenutni čvor se označava kao posjećen i miče se iz liste neposjećenih (posjećeni čvor se više nikad neće provjeriti)"));
            pseudo_list.appendChild(pseudo4);
           const pseudo5 =document.createElement('li');
            pseudo5.appendChild(document.createTextNode("Ako je odredišni čvor označen kao posjećen ili ako je najmanja udaljenost između čvorova u neposjećenom skupu beskonačna tada je algoritam gotov"));
            pseudo_list.appendChild(pseudo5);
           const pseudo6 =document.createElement('li');
            pseudo6.appendChild(document.createTextNode("Ukoliko algoritam nije gotov, odabire se neposjećeni čvor sa najmanjom udaljenošću te se postavi kao novi trenutni čvor  i vraća se natrag na 3.korak"));
            pseudo_list.appendChild(pseudo6);

    
            document.getElementById('h5_primjer').innerHTML=""
            document.getElementById('h5p_slozenost').innerHTML="Prostorna složenost u najgorem slučaju je O(E+V log⁡V) koristeći red s prioritetom"
            document.getElementById('h5v_slozenost').innerHTML="Vremenska složenost je pri tome O (V)."
            const ul = document.getElementById("ul_primjena");
            const li = document.createElement("li");
            li.appendChild(document.createTextNode("Google Maps -Postoji mnogi broj različitih puteva između dvije geografske lokacije, no Dijkstrin algoritam   omogućava da se pronađe najkraći od tih puteva. Primjerice, put Split – Beč koji se mogu promatrati kao dva čvora, a moguće puteve između te dvije lokacije kao rubove"));
            ul.appendChild(li);
            const li1 = document.createElement("li");
            li1.appendChild(document.createTextNode("Društvene mreže – Koristi se za listu predloženih prijatelja koje bi korisnik mogao znati, a radi na osnovu različitih poveznica između korisnika"));
            ul.appendChild(li1);
            const li2 = document.createElement("li");
            li2.appendChild(document.createTextNode("Plan leta – Kada zaposlenik treba za klijenta odrediti letove s kojima će u najkraćem vremenskom roku doći do željenog odredišta"));
            ul.appendChild(li2);
            const li3 = document.createElement("li");
            li3.appendChild(document.createTextNode("IP usmjeravanje za pronalaženje najprije otvorenog najkraćeg puta – Najprije otvoren najkraći put je protokol koji se koristi kako bi se pronašao najbolji put između izvora i odredišnog routera koji koristi najkraći put "));
            ul.appendChild(li3); 
        }
            else if(target.id==='4'){
                Display();
            visualizeA(startNode,endNode);
            document.getElementById('h5_pseudo').innerHTML="A* algoritam se implementira poput Dijkstre, preko reda s prioritetom, ali u odnosu na Dijkstru koristi heuristiku za pretraživanje čvorova tako da je vjerojatnije da će se ciljni čvor prije pronaći.Implementacija algoritma se može opisati na sljedeći način:"
            const pseudo_list=document.getElementById('pseudo_lista')
           const pseudo1 =document.createElement('li');
            pseudo1.appendChild(document.createTextNode("Inicijalizira se lista posjećenih i neposjećenih čvorova"));
            pseudo_list.appendChild(pseudo1);
           const pseudo2 =document.createElement('li');
            pseudo2.appendChild(document.createTextNode("Čvor sa najmanjim F troškom se premješta iz liste neposjećenih u listu posjećenih  čvorova"));
            pseudo_list.appendChild(pseudo2);
           const pseudo3 =document.createElement('li');
            pseudo3.appendChild(document.createTextNode("Ako se susjed trenutnog čvora ne nalazi u neposjećenoj listi  izračunava se F vrijednost te se dodaje u listu"));
            pseudo_list.appendChild(pseudo3);
           const pseudo4 =document.createElement('li');
            pseudo4.appendChild(document.createTextNode("Ako susjedni čvor se nalazi u listi posjećenih čvorova, ignorira se"));
            pseudo_list.appendChild(pseudo4);
           const pseudo5 =document.createElement('li');
            pseudo5.appendChild(document.createTextNode("Ako se susjedni čvor nalazi u listi neposjećenih, uspoređuje se F vrijednost trenutnog čvora i preostalih susjednih čvorova te ukoliko je manja"));
            pseudo_list.appendChild(pseudo5);
            document.getElementById('h5_primjer').innerHTML="";
             document.getElementById('h5p_slozenost').innerHTML="Prostorna složenost u najgorem slučaju je O(V)."
            document.getElementById('h5v_slozenost').innerHTML="Vremenska složenost A* ovisi o heuristici. U najgorem slučaju neograničenog prostora za pretraživanje, broj proširenih čvorova eksponencijalno je u dubini rješenja (najkraći put) d: O b^d), gdje je b faktor grananja(prosječan broj nasljednika po stanju). To pretpostavlja da ciljno stanje uopće postoji, i daje dostupan iz početnog stanja; ako nije, a prostor stanja je beskonačan, algoritam se neće završiti. Vremenska je složenost polinomska kada je prostor za pretraživanje stablo, postoji jedno stanje cilja i heuristička funkcija h zadovoljava sljedeće uvjete:|h(x) - h^*(x)| = O(\log h^*(x))gdje je h * je optimalan heuristički, točan trošak za doći od x do cilja."
            const ul = document.getElementById("ul_primjena");
            const li = document.createElement("li");
            li.appendChild(document.createTextNode("Videoigre – A* algoritam je široko upotrebljavan za rješavanje problema pronalaženja puta"));
            ul.appendChild(li);
            const li1 = document.createElement("li");
            li1.appendChild(document.createTextNode("Optimizacija pretraživanja "));
            ul.appendChild(li1);
            const li2 = document.createElement("li");
            li2.appendChild(document.createTextNode("Strojno učenje"));
            ul.appendChild(li2);
            const li3 = document.createElement("li");
            li3.appendChild(document.createTextNode("Umjetna inteligencija"));
            ul.appendChild(li3);
        }
            else if(target.id==='2'){
                Display();
            visualizeDFS(grid,startNode,endNode);
            var pseudo_img=document.getElementById('pseudo_slika');
            pseudo_img.setAttribute('src', "./images/algorithm_img/dfs_pseudo.png");
            document.getElementById('h5_pseudo').innerHTML="Rekurzija DFS algoritma se implementira uporabom stoga, pri čemu će svaki čvor grafa biti označen ako posjećen ili neposjećen.                                                Implementacija može biti opisana na sljedeći način:  "                                                             
            const pseudo_list=document.getElementById('pseudo_lista')
           const pseudo1 =document.createElement('li');
            pseudo1.appendChild(document.createTextNode("Odabere se početni čvor te se stave njegovi susjedi na vrh"));
            pseudo_list.appendChild(pseudo1);
           const pseudo2 =document.createElement('li');
            pseudo2.appendChild(document.createTextNode("Skida se čvor sa vrha stoga te ga se stavlja u listu posjećenih čvorova"));
            pseudo_list.appendChild(pseudo2);
           const pseudo3 =document.createElement('li');
            pseudo3.appendChild(document.createTextNode("Susjedi tog čvora koji se ne nalaze u listi posjećenih čvorova potom se stavljaju na vrh stoga                                                                                      "));
            pseudo_list.appendChild(pseudo3);
           const pseudo4 =document.createElement('li');
            pseudo4.appendChild(document.createTextNode("Ponavlja se 2. i 3. korak dok stog ne bude prazan "));
            pseudo_list.appendChild(pseudo4);
        
            document.getElementById('h5_primjer').innerHTML=""
            document.getElementById('h5p_slozenost').innerHTML="Prostorna složenost je O(V)."
            document.getElementById('h5v_slozenost').innerHTML="Vremenska složenost je O(V) + O(E) = O(V + E)"
            const ul = document.getElementById("ul_primjena");
            const li = document.createElement("li");
            li.appendChild(document.createTextNode("Rješavanje zagonetki poput labirinta i sudoku-a"));
            ul.appendChild(li);
            const li1 = document.createElement("li");
            li1.appendChild(document.createTextNode("Topološko sortiranje"));
            ul.appendChild(li1);
            const li2 = document.createElement("li");
            li2.appendChild(document.createTextNode("Mapiranje ruta i analiza mreže(primjerice testiranje je li graf bipartitan)"));
            ul.appendChild(li2);
            const li3 = document.createElement("li");
            li3.appendChild(document.createTextNode("Detekcija ciklusa u grafovima"));
            ul.appendChild(li3); 
        }
            else if(target.id==='1'){
                Display();
            visualizeBFS(grid,startNode,endNode);
              document.getElementById('h5_pseudo').innerHTML="Algoritam pretraživanja u širinu se koristi redom kao strukturom podataka u koji se dodaju svi susjedi nekoga čvora. Implementacija algoritma može biti opisana na sljedeći način:"
            const pseudo_list=document.getElementById('pseudo_lista')
           const pseudo1 =document.createElement('li');
            pseudo1.appendChild(document.createTextNode("Odabere se početni čvor te se stavi na početak reda"));
            pseudo_list.appendChild(pseudo1);
           const pseudo2 =document.createElement('li');
            pseudo2.appendChild(document.createTextNode("Čvor s početka reda se skine te se doda listi posjećenih čvorova"));
            pseudo_list.appendChild(pseudo2);
           const pseudo3 =document.createElement('li');
            pseudo3.appendChild(document.createTextNode("Stvara se lista susjednih čvorova te se u nju dodaju oni susjedi koji nisu posjećeni "));
            pseudo_list.appendChild(pseudo3);
           const pseudo4 =document.createElement('li');
            pseudo4.appendChild(document.createTextNode("Ponavlja se 2. i 3.korak dok red nije prazan "));
            pseudo_list.appendChild(pseudo4);
        
            document.getElementById('h5_primjer').innerHTML=""
            document.getElementById('h5p_slozenost').innerHTML="Prostorna složenost je O(V)."
            document.getElementById('h5v_slozenost').innerHTML="Vremenska složenost je O(V) + O(E) = O(V + E)"
            const ul = document.getElementById("ul_primjena");
            const li = document.createElement("li");
            li.appendChild(document.createTextNode("GPS navigacijski sustav- za pronalaženje susjednih lokacija s određenog izvornog  mjesta"));
            ul.appendChild(li);
            const li1 = document.createElement("li");
            li1.appendChild(document.createTextNode("Društvene mreže- može se pronaći broj ljudi na određenoj udaljenosti ‘k’ od osobe "));
            ul.appendChild(li1);
            const li2 = document.createElement("li");
            li2.appendChild(document.createTextNode("P2P (Peer to Peer) mreže -mreže poput BitTorrent-a koriste BFS za pronalaženje svih susjednih čvorova određenog čvora"));
            ul.appendChild(li2);
            const li3 = document.createElement("li");
            li3.appendChild(document.createTextNode("Pauci za optimizaciju tražilice- Glavna ideja koja stoji iza indeksiranja jest započeti s izvorne stranice i slijediti sve veze s tog izvora na druge stranice te stalno ponavljati isto"));
            ul.appendChild(li3); 
        }
        },false);
        
    };

//BFS
const visualizeBFS=(grid,startNode,endNode)=>{
    let path=bfs(grid,startNode,endNode);
    setPath(path.path);
    setVisitedNodes(path.visitedNodes); 
}


//A*
const visualizeA=(startNode,endNode)=>{
    let path=Astar(startNode,endNode);
    setPath(path.path);
    setVisitedNodes(path.visitedNodes); 
}

//DFS
const visualizeDFS=(grid,startNode,endNode)=>{
    let path=dfs(grid,startNode,endNode);
    setPath(path.path);
    setVisitedNodes(path.visitedNodes);
}

//DIJKSTRA
const visualizeDijkstra=(grid,startNode,endNode)=>{
    let path=dijkstra(grid,startNode,endNode);
    setPath(path.path);
    setVisitedNodes(path.visitedNodes);

}



//add neighbours
const addNeighbours=(grid)=>{
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            grid[i][j].addNeighbours(grid);
        }

    }
}


//THE SPOT
function Spot(i,j){
    this.x=i;
    this.y=j;
    this.isStart=this.x===NODE_START_ROW && this.y===NODE_START_COL;
    this.isEnd=this.x===NODE_END_ROW && this.y===NODE_END_COL;
    this.g=0;
    this.f=0;
    this.h=0;
    this.distance= Infinity;
    this.neighbours=[];
    this.isVisited=false;
    this.isWall=false;
    this.isWeight=false;
    if(Math.random(1)<0.1){
        this.isWall=true;
    }
    this.previous=null;
    this.parent=null;
    this.addNeighbours= function(grid)
    {
        let i=this.x;
        let j=this.y;

        if(i>0) this.neighbours.push(grid[i-1][j]);
        if(i<rows-1) this.neighbours.push(grid[i+1][j]);
        if(j>0) this.neighbours.push(grid[i][j-1]);
        if(j<cols-1) this.neighbours.push(grid[i][j+1]);
    };

} 
// //GRID WITH SPOTS
const gridWithNode=(
    <div>
        {grid.map((row, rowIndex)=>{
            return(
            <div key={rowIndex} className='row'>
                {row.map((col, colIndex)=>{
                    const{ isStart, isEnd, isWall, isWeight,isVisited, }=col;
                    return (
                        <Node 
                        key={colIndex} 
                        isStart={isStart} 
                        isEnd={isEnd} 
                        row={rowIndex} 
                        col={colIndex}
                        isWall={isWall}
                        isWeight={isWeight}
                        // isVisited={isVisited}
                        />
                    )
                })}

            </div>
            )
        })}
    </div> 
);
const visualizeShorthestPath=(shorthestPathNodes)=>{
   for(let i=1;i<shorthestPathNodes.length-1;i++){
       setTimeout(()=>{
           const node=shorthestPathNodes[i];
            document.getElementById(`node-${node.x}-${node.y}`).className='node node-shorthest-path';
       }, 200*i);
   } 
}
//A*
const visualizePathAstar=()=>{
    // console.log('visualize path');
       for(let i=1;i<=visitedNodes.length-1;i++){
       if(i===visitedNodes.length-1){
        setTimeout(()=>{
        visualizeShorthestPath(Path);
       }, 30*i);
    }
    else{
        setTimeout(()=>{
        const node=visitedNodes[i];
        document.getElementById(`node-${node.x}-${node.y}`).className='node node-visited';
        },20*i);
   }
    }
}
//DFS
const visualizePathDFS=()=>{
    // console.log('visualize path');
       for(let i=1;i<=visitedNodes.length-1;i++){
           console.log(visitedNodes[i]);
       if(i===visitedNodes.length-1){
        setTimeout(()=>{
        visualizeShorthestPath(Path);
       }, 30*i);
    }
    else{
        setTimeout(()=>{
        const node=visitedNodes[i];
        document.getElementById(`node-${node.x}-${node.y}`).className='node node-visited';
        },20*i);
   }
    }
}
//BFS
const visualizePathBFS=()=>{
       for(let i=1;i<=visitedNodes.length-1;i++){
       if(i===visitedNodes.length-1){
        setTimeout(()=>{
        visualizeShorthestPath(Path);
       }, 30*i);
    }
    else{
        setTimeout(()=>{
        const node=visitedNodes[i];
        document.getElementById(`node-${node.x}-${node.y}`).className='node node-visited';
        }, 20*i);
   }
    }
}
//DIJKSTRA
const visualizePathDijkstra=()=>{
       for(let i=1;i<=visitedNodes.length-1;i++){
       if(i===visitedNodes.length-1){
        setTimeout(()=>{
        visualizeShorthestPath(Path);
       }, 30*i);
    }
    else{
        setTimeout(()=>{
        const node=visitedNodes[i];
        document.getElementById(`node-${node.x}-${node.y}`).className='node node-visited';
        },20*i);
   }
    }
}
// CLEAR WALLS
const clearWalls=()=>{
for(let i=0;i<grid.length;i++){
    for(let j=0;j<grid[0].length;j++){
        let cell=grid[i][j];
        if(cell.isWall){
            const node=cell;
            node.isWall=false;
            document.getElementById(`node-${node.x}-${node.y}`).className='node node';
            console.log(cell);
        }
        }
    }
}

// CLEAR BOARD

const clearBoard=()=>{
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            let cell=grid[i][j];
            if(cell.isWall){
                const node=cell;
                node.isVisited=true;
                document.getElementById(`node-${node.x}-${node.y}`).className='node node';
            }
            if(cell.isVisited && (!cell.isStart && !cell.isEnd)){
                const node=cell;
                node.isVisited=false;
                node.distance=Infinity;
                document.getElementById(`node-${node.x}-${node.y}`).className='node node';
            }
            if(cell.isStart)
            {
                const node=cell;
                node.isVisited=true;
                node.distance=0;
                document.getElementById(`node-${node.x}-${node.y}`).className='node node-start';
            }
            if(cell.isEnd)
            {
                const node=cell;
                node.isVisited=false;
                node.distance=Infinity;
                document.getElementById(`node-${node.x}-${node.y}`).className='node node-end';
            }
        }
    }
}

//CLEAR PATH

const clearPath=()=>{
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            let cell=grid[i][j];
          if(cell.isVisited && (!cell.isStart && !cell.isEnd)){
                const node=cell;
                node.previous=null;
                node.isVisited=false;
                node.distance=Infinity;
                document.getElementById(`node-${node.x}-${node.y}`).className='node node';
            }
             if(cell.isStart)
            {
                const node=cell;
                node.previous=null;
                node.isVisited=false;
                node.distance=0;
                document.getElementById(`node-${node.x}-${node.y}`).className='node node-start';
            }
            if(cell.isEnd)
            {
                const node=cell;
                node.previous=null;
                node.isVisited=false;
                node.distance=Infinity;
                document.getElementById(`node-${node.x}-${node.y}`).className='node node-end';
            }

        }}
};
function Display() {
    setTimeout(()=>{
        var x = document.querySelectorAll('.komponenta, .navigation');
        for(let i=0;i<x.length;i++){
        if (x[i].style.display === 'none') {
          x[i].style.display = 'block';
           console.log(x[i].style.display);
        } else {
          x[i].style.display = 'none';
           console.log('none je');
        }}
    },)
}
function RemoveDisplay(){
       setTimeout(()=>{
        var x = document.querySelectorAll('.komponenta, .navigation');
        console.log(x);
        for(let i=0;i<x.length;i++){
        if (x[i].style.display === 'block') {
          x[i].style.display = 'none';
        } else {
          x[i].style.display = 'none';
        }}
       document.getElementById("ul_primjena").innerHTML = "";
       document.getElementById('pseudo_lista').innerHTML="";
    },) 
}

return(
    <div>

    <div class='main' id='grid' >
        {/* <button type='button' class='button' onClick={clearWalls}>Clear walls</button> */}
        {/* <button type='button' class='button' onClick={clearBoard}>Clear board</button> */}
         <Grid container spacing={0} direction="column" >
        <Grid item xs={12} style={{maxWidth:'85%', margin:'auto',position:'relative'}}  >
        <button type='button' class='button' id='1'  onClick={visualizePathBFS}>BFS</button> 
        <button type='button' class='button' id='2' onClick={visualizePathDFS}>DFS</button> 
        <button type='button' class='button' id='3' onClick={visualizePathDijkstra}>Dijkstra</button> 
        <button type='button'class='button' id='4' onClick={visualizePathAstar} >A*</button>
        </Grid>
        <Grid item xs={12}style={{maxWidth:'85%', margin:'auto',position:'relative'}}onClick={RemoveDisplay} >
        {/* <button type='button' class='clear' onClick={clearPath} >Clear path</button> */} 
        <button type='button' class='clear' onClick={clearPath}>CLEAR PATH</button>
        {/* <button type='button' class='clear' onClick={clearPath}>NEW WALLS</button> */}
        </Grid>
        </Grid>
        {gridWithNode}
    </div>
    </div>
)
}

export default PathFind; 