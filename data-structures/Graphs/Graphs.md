# Graphs

A graph is a collection of nodes and connections between those nodes.

### Uses for Graphs

- Social networking
- Location / Mapping
- Routing algorithms
- Visual hierarchy
- File system optimizations

### Essential Graph Terms

- Vertex : a node
- Edge : Connection between nodes

### Types of Graphs

- Unweighted : no values assigned to the edges of the graph.
- Weigthed: values assigned to the edges of the graph.
- Directed : A directed graph is oftern represented with arrows, which indicated the direction, the polarity of that edge.
- Undirected : there is no direction to or polarity,to the edges of graph. there is no direction associated to it, you can go either way between the vertex if they are connected.

## Graph representations

### Adjacency lists

Adjacency list is the most common way to represent graphs. With this approach of representing a graph, each node stores a list of its adjacent vertices. For undirected graphs, each edge from u to v would be stored twice: once in u's list of neighbors and once in v's list of neighbors.

### Adjacency matrix

An adjacency matrix represents a graph with n nodes as a n by n boolean matrix, in which matrix[u][v] is set to true if an edge exists from node u to node v.
