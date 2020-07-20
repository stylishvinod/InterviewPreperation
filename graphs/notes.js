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

Eulerian Path:
-------------
    -> should cover every edge of graph only once but start and end points are 
        different
    -> condition for Eulerian path only 2 vertices has odd degree and other are
        even. Those 2 vertices having odd degree are start andd end vertex.

Types of representation of Graph::
----------------------------------
    1) Edge List
    2) Adjacency list
    3) Adjacency matrix
    4) Adjacency Map

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
323 : https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/  -- done
547 : https://leetcode.com/problems/friend-circles/ -- done(Same problem as above but you're given an adjacency matrix: very similar to Zombie clusters problem in practice set 1)
261: https://leetcode.com/problems/graph-valid-tree/ --done
785: https://leetcode.com/problems/is-graph-bipartite/ -- done
886: https://leetcode.com/problems/possible-bipartition/ -- done
(special case: Grids)
200: https://leetcode.com/problems/number-of-islands/ -- done
695: https://leetcode.com/problems/max-area-of-island/ -- done
733: https://leetcode.com/problems/flood-fill/  -- done

Directed Graphs
---------------
# BFS on Directed graphs
https://leetcode.com/problems/snakes-and-ladders/
https://leetcode.com/problems/word-ladder/ (extra)
126 -https://leetcode.com/problems/word-ladder-ii/ -- done
# DFS on Directed graphs
https://leetcode.com/problems/course-schedule/  -- Topological sort
https://leetcode.com/problems/course-schedule-ii/  -- Topoligical sort
https://leetcode.com/problems/critical-connections-in-a-network/  -- Tarjan's Algoritham

1135
787
743

Advanced Graph:
------------
https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/
1) Quick find - O(n^2) -- here every componetid will be changed to the other cmpID
    --> in this approach find is quick but union takes time
2) Quick union- O(n^2) -- here we change only root node cmpID
    --> in this approach find takes time, but union is quick
3) Weighted quick union by size - O(n log(n))    -- in above case tree may become skew, so to make
    that height to log(n)  when changing the parent, we need to change the parent of
    small tree parent to assign to large tree, so heigh will be equal to large tree.
4) Path compression - it is updating the parent node in all the children during 
    the searh in a path

https://leetcode.com/problems/redundant-connection/  -- done
https://leetcode.com/problems/regions-cut-by-slashes/
https://leetcode.com/problems/evaluate-division/
https://leetcode.com/problems/connecting-cities-with-minimum-cost/  -- done
https://leetcode.com/problems/cheapest-flights-within-k-stops/ -- done
https://leetcode.com/problems/network-delay-time/

Spanning Tree:
--------------
-> A tree which doesn't have cycles.
-> should connect all nodes.
--> should be min path/ cost

*** For N nodes to make a spanning tree there should be (N-1) edges, not 
    more than

    Different spanning tree algorithams
    -----------------------------------
    **Greedy Algoritham:
    ---------------------
    it is implemented using kruskals algoritham.
    -->sort all edge weights in increasing order
    --> start taking small edge first and check if it is creating a loop.
    --> then start fetching increasing order of weigths and everytime
        check for loop and finally create a minimum spanning tree
    --> Time complexity O(n log(n))
    --> We can use same find-unify code for this algorithm
    --> This approach can't form a growing structure like BFS or DFS. we take some
        random edges and connecting them finally a connected graph
    --> ex: 1135(leet code) 
    ** 2nd APproach - Prim's algorithm
    ----------------------------------
    -> start from any vertex.
    -> In each step, look for all edges crossing from LHS to RHS
        LHS:: means nodes that are already connected to the un connected nodes (RHS)
    --> O(n log(n)) space complexity O(m) m = edges
    

    Dijkstra's Algoritham:
    ----------------------
    It is similar to prim's algoritham.. but..
    
    Bellman-Ford Algorthim:
    ----------------------
    It is enhancement to Dijkstra's algorithm, where Dijkstra's algorthim only
    able to find the min path between source and destination. It can't handle
    if we want to find the destination within minimum hops(edges).
    Bellmanford can solve that issue(DP).

     1) Resting Nodes N-1 times, N is number of vertices or nodes.
     2) Resting means if(dp[v] > dp[u] + distance) {
         dp[v] = dp[u] + distance;
     }
     3) Normally after few iterations values will not change, we can brak the loop
     at that time.
     4) if there is a loop that is having total weight in negative, 
        bellman for algo fails;
        so once all N-1 time loop complete we have to check one more time, to check
        values are not chagned,if they changed then there is no min distance
        possible.
    Note:
    ----
    1)If we want to compute shortest path from src to des without hops we use
    only Dijkstra's algorithm. Because time complexity of
    Dijkstra's is O(nlog(n)) where as Bellmanford is O(n^2).
    2) Also Bellmanford algorithm works well on negative weights, but 
        Dijkstra's won't work.











*/