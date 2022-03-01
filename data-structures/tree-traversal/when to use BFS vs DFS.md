# Prefering DFS

when a tree is lot wider, then depth first search should be used as maintaining queue in breadth first search
will consume a lot of space and it will increase space complexity of the solution.
there will be fewer nodes to keep track of.

# Prefering BFS

If a really deep long tree with less width, then BFS makes sense.


# When to use DFS In-order

when you want the items to be returned in a sorted order, meaning the items to the left are less than root and items to right are greater than root and look more in sorted manner in increasing order.

# When to use DFS pre-order

when you want to export the tree or flatten it out later or clone/duplicate the tree. You know what the root of the tree is.