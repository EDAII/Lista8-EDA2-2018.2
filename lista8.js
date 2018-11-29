function floydWarshall(graph) {
  const dist = [];

  for (let i = 0; i < graph.length; i++) {
    dist[i] = [];
    for (let j = 0; j < graph.length; j++) {
      if (i === j) {
        dist[i][j] = 0;
      } else if (!isFinite(graph[i][j])) {
        dist[i][j] = Infinity;
      } else {
        dist[i][j] = graph[i][j];
      }
    }
  }
  for (let k = 0; k < graph.length; k++) {
    for (let i = 0; i < graph.length; i++) {
      for (let j = 0; j < graph.length; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }
  return dist;
};

function printGraph(floydWarshallGraph) {
  let line = '';
  for (let i = 0; i < floydWarshallGraph.length; ++i) {
    line = '';
    for (var j = 0; j < floydWarshallGraph.length; ++j) {
      if (floydWarshallGraph[i][j] === INF) line += 'INF ';
      else line += floydWarshallGraph[i][j] + '   ';
    }
    console.log(line);
  }
  console.log('\n');
}

function printResult(floydWarshallGraph) {
  for (let i = 0; i < floydWarshallGraph.length; ++i) {
    for (var j = 0; j < floydWarshallGraph.length; ++j) {
      if (j === 0) {
        console.log('\n\nA menor distancia de ' + cities[i] + ' para: ')
      }
      else {
        if (floydWarshallGraph[i][j] !== 0) {
          console.log(cities[j] + ' é ' + floydWarshallGraph[i][j] + 'Km.');
        }
      }
    }
  }
}

const INF = Infinity;
const cities = ['Brasília', 'Goiânia', 'Campo Grande', 'Blumenau', 'Curitiba', 'Santos', 'Belo Horizonte', 'Rio de Janeiro', 'Maceió', 'Natal', 'Boa Vista', 'Belém', 'Florianópolis', 'Petrópolis']
const graph = [
  [INF, 173, INF, 1624, INF, INF, 716, INF, INF, 2275, INF, INF, INF, INF],
  [173, INF, 877, INF, INF, INF, 874, INF, INF, INF, INF, 2046, INF, INF],
  [INF, 877, INF, INF, 780, INF, INF, INF, INF, INF, 2667, INF, INF, INF],
  [1624, INF, INF, INF, 228, INF, INF, INF, INF, INF, INF, INF, 139, INF],
  [INF, INF, 780, 228, INF, 480, INF, INF, INF, INF, INF, INF, 300, INF],
  [INF, INF, INF, INF, 480, INF, 658, 501, INF, INF, INF, INF, INF, INF],
  [716, 874, INF, INF, INF, 658, INF, INF, INF, INF, INF, INF, INF, 376],
  [INF, INF, INF, INF, INF, 501, INF, INF, 2448, INF, INF, INF, INF, 66],
  [INF, INF, INF, INF, INF, INF, INF, 2448, INF, 540, INF, 2081, INF, INF],
  [2275, INF, INF, INF, INF, INF, INF, INF, 540, INF, INF, INF, INF, INF],
  [INF, INF, 2667, INF, INF, INF, INF, INF, INF, INF, INF, 1433, INF, INF],
  [INF, 2046, INF, INF, INF, INF, INF, INF, 2081, INF, 1433, INF, INF, INF],
  [INF, INF, INF, 139, 300, INF, INF, INF, INF, INF, INF, INF, INF, INF],
  [INF, INF, INF, INF, INF, INF, 376, 66, INF, INF, INF, INF, INF, INF]
];

dist = floydWarshall(graph);
console.log('Entry Graph\n');
printGraph(graph);
console.log('Floyd-Warshall Graph\n');
printGraph(dist);
printResult(dist);