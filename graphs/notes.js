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


*/
