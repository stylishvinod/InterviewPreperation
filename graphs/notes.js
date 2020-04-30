//Graphs
/*
Degree: is the number of adjucent verices to the given vertex
MultiGraph: if a graph contains self loops or two vetices for same NodeList.
G = (V, E); V=vertex E=edges

Eulerian cycle: traverse every vertex and end at same vertex it started
Eulerian path: traverse every vertex, but end at different vertex than the started.
-> every Eulerian cycle is Eulerian path but not the viceversa.

Start from any vertex and traverse every edge until you get back to that 
vertex. You just traced an Eulerian cycle, that visits every edge 
exactly once. Every Eulerian cycle is also an Eulerian path. The same 
cycle is also Hamiltonian because it visits every vertex exactly once. 
Every Hamiltonian cycle is also a Hamiltonian path. 


Connected Graph
Connected components

-> For every Eulerian cycle: every time we enter a vertex, we can exit
    it along some unused ende.
-> So Every Eulerian cycle degree of every vertex is even.
-> If degree of any vertex is odd that graph can't have Eulerian cycle

..> number of edges between 'n' vertices are nC2 = n(n-1)/2 = O(n^2);

Edge list
---------
To check number of adjucent vertices for a single vertex, we need to 
traverse all the edges it takes O(E);
space complexity O(E+V)

Adjacency list:
--------------
store all edges in a continous list
so access is constant time
object and pointer approach

Adjacency Matrix:
-----------------
representing all vetex in matrix form
time complexity O(n)
space complexity O(n^2)
It is useful for only dense graph.
Dense graph is one E ~ V^2
Sparse graph is one where E << V^2

Adjacency Map:
-------------


***Before checking graph has Eaulerian cycle or path, we need to check
if it is connect graph or not. if it is not connected there it selft
we an declare there is no Eulerian cycle even though degress is event.


** General Graph search::
-------------------------
 -> Fringe line:: that line(boundary) that connects captured and un captured
  sets.

  ->BFS(Breadth first search):
    Explore the graph in increasing order of distance from source vertex.
    --> Cross edge::
    --> Back edge


    Bipartite::


    # BFS/DFS on undirected graphs
https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/
https://leetcode.com/problems/friend-circles/ (Same problem as above but you're given an adjacency matrix: very similar to Zombie clusters problem in practice set 1)
https://leetcode.com/problems/graph-valid-tree/
https://leetcode.com/problems/is-graph-bipartite/
https://leetcode.com/problems/possible-bipartition/
(special case: Grids)
https://leetcode.com/problems/number-of-islands/
https://leetcode.com/problems/max-area-of-island/
https://leetcode.com/problems/flood-fill/

Directed Graphs
---------------
# BFS on Directed graphs
https://leetcode.com/problems/snakes-and-ladders/
https://leetcode.com/problems/word-ladder/ (extra)
# DFS on Directed graphs
https://leetcode.com/problems/course-schedule/
https://leetcode.com/problems/course-schedule-ii/
https://leetcode.com/problems/critical-connections-in-a-network/


Spanning Tree:
--------------
-> A tree which doesn't have cycles.
-> should connect all nodes.
--> should be min path.

*** For N nodes to make a spanning tree there should be (N-1) edges, not 
    more than

    Different spanning tree algorithams
    -----------------------------------
    **Greedy Algoritham:
    ---------------------
    it is implemented using kruskals algoritham.
    --> start taking small edge first and check if it is creating a loop.
    --> then start fetching increasing order of weigths and everytime
        check for loop and finally create a minimum spanning tree

    
    









*/