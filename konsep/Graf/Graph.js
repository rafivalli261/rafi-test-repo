class Graph {
	constructor(edgeDirection = Graph.DIRECTED) {
		this.nodes = new Map();
		this.edgeDirection = edgeDirection;
	}

	addEdge(source, destination) {
		const sourceNode = this.addVertex(source);
		const destinationNode = this.addVertex(destination);

		sourceNode.addAdjacent(destinationNode);

		if (this.edgeDirection === Graph.UNDIRECTED) {
			destinationNode.addAdjacent(sourceNode);
		}

		return [sourceNode, destinationNode];
	}

	addVertex(value) {
		if (this.nodes.has(value)) {
			return this.nodes.get(value);
		} else {
			const vertex = new Node(value);
			this.nodes.set(value, vertex);
			return vertex;
		}
	}

	removeVertex(value) {
		const current = this.nodes.get(value);
		if (current) {
			for (const node of this.nodes.values()) {
				node.removeAdjacent(current);
			}
		}
		return this.nodes.delete(value);
	}

	*bfs(first) {
		const visited = new Map();
		const visitList = new Queue();

		visitList.add(first);

		while (!visitList.isEmpty()) {
			const node = visitList.remove();
			if (node && !visited.has(node)) {
				yield node;
				visited.set(node);
				node.getAdjacents().forEach((adj) => visitList.add(adj));
			}
		}
	}
}

Graph.UNDIRECTED = Symbol("directed graph");
Graph.DIRECTED = Symbol("undirected graph");

const graph = new Graph(Graph.UNDIRECTED);

const [first] = graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(5, 2);
graph.addEdge(6, 3);
graph.addEdge(7, 3);
graph.addEdge(8, 4);
graph.addEdge(9, 5);
graph.addEdge(10, 6);

bfsFromFirst = graph.bfs(first);

bfsFromFirst.next().value.value; // 1
bfsFromFirst.next().value.value; // 2
bfsFromFirst.next().value.value; // 3
bfsFromFirst.next().value.value; // 4
// ...
