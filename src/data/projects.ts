export interface ModelMetric {
  model: string;
  iou: number;
  f1: number;
  precision: number;
  recall: number;
  accuracy: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  isFeatured: boolean;
  status?: string;
  description: string;
  highlights?: string[];
  technologies: string[];
  /** Leave empty ("") to hide the button. */
  githubUrl: string;
  liveUrl?: string;
  paperUrl?: string;
  /** Optional image path in /public, e.g. "/projects/vectormind.png". */
  thumbnail?: string;
}

/**
 * Phase 2 (optimised) test-set results, copied from the
 * Satellite-Building-Extraction README. ResNet34 encoder (ImageNet).
 */
export const segmentationMetrics: ModelMetric[] = [
  { model: 'UNet', iou: 0.3736, f1: 0.5440, precision: 0.4664, recall: 0.6526, accuracy: 0.8587 },
  { model: 'UNet++', iou: 0.3725, f1: 0.5428, precision: 0.4777, recall: 0.6285, accuracy: 0.8633 },
  { model: 'MAnet', iou: 0.3616, f1: 0.5312, precision: 0.4376, recall: 0.6756, accuracy: 0.8460 },
  { model: 'DeepLabV3+', iou: 0.3505, f1: 0.5191, precision: 0.4507, recall: 0.6119, accuracy: 0.8536 },
  { model: 'LinkNet', iou: 0.3457, f1: 0.5138, precision: 0.4051, recall: 0.7024, accuracy: 0.8284 },
];

/** Dataset & training facts from the repository README. */
export const segmentationFacts = [
  { label: 'Region', value: 'New Delhi AOI' },
  { label: 'Imagery', value: '16-bit GeoTIFF' },
  { label: 'Patches', value: '3,798 × 256²' },
  { label: 'Split', value: '70 / 15 / 15' },
  { label: 'Labels', value: 'OSM footprints' },
  { label: 'Loss', value: 'Dice + BCE' },
  { label: 'Epochs', value: '100' },
  { label: 'GPU', value: 'RTX 3050' },
];

export const projects: ProjectItem[] = [
  {
    id: 'satellite-segmentation',
    title: 'Semantic Segmentation of Satellite Imagery for Automated Building Detection',
    category: 'AI/ML • Computer Vision • Research',
    isFeatured: true,
    status: 'Completed',
    description:
      'An end-to-end deep learning pipeline that extracts building footprints from high-resolution 16-bit satellite imagery, supporting urban planning and infrastructure analysis.',
    highlights: [
      'Generated ground-truth masks by aligning and rasterising OpenStreetMap building footprints onto the imagery.',
      'Tiled scenes into 256×256 patches, filtered sparse patches and split the data 70/15/15.',
      'Trained and benchmarked five architectures on a shared ImageNet-pretrained ResNet34 encoder.',
      'Phase 2 tuned 16-bit normalisation and switched to Dice + BCE loss with LR scheduling and mixed-precision training.',
    ],
    technologies: ['Python', 'PyTorch', 'Segmentation Models PyTorch', 'ResNet34', 'Rasterio', 'GeoPandas', 'OpenCV', 'NumPy'],
    githubUrl: 'https://github.com/Atharv-Dev04/Satellite-Building-Extraction',
    paperUrl: '',
  },
  {
    id: 'vectormind',
    title: 'VectorMind — Semantic Search & RAG Platform',
    category: 'AI Application • Full-Stack',
    isFeatured: false,
    description:
      'A retrieval-augmented generation platform built around a from-scratch Python vector engine (Brute Force, KD-Tree, HNSW), with document ingestion, JWT auth and a benchmarking dashboard. Runs local models via Ollama.',
    technologies: ['FastAPI', 'SQLAlchemy', 'Alembic', 'Pydantic', 'React', 'TypeScript', 'Ollama', 'HNSW'],
    githubUrl: 'https://github.com/Atharv-Dev04/My_Ai',
  },
  {
    id: 'school-management',
    title: 'School Management System',
    category: 'Full-Stack Development',
    isFeatured: false,
    description:
      'A FastAPI + React system with role-based portals for admins, teachers and students, covering classes, attendance, exams, results, audit logs and exports. Authorisation is enforced on the backend with JWT refresh tokens.',
    technologies: ['FastAPI', 'SQLAlchemy', 'Pydantic', 'JWT', 'SQLite', 'React', 'TypeScript', 'TanStack Query'],
    githubUrl: 'https://github.com/Atharv-Dev04/School-Mangement-System',
  },
  {
    id: 'insightpoint',
    title: 'InsightPoint — News Intelligence Platform',
    category: 'Frontend Development',
    isFeatured: false,
    description:
      'A React platform combining a filterable news feed with a document-analysis suite (sentiment, summarisation, keyword extraction, translation) and an analytics dashboard.',
    technologies: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Router', 'Recharts'],
    githubUrl: 'https://github.com/Atharv-Dev04/InsightPoint',
  },
  {
    id: 'taza-khabar',
    title: 'Taza-Khabar — News Web App',
    category: 'MERN Stack',
    isFeatured: false,
    description:
      'A news web app with a React + Bootstrap frontend (login, registration, news feed) and an Express/Mongoose backend for users and news data.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Bootstrap', 'Axios'],
    githubUrl: 'https://github.com/Atharv-Dev04/Taza-Khabar',
  },
];
