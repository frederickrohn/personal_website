export type ProjectMeta = {
  slug: string;
  title: string;
  description?: string;
};

export const projects: ProjectMeta[] = [
  { slug: 'full-stack-mern-app-trip-tease', title: 'full stack mern app: trip tease', description: 'A full-stack web application built with MongoDB, Express, React, and Node.js for trip planning and management.' },
  { slug: 'distributed-computing-raspberry-pi', title: 'distributed computing on raspberry pi', description: 'A distributed computing project using Raspberry Pi clusters for parallel processing and data analysis.' },
  { slug: 'pid-control-simulation-py', title: 'pid control simulation in py', description: 'A Python simulation implementing PID control algorithms for automated system control and optimization.' },
  { slug: 'high-performance-computing-mpi', title: 'high performance computing with mpi', description: 'High-performance computing implementation using Message Passing Interface (MPI) for parallel processing.' },
];
